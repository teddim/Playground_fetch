// Fetch cheatsheet: https://devhints.io/js-fetch
const url = 'https://jsonplaceholder.typicode.com/posts';

//GET with promises
fetch(url)
.then(response => {
  return response.json() //this step is important to get your json object
})
.then(data => {
  console.log('get data from promise:',data[0]);
})

// GET with async await
async function getPosts(){
  let response = await fetch(url);
  let data = await response.json();
  console.log('get data from async await:',data[0]);
}
getPosts()

const newPost = {title:'tester', body:'just testing', userId:1};

// POST with promises
fetch(url, {
    method: 'post',
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(newPost)
  })
  .then(response => response.json())
  .then(function (data) {
    console.log('post data from promise:',data);
  })
  .catch(function (error) {
    console.log('Failed', error);
 });

 // POST with async await
 async function createPost(newPost){
   let postResponse = await fetch(url, {
     method: 'post',
     headers: {
       "Content-type": "application/json"
     },
     body: JSON.stringify(newPost)
   });
   let postData = await postResponse.json();
   console.log('post data from async await:', postData);
 }
 createPost(newPost)
