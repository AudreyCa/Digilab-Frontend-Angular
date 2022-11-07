import { Message } from "./message.model";
import { Room } from "./room.model";

export class User {

    username!: string;
    firstName!: string;
    lastName!: string;
    avatar!: string;
    readonly _id?: string;
    email?: string;
    roomsID?: Room[];
    sentMessagesID?: Message[];
    receivedMessagesID?: Message[];
    isLoggedIn?: boolean;
    token?: string;
    country?: string;
    city?: string;
    street?: string;
    zipCode?: number;
    phoneNumber?: string;
    dialCode?: string;
    skills?: string;
    role?: string;
    friendsID?: User[];
    birthDate?: number;
    password?: string;
    confirmPassword?: string;
    online?: boolean;


    constructor() {}

}