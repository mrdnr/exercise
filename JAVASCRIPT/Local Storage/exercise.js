const user = {
  id: 1,
  name: "John",
  age: 25,
};

function save(){
  localStorage.setItem("user", JSON.stringify(user));
  
}
const read = JSON.parse (localStorage.getItem(user));
console.log(read); 