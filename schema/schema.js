const graphql = require('graphql');
const _ = require('lodash');
const {GraphQLObjectType,GraphQLString,GraphQLID,GraphQLInt,GraphQLSchema,GraphQLList,GraphQLBoolean} = graphql;
const User = require('./user');

const UserType = new GraphQLObjectType({
    name:"User",
    fields:()=>({
        id:{type:GraphQLID},
        firstName:{type:GraphQLString},
        lastName:{type:GraphQLString},
        nickName:{type:GraphQLString},
        password:{type:GraphQLString},
        email:{type:GraphQLString},
        DOB:{type:GraphQLString},
        gender:{type:GraphQLString},
        occupation:{type:GraphQLString},
        address1:{type:GraphQLString},
        address2:{type:GraphQLString},
        city:{type:GraphQLString},
        zipCode:{type:GraphQLInt},
        phoneCode:{type:GraphQLString},
        phoneNumber:{type:GraphQLInt},
        maritalStatus:{type:GraphQLString},
        scholarship:{type:GraphQLString},
        userReceivesEmails:{type:GraphQLString},
        observation:{type:GraphQLString},
        partnershipId:{type:GraphQLString},
        picture:{type:GraphQLString},
        levelId:{type:GraphQLString},
        agreement:{type:GraphQLBoolean},
        activeUser:{type:GraphQLString},
        company:{type:GraphQLString},
        receiveSMS:{type:GraphQLBoolean},
        cellphone:{type:GraphQLString},
        emailconfirmed:{type:GraphQLBoolean},
        date:{type:GraphQLString},
        ERPId:{type:GraphQLString},
        CRMId:{type:GraphQLString},
        profileID:{type:GraphQLString},
        startDate:{type:GraphQLString},
        classId:{type:GraphQLString},
        groupId:{type:GraphQLString},
        teacherId:{type:GraphQLString}
    })
});

const RootQuery = new GraphQLObjectType({
    name:"RootQueryType",
    fields:{
        user:{ 
            type:UserType,
            args:{id:{type:GraphQLID}},
            resolve(parents,args){
                return _.find(User,{id:args["id"]});                
            }
        },
        users:{
            type:new GraphQLList(UserType),
            resolve(parents,args){
                return User;
            }
        }
    }
});
 
module.exports = new GraphQLSchema({
    query:RootQuery
})