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

  //POST request
  post(url, data) {
    return new Promise((res, rej) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => res(data))
        .catch(err => rej(err));
    });
  }

  //PUT request
  put(url, data) {
    return new Promise((res, rej) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => res(data))
        .catch(err => rej(err));
    });
  }

  //DELETE request
  delete(url) {
    return new Promise((res, rej) => {
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => res('Data deleted.'))
        .catch(err => rej(err));
    });
  }
}
