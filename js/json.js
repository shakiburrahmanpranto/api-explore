const user = { id: 1, name: "Pranto", job: "Developer" };
//JavaScript Object Notation = JSON
const stringified = JSON.stringify(user);
//console.log(user);
//{ id: 1, name: 'Pranto', job: 'Developer' }

//console.log(stringified);
//{"id":1,"name":"Pranto","job":"Developer"}

const shop = {
  owner: "Alia",
  address: {
    street: "Kochukeht",
    city: " jsr",
    country: "bd",
  },
  product: ["laptop", "tv"],
  revenue: 3455699,
  isOpen: true,
  isNew: false,
};
console.log(shop);
// obj to string json
const shopJson = JSON.stringify(shop);
console.log(shopJson);
// string to obj
const shopObj = JSON.parse(shopJson);
console.log(shopObj);
