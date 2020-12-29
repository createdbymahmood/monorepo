import express from 'express';
import { removeIndex } from '@monorepo/helpers';
const app = express();

app.get('/', (req, res) => {
    const arr = [1, 2, 3, 4];
    const result = removeIndex(arr, 1);
    res.json({ result });
});
app.listen(3000);
