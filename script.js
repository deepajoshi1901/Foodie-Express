let cart = [];
let total = 0;

function login() {
  document.getElementById("loginPage").style.display = "none";
  document.getElementById("mainPage").style.display = "block";
  showPage("home", document.querySelector("nav ul li"));
}

function showPage(id, clickedItem) {
  document.querySelectorAll(".page").forEach(p => p.style.display = "none");
  document.getElementById(id).style.display = "block";

  document.querySelectorAll("nav ul li").forEach(li => li.classList.remove("active"));
  if (clickedItem) clickedItem.classList.add("active");
}

function addToCart(item, price) {
  cart.push({ item, price });
  total += price;

  const li = document.createElement("li");
  li.innerText = item + " - ₹" + price;
  document.getElementById("cartItems").appendChild(li);

  document.getElementById("total").innerText = total;
}
