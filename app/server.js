var express = require('express')
var cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
var app = express();

app.use(cors());

const articleRouter = require('./routes/articleRoutes');
app.use(express.json());
app.use('/api/v1/articles', articleRouter);

const commentRouter = require('./routes/commentRoutes');
app.use(express.json());
app.use('/api/v1/comments', commentRouter);

//connect to monggo db
dotenv.config({ path: '.env' });
mongoose.connect(process.env.DATABASE_LOCAL, {
  useNewUrlParser: true,
}).then(() => console.log('db connected!'));

const port = 3000;
app.listen(port, () => {
  console.log(`App running of port ${port}..`);
});