// interface users_interface {
//     id:number,
//     username:string,
//     email:string
//     password:string
//     role:"seller"|"admin"|"customer"
// };

const users = [
  {
    id: 1,
    username: "Vendedor1",
    email: "a@a.com",
    password: "123",
    role: "seller",
  },
  {
    id: 2,
    username: "Vendedor2",
    email: "c@c.com",
    password: "123",
    role: "seller",
  },
  {
    id: 3,
    username: "Comprador1",
    email: "b@b.com",
    password: "123",
    role: "customer",
  },
  {
    id: 4,
    username: "Comprador2",
    email: "d@d.com",
    password: "123",
    role: "customer",
  },
];
// simula nuestra Db
export default users;
