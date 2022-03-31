export type ChatMessageDTO = {
  avatar: string;
  text: string;
  userID: string;
  roomID: string;
};

export type JoinRoomDTO = {
  join?: string;
  avatar: string;
  leave?: string;
};

export type RoomPayload = {
  username: string;
  userID: string;
};
