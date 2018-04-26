const http = new easyHTTP();

const posts = http.get(
  "https://jsonplaceholder.typicode.com/posts",
  (err, response) => {
    console.log(response);
  }
);
