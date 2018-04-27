const http = new easyHTTP();

// const posts = http.get(
//   "https://jsonplaceholder.typicode.com/posts",
//   (err, response) => {
//     console.log(response);
//   }
// );

const data = {
  title: "Custom post",
  body: "This is a custom post."
};

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

http.delete("https://jsonplaceholder.typicode.com/posts/1", (err, response) => {
  err ? console.log(err) : console.log(response);
});
