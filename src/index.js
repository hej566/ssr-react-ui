import express from 'express';
import renderer from './helper/renderer';
import createStore from './helper/createStore';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
    const store = createStore();
    res.send(renderer(req.url, store));
});

app.listen(3000, () => {
    console.log('listen on port 3000');
});

