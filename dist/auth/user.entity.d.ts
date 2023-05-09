import { UserStatus } from './user-status.enum';
export declare class User {
    id: number;
    uuid: string;
    email: string;
    username: string;
    password: string;
    avatar: string;
    tickets: number;
    premium_tickets: number;
    premium: boolean;
    refreshToken: string;
    refreshTokenExpires: Date;
    status: UserStatus;
    createdAt: Date;
    updatedAt: Date;
}
