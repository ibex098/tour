const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('Da ket noi mongoose!!!');
  });

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('past3, phan8, bai8');
});
