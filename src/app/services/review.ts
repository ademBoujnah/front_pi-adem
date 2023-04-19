import { User } from "./user";
export class Review {
    id:number ;
    content:String ;
    rating  :number ;
    createdAt:String;
    author_id:number
    author:User;
}