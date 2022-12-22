import express, {Request, Response} from 'express';
import axios from 'axios';
import { BoredResponse } from '../model/BoredResponse';

const router = express.Router();
const BASE_URL: string = 'http://www.boredapi.com/api/activity/';

router.get('/api/activity', (req: Request, res: Response) => {
    console.log("calling /activity: ");
    axios.get(BASE_URL)
        .then(response => {
            let data = new BoredResponse(response.data);
            console.table({"response": response.data, "BoredObject":data});
            res.send(data);
        })
        .catch(err => console.log(err))
})

export { router as boredRouter }