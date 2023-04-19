import { Review } from "./review";

export class User {
    id:number;
    username:String;
    firstName:String;
    lastName:String;
    reviews:Review[];
}