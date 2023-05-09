export declare type ChatMessageDTO = {
    avatar: string;
    text: string;
    clientID: string;
    roomID: string;
};
export declare type ChangeRoomDTO = {
    join?: string;
    leave?: string;
    avatar: string;
};
export declare type RoomUser = {
    username: string;
    clientID: string;
    roomID: string;
};
export declare type Room = {
    name: string;
    users: RoomUser[];
};
