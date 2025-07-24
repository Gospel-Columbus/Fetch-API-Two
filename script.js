fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => {
    const data = json;
    console.log(data); // for accessing all the json data in the console.

    // Iterate through each product and display all fields
    data.forEach(item => {
      const p = document.createElement('p');
      p.textContent = `Body: ${data.body}, Id: ${data.id}, Title: ${data.title}, UserId: ${data.userId}`;
      document.getElementById('content').appendChild(p);
    });
  });