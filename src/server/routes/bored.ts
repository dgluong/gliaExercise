import express, { request, Request, Response } from 'express';
import axios from 'axios';
import { Accessibility, BoredResponse, Price } from '../model/BoredResponse';
import { User } from '../model/BoredResponse';
import { getLatestUser, storeUser } from '../repository/User';
import { getQueryParams } from '../service/UserService';

const router = express.Router();
const BORED_URL: string = 'http://www.boredapi.com/api/activity';

// TODO - implement logger
router.get('/api/activity', async (req: Request, res: Response) => {
    console.log("calling GET/activity: ");
    let user: User = await getLatestUser();
    console.log("User: ", user);
    if (user) {
        try {
            let requestURL = `${BORED_URL}${getQueryParams(user)}`;
            console.log(requestURL);
            let response = await axios.get(`${BORED_URL}${getQueryParams(user)}`);
            let data: BoredResponse = new BoredResponse(response.data);
            console.log(response.data, data);
            res.send(data);
        } catch (err) {
            console.log(err);
        }
    } else {
        try {
            let response = await axios.get(BORED_URL);
            let data: BoredResponse = new BoredResponse(response.data);
            console.log(response.data, data);
            res.send(data);
        } catch(err) {
            console.log(err);
        }
    }


})


router.post('/api/user', async (req: Request, res: Response) => {
    console.log("calling POST/user with request body: ");
    console.log(req.body);
    try {
        let user: User = req.body;
        if (!Accessibility[user.accessibility]) {
            throw new Error("Invalid accessibility type");
        } else if (!Price[user.price]) {
            throw new Error("Invalid price type");
        }
        console.log(Accessibility[user.accessibility])
        res.status(200).json(await storeUser(user));
    } catch (err) {
        console.log(err);
        res.status(400).send((err as Error).message)
    }
})

export { router as boredRouter }