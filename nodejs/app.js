const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
dotenv = require('dotenv/config');

const app = express();

const categoryRoutes = require('./routes/category');
const companyRoutes = require('./routes/company')
const productRoutes = require('./routes/product')
const userRoutes = require('./routes/user');
app.use(cors());
app.options('*',cors());

app.use(morgan('dev'));
app.use(express.json({limit:'10mb'}));

app.use('/api/category',categoryRoutes)
app.use('/api/company',companyRoutes)
app.use('/api/product',productRoutes)
app.use('/api/user',userRoutes)

mongoose.connect(process.env.DB,{
    useCreateIndex:true,
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(()=> console.log('mongoDB ye başarılı şekilde bağlanıldı'))
    .catch((err)=> console.log(err.message))
const port = process.env.PORT || 8080;
app.listen(port, ()=> console.log(`nodejs server ${port} portundan ayaklandı`))

