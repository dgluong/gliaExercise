import express, { Request, Response } from 'express';
import axios from 'axios';
import { BoredResponse } from '../model/BoredResponse';

const router = express.Router();
const BORED_URL: string = 'http://www.boredapi.com/api/activity/';
let db = {};

// TODO - implement logger
router.get('/api/activity', async (req: Request, res: Response) => {
    console.log("calling GET/activity: ");
    try {
        let response = await axios.get(BORED_URL);
        let data: BoredResponse = new BoredResponse(response.data);
        console.log(response.data, data);
        res.send(data);
    } catch(err) {
        console.log(err)
    }

})


router.post('/api/user', (req: Request, res: Response) => {
    console.log("calling POST/user with request body: ");
    console.log(req.body);
    res.send("")
})

export { router as boredRouter }