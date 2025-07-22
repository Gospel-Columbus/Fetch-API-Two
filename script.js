//fetch each json item to the console.
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => json.map((data) => {
     console.log(data.title);
     // fetch all the json items to the website.
      const p = document.createElement("p");
     p.textContent = `Body: ${data.body}, Id: ${data.id}, Title: ${data.title}, UserId: ${data.userId} `;
    document.getElementById("content").appendChild(p);

  }));
    




