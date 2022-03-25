/**
 * The JWT payload can contain publically available information about a user we want to display on the front end
 */
export interface JwtPayload {
  uuid: string;
  username: string;
  email: string;
  avatar: string;
}
