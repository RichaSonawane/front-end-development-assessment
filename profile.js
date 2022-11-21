console.log("hi");

//event listner for 'my favorite color' button.
let colorBtn = document.querySelector("#color");
colorBtn.addEventListener(
  "click",
  (favoriteColor = () => {
    return alert("My favorite color is yellow.");
  })
);

//event listener for "favorite place" button.
let placeBtn = document.querySelector("#place");
placeBtn.addEventListener(
  "click",
  (favoritePlace = () => alert("My favorite place is Pune."))
);

//eventlistner for "favorite ritual" button.
let ritualBtn = document.querySelector("#ritual");
ritualBtn.addEventListener(
  "click",
  (favoriteRitual = () => alert("My favorite ritual is doing yoga."))
);

//eventlistner for "Projects" and "Resume" buttons.

//let resume=document.querySelector(".btnclass")
//resume.addEventListener("click",downloadFile = (evt) => {  evt.downloadFile("Richa Sonawane Resume.pdf")});
