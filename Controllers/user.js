import { v4 as uuidv4 } from 'uuid';

let users = [
  {
    firstName: 'Lucifer',
    lastName: 'Morningstar',
    age: 25,
    id: uuidv4(),
  },
  {
    firstName: 'Chloe',
    lastName: 'Decker',
    age: 23,
    id: uuidv4(),
  },
];

export const getUser = (req, res) => {
  console.log(users);
  res.send(users);
};

export const createUser = (req, res) => {
  users.push({ ...req.body, id: uuidv4() });
  res.send('user created successfully!');
};

export const updateUser = (req, res) => {
  const { firstName, lastName, age } = req.body;
  const foundUser = users.find((user) => user.id === req.params.id);
  if (firstName) foundUser.firstName = firstName;
  if (lastName) foundUser.lastName = lastName;
  if (age) foundUser.age = age;
  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  // req.params
  const filteredUsers = users.filter((user) => user.id !== req.params.id);
  users = filteredUsers;
  res.send(filteredUsers);
};

export const getUserById = (req, res) => {
  // req.params
  const foundUser = users.find((user) => user.id === req.params.id);
  res.send(foundUser);
};
