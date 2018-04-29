class easyHTTP {
  //GET request
  get(url) {
    return new Promise((res, rej) => {
      fetch(url)
        .then(res => res.json())
        .then(data => res(data))
        .catch(err => rej(err));
    });
  }
}
