import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configValidationSchema } from './config.schema';
import { UserModule } from './auth/user.module';
import { ServeStaticModule } from '@nestjs/serve-static';

// TODO: Can we setup a "GamesModule" to import all games in one call?
import { ChatModule } from './games/chat/chat.module';
import { join } from 'path';
import { ItemsModule } from './items/items.module';
import { ShopModule } from './shop/shop.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env`],
      validationSchema: configValidationSchema,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    UserModule,
    ChatModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const isProduction = configService.get('STAGE') === 'prod';

        return {
          ssl: isProduction,
          extra: {
            ssl: isProduction ? { rejectUnauthorized: false } : null,
          },
          type: 'postgres',
          autoLoadEntities: true,
          synchronize: true,
          host: configService.get('DB_HOST'),
          port: configService.get('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_DATABASE'),
        };
      },
    }),
    AuthModule,
    ItemsModule,
    ShopModule,
  ],
})
export class AppModule {}
