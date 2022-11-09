let shopData = [];
const productsLayout = document.querySelector(".products");
const toast = document.querySelector(".toast");

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    shopData = data;
    const result = shopData.map((item) => {
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

    console.log(result);

    productsLayout.querySelector(".grid").innerHTML = result.join("");
  })
  .catch((err) => console.log(err));

function toastHandler() {
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}
