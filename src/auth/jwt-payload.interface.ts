/**
 * The JWT payload can contain publically available information about a user we want to display on the front end
 */
export interface JwtPayload {
  email: string;
  avatar: string;
}
