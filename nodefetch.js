//if you want to use fetch server-side you'll need to polyfill it by uncommenting the next two require statements

require('es6-promise').polyfill();
require('isomorphic-fetch');

const url = 'https://jsonplaceholder.typicode.com/posts';


//GET example
fetch(url)
.then(response => {
  return response.json() //this step is important to get your json object
})
.then(data => {
  console.log('get response:',data[0]);
})

// POST example
fetch(url, {
    method: 'post',
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({title:'tester', body:'just testing', userId:1})
  })
  .then(response => response.json())
  .then(function (data) {
    console.log('post response:',data);
  })
  .catch(function (error) {
    console.log('Failed', error);
 });
