const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { story: null });
});

app.post('/generate-story', (req, res) => {
    const { animal, adjective1, adjective2, adjective3, noun1, noun2, verb1, sound, food, color, hobby } = req.body;
    const story = `In the zoo, there was a ${adjective1} ${animal} that loved to ${verb1} by the ${adjective2} ${noun1}. We heard a loud ${sound} and saw a ${noun2} eating ${food}. Everything was ${color}, even the ${hobby} area. It was a ${adjective3} day indeed!`;
    res.render('index', { story });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
 