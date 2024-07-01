//Require users from user.model file for access all users.
let users = require("../model/user.model");

// Using Random id genarator from npm external module for each person
const { v4: uuidv4 } = require("uuid");

//find all users
const getAllusers = (req, res) => {
  res.status(200).json({ users });
};

//Createing a new user and push existing users
const createUser = (req, res) => {
  const newUser = {
    id: uuidv4(),
    username: req.body.username,
    email: req.body.email,
  };
  res.status(201).json({ newUser });
  users.push(newUser);
};

// update a single user informaion

const updateUser = (req, res) => {
  const userid = req.params.id;
  const { username, email } = req.body;
  users
    .filter((user) => user.id === userid)
    .map((selectedUser) => {
      selectedUser.username = username;
      selectedUser.email = email;
    });
    res.status(200).json({ users });
};

// delete a user besed on her id 
const  deleteUser = (req, res) =>{
    const userid = req.params.id;
   users =  users.filter((user)=>user.id != userid)
 res.status(200).json(users)
} 

//export this functions for using route file as a requist method
module.exports = { getAllusers, createUser, updateUser, deleteUser };
