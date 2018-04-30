const http = new easyHTTP();

const displayData = data => {
  let dataDiv = document.getElementById('results');
  let content = '';
  data.map(item => {
    console.log(item.name);
    content += `<p class="name">${item.name}</p>`;
  });
  dataDiv.innerHTML = content;
};
// const posts = http.get(
//   "https://jsonplaceholder.typicode.com/posts",
//   (err, response) => {
//     console.log(response);
//   }
// );

// const data = {
//   title: 'Custom post',
//   body: 'This is a custom post.'
// };

// http.post("https://jsonplaceholder.typicode.com/posts", data, function(
//   err,
//   post
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
//});

// http.put("https://jsonplaceholder.typicode.com/posts/1", data, function(
//   err,
//   post
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// http.delete('https://jsonplaceholder.typicode.com/posts/1', (err, response) => {
//   err ? console.log(err) : console.log(response);
// });

//Get users
// http
//   .get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
// .then(data => displayData(data))
// .catch(err => console.log(err));

//POST request
const data = {
  name: 'John Doe',
  email: 'blah@derp.com',
  username: 'johndoe'
};

// http
//   .post('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

//Update post
// http
//   .put('https://jsonplaceholder.typicode.com/users/2', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

//Delete post
http
  .delete('https://jsonplaceholder.typicode.com/users/2')
  .then(data => console.log(data))
  .catch(err => console.log(err));
