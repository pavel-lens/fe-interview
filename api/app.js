const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let data = [
    { src: "avatar1.png", label: "Avatar 1", id: 1, selected: false },
    { src: "avatar2.png", label: "Avatar 2", id: 2, selected: false },
    { src: "avatar3.png", label: "Avatar 3", id: 3, selected: false },
    { src: "avatar4.png", label: "Avatar 4", id: 4, selected: false },
    { src: "avatar5.png", label: "Avatar 5", id: 5, selected: false },
    { src: "avatar6.png", label: "Avatar 6", id: 6, selected: false }
];

const updateData = (id) => {
    data.forEach(avatar => {
        avatar.selected = false;
        if(avatar.id === id) {
            avatar.selected = true;
        }
    })
}

app.use(express.static('public'));

const jsonParser = bodyParser.json()


app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type");
    next();
});

app.get('/', (req, res) => {
    res.send('Good luck! :)');
});

app.get('/avatars', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
});

app.post('/avatars', jsonParser, (req, res) => {
    const id = req.body.avatarId;
    if(id) {
        updateData(id);
        setTimeout(() => {
            res.setHeader('Content-Type', 'application/json');
            res.send(data);
        }, 2000)
    } else {
        res.send('Error');
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000.');
});
