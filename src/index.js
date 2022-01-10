import express from 'express';
import Home from './client/components/Home';
import renderer from './helper/renderer';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
    res.send(renderer(req.url));
});

app.listen(3000, () => {
    console.log('listen on port 3000');
});

