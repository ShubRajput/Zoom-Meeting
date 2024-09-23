import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import {createMeeting} from "./zoommeeting.js";


const app = express();
const PORT = process.env.PORT || 8009;
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.post('/createmeeting', createMeeting);
