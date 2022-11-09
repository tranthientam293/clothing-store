let shopData = [];
const productsLayout = document.querySelector(".products");
const toast = document.querySelector(".toast");
const filterBtns = document.querySelectorAll(".filter");

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    shopData = data;
    showProducts(shopData);
  })
  .catch((err) => console.log(err));

function toastHandler() {
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}

function productsFilter(condition) {
  const data = shopData.filter((item) => {
    return item.category.split("'")[0] == condition;
  });
  const result = data.map((item) => {
    return `<div class="card">
                <div class="card-img-box">
                  <img
                    src=${item.image}
                    alt=""
                    class="card-img"
                  />
                  <button class="btn card-btn" onClick ={toastHandler()}>
                    Buy now <ion-icon name="cart"></ion-icon>
                  </button>
                </div>
                <div class="card-body">
                  <p class="card-title">${item.title}</p>
                  <p class="card-price">$${item.price}</p>
                </div>
              </div>`;
  });

  productsLayout.querySelector(".grid").innerHTML = result.join("");
}

function showProducts(data) {
  const result = data.map((item) => {
    return `<div class="card">
                <div class="card-img-box">
                  <img
                    src=${item.image}
                    alt=""
                    class="card-img"
                  />
                  <button class="btn card-btn" onClick ={toastHandler()}>
                    Buy now <ion-icon name="cart"></ion-icon>
                  </button>
                </div>
                <div class="card-body">
                  <p class="card-title">${item.title}</p>
                  <p class="card-price">$${item.price}</p>
                </div>
              </div>`;
  });
  productsLayout.querySelector(".grid").innerHTML = result.join("");
}

filterBtns.forEach((btn) => {
  const condition = btn.innerHTML;
  if (condition == "all") {
    btn.addEventListener("click", () => {
      showProducts(shopData);
    });
  } else {
    btn.addEventListener("click", () => {
      productsFilter(condition);
    });
  }
});
