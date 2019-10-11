const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/64/64/1',
            'name': '홍길동',
            'birthday': '961222',
            'gender': '남자',
            'job': '대학생'
          },
        
          {
            'id': 2,
            'image': 'https://placeimg.com/64/64/2',
            'name': '노시개',
            'birthday': '961112',
            'gender': '여자',
            'job': '무직'
          },
          {
            'id': 3,
            'image': 'https://placeimg.com/64/64/2',
            'name': '노시개',
            'birthday': '961112',
            'gender': '여자',
            'job': '무직'
          },
          {
            'id': 4,
            'image': 'https://placeimg.com/64/64/2',
            'name': '노hh시개asdfasdfasdfsadf',
            'birthday': '981112',
            'gender': '여자',
            'job': '무직'
          }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));

