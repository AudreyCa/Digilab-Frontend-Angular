import { User } from "./user.model";



export class Message {

    readonly _id?: string;
    userID?: User[];
    roomID?: User[];
    driendID?: User[];
    date?: Date;
    content?: string;

}
