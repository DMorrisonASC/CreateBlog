const titleElement = document.getElementById("title");
const authorElement = document.getElementById("author");
const contentElement = document.getElementById("content");
const button = document.getElementById("submitButton");

button.addEventListener("click", updateDB);

//Set database object here
console.log(db);

/**
 * Updates the database with the username and message.
 */
function updateDB(event) {
  event.preventDefault();
  const title = titleElement.value;
  const author = authorElement.value;
  const content = contentElement.value;
  titleElement.value = "";
  authorElement.value = "";
  contentElement.value = "";

  console.log(title + " " + author + " " + content);

  //Update database here
  const value = {
    title: title,
    author: author,
    content: content
  };
  // Then push the array into firebase(database)
  db.push(value);
}
document.getElementById("submitButton").onclick = function () {
  location.href = "index.html";
};

// Set database "child_added" event listener here
// ES6 (e)=> {} */
