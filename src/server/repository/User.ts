import { User } from "../model/BoredResponse";

let db: User[] = [];

async function storeUser(user: User): Promise<User>{
    db.push(user);
    return user;
}



export {storeUser}