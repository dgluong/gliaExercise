import { User } from "../model/BoredResponse";

let db: User[] = [];

async function storeUser(user: User): Promise<User> {
    db.push(user);
    console.log(db);
    return user;
}

async function getLatestUser(): Promise<User> {
    return db[db.length - 1];
}


export { storeUser, getLatestUser }