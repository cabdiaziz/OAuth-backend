import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.json({ msg: 'Home hello.' });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});