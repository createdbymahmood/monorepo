import express from 'express';
import bodyParser from 'body-parser';
import { removeIndex } from '@monorepo/helpers';
import { someHelper } from 'helpers';
const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.get('/', (req, res) => {
    const arr = [1, 2, 3, 4];
    const result = removeIndex(arr, 1);
    res.json({ result });
});
app.post('/', (req, res) => {
    res.json({ result: req?.body });
});
someHelper();
app.listen(3000);
