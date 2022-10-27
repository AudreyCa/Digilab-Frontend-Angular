import { User } from "./cours-exemple.model";
import { Message } from "./message.model";


export class Room {
    
    readonly _id?: string;
    ownersID?: User[];
    usersID?: User[];
    messagesID?: Message[];

}
