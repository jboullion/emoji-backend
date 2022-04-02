export type ChatMessageDTO = {
  avatar: string;
  text: string;
  clientID: string;
  roomID: string;
};

export type ChangeRoomDTO = {
  join?: string;
  leave?: string;
  avatar: string;
};

export type RoomUser = {
  username: string;
  clientID: string;
  roomID: string;
};

export type Room = {
  name: string;
  users: RoomUser[];
};
