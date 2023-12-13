let select = document.getElementById("selective_div");

let order = document.getElementById("image_order");

let title = document.getElementById("order_title");

let img = document.createElement("img");

// let order_Id =

let menu_arr = ["Pizza", "Ice Cream", "Burger", "Maggie", "Pasta"];

let btn_arr = [];

menu_arr.map((el) => {
  let btn = document.createElement("button");

  btn.innerText = el;

  select.append(btn);

  btn_arr.push(btn);
});

function getOrder() {
  btn_arr.forEach((el) => {
    el.addEventListener("click", () => {
      img.src = null;
      img.alt = "Your Order will Appear here";
      title.innerText = "wait.....";
      setTimeout(() => {
        shawImage(el);
      }, 2000);
      order.append(img);
    });
  });
}

let promise = new Promise((resolve, reject) => {
  resolve(getOrder());
  reject("Order is Not Available");
});

function shawImage(el) {
  let order_id = document.getElementById("order_Id");
  if (el.innerText === "Pizza") {
    img.src = "https://pngimg.com/uploads/pizza/pizza_PNG7151.png";
  } else if (el.innerText === "Ice Cream") {
    img.src =
      "https://th.bing.com/th/id/R.a982f88bdbaf826c2cbd3e7e4e14bba0?rik=gvSsDQPelbr2%2bQ&riu=http%3a%2f%2fpngimg.com%2fuploads%2fice_cream%2fice_cream_PNG5091.png&ehk=PlZnxIg3Cm1To4lXvj2lj0oZjyA6U6sVzoFiA6nl%2fNQ%3d&risl=1&pid=ImgRaw&r=0";
  } else if (el.innerText === "Burger") {
    img.src =
      "https://www.pngplay.com/wp-content/uploads/2/Burger-Transparent-PNG.png";
  } else if (el.innerText === "Maggie") {
    img.src =
      "https://i.pinimg.com/originals/0b/71/29/0b7129d20ac9acfed54004acfb7a1c9f.png";
  } else if (el.innerText === "Pasta") {
    img.src =
      "https://pluspng.com/img-png/pasta-png-hd-pasta-png-image-940.png";
  }

  title.innerText = `Enjoy Your ${el.innerText}`;

  order_id.innerText = Math.floor(Math.random() * (500 - 1 + 1)) + 1;
}

// function orderId() {
//   // order_Id.innerText = Math.random();

//   console.log(order_Id);
// }
