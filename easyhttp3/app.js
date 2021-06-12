const http = new easyHTTP;

const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jdoe@gmail.com'
}

// Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts')
// .then(data => console.log(data))
// .catch(err => console.log(err))

// http.post('https://jsonplaceholder.typicode.com/posts', data)
// .then(data => console.log(data))
// .catch(err => console.log(err))

// http.put('https://jsonplaceholder.typicode.com/posts/1', data)
// .then(data => console.log(data))
// .catch(err => console.log(err))

http.delete('https://jsonplaceholder.typicode.com/posts/1')
.then(data => console.log(data))
.catch(err => console.log(err));