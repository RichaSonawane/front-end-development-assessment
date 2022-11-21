//console.log("hi");
let restaurantBtn = document.querySelector("#Restaurant");

function recommendation(evt) {
  var restaurant = [
    "Texas Chili Parlor",
    "French Quarter Grille",
    "Galaxy Cafe",
    "A Roaring Fork",
    "Habanero Mexican Cafe",
    "JZ’Tejas Southwestern Grill",
    "Fonda San Miguel",
    "Torchy’s Tacos",
  ];

  var random = Math.floor(Math.random() * restaurant.length);
  console.log(random, restaurant[random]);
}

restaurantBtn.addEventListener("click", recommendation);
