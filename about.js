console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();
  alert("Form has been submitted successfully.");
  //console.log('form submit');
}

let form = document.querySelector("#contact");

form.addEventListener("submit", handleSubmit);
//for mouseover event on image
const complimentUser = (ev) => alert("That's an interesting observation");
//added event listener
let image = document.querySelector("img");
image.addEventListener("mouseover", complimentUser);
