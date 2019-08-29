// HOW IT WORKS: The user will put their title, name and written blog into the inputs
// When submitted, the data will go to a DIV to display the blog.

// The DIV where all the user input will go to create the blog
const allContent = document.getElementsByClassName("allContent")[0];
// 
db.on("child_added", function (dataRow) {
  const value = dataRow.val(); /* Google requires, ".val();", to get value ¯\_(ツ)_/¯*/
  // creates elements
  const divBlog = document.createElement("div");
  const title = document.createElement("h1");
  const author = document.createElement("h2");
  const p = document.createElement("p");
  // Takes user input in title(h1), and appends it to the DIV
  title.innerText = `${value.title}`;
  divBlog.appendChild(title);
  // Takes user input in author(h2), and also appends it to the DIV
  author.innerText = `${value.author}`;
  divBlog.appendChild(author);
  // Takes user input in p(p), and also appends it to the DIV
  p.innerText = `${value.content}`;
  divBlog.appendChild(p);

  allContent.appendChild(divBlog);
});
