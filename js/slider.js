let slider = document.getElementById("slider");
let price = document.getElementById("price");
let orders = document.getElementById("orders");

let prices = [4, 3.5, 3, 2.5, 2];

orders.innerHTML = "301-500";

const listener = function () {
  window.requestAnimationFrame(function () {
    switch (slider.value) {
      case "1":
        price.innerHTML = prices[0].toString().replace(".", ",");
        orders.innerHTML = "1-100";
        break;
      case "2":
        price.innerHTML = prices[1].toString().replace(".", ",");
        orders.innerHTML = "101-300";
        break;
      case "3":
        price.innerHTML = prices[2].toString().replace(".", ",");
        orders.innerHTML = "301-500";
        break;
      case "4":
        price.innerHTML = prices[3].toString().replace(".", ",");
        orders.innerHTML = "501-1000";
        break;
      case "5":
        price.innerHTML = prices[4].toString().replace(".", ",");
        orders.innerHTML = "1000+";
    }
  });
};

slider.addEventListener("mousedown", function () {
  listener();
  slider.addEventListener("mousemove", listener);
});

slider.addEventListener("mouseup", function () {
  slider.removeEventListener("mousemove", listener);
});

slider.addEventListener("touchstart", function () {
  listener();
  slider.addEventListener("touchmove", listener);
});

slider.addEventListener("touchend", function () {
  slider.removeEventListener("touchmove", listener);
});

slider.addEventListener("keydown", listener);

slider.oninput = function () {
  var value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background =
    "linear-gradient(to right, #007afc 0%, #007afc " +
    value +
    "%, #fff " +
    value +
    "%, #fff 100%)";
};
