import { User } from "./user.model";

export class Chatmessage {
    content?: string;
    date?: Date;
    friendID?: {
        username?:string,
        _id?:string
    }
    userID?: {
        username?:string,
        _id?:string
    }
    __v?: number;
    _id?: string;
}
