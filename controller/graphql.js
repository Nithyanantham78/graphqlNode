const express = require('express');
const router = express.Router();
const graphqlHTTP = require('express-graphql');
const schema = require('../schema/schema.js');

router.get('/',graphqlHTTP({
    schema,
    graphiql:true
}),(req,res)=>{
    res.send('welcome');
});
router.post('/',graphqlHTTP({
    schema
}));
module.exports = router;