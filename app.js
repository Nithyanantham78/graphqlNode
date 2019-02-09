const express = require('express');
const app = express();


app.use('/graphql',require('./controller/graphql.js'));

app.listen(3001,()=>{
    console.log("Listen Port "+3001);
})
