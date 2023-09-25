const url = "https://jsonplaceholder.typicode.com/todos";
async function networkReq(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

networkReq(url)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
