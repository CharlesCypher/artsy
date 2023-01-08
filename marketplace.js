window.addEventListener("load", loadProducts);

const products = [
  { id: 1, image: "images/product-images/Rectangle 251.png", name: "PHILOMENA' 22", price: 3.9 },
  { id: 2, image: "images/product-images/Rectangle 299.png", name: "BOOLEAN EGYPTIAN", price: 12.4 },
  { id: 3, image: "images/product-images/Rectangle 55.png", name: "BLANC", price: 4.32 },
  { id: 4, image: "images/product-images/Rectangle 54.png", name: "ELLIPSIA", price: 3.9 },
  { id: 5, image: "images/product-images/Rectangle 53.png", name: "THE LAWMAKERS ", price: 199.99 },
  { id: 6, image: "images/product-images/Rectangle 52.png", name: "VEIL", price: 3.9 },
  { id: 7, image: "images/product-images/Rectangle 50.png", name: "ALTERNATING", price: 3.9 },
  { id: 8, image: "images/product-images/Rectangle 49.png", name: "ROSEMARY 22", price: 3.9 },
  { id: 9, image: "images/product-images/Rectangle 48.png", name: "BEVERLY", price: 3.9 },
];

const productSection = document.getElementById("productLayout");
const productLayout = document.createElement("div");
productLayout.classList.add("product-section-products-grid");
productSection.appendChild(productLayout);

const modalCardName = document.querySelector(".modal-product-name");
const modalCardImage = document.querySelector(".img-container");
const modalCardPrice = document.querySelector(".modal-product-price");

total = 0;

function loadProducts() {
  const productItems = products
    .map((item) => {
      return `<div class="product-card">
                <img src="${item.image}" alt="${"product " + item.id}" class="product-card-img"/>
                <div class="product-name">${item.name}</div>
                <div class="product-price">${"$" + item.price.toFixed(2)}</div>
            </div>`;
    })
    .join("");

  productLayout.innerHTML = productItems;

  const productCard = document.querySelectorAll(".product-card");

  productCard.forEach((card) => {
    card.addEventListener("click", () => {
      const modal = document.querySelector(".modal-container");
      modal.classList.add("show-modal");
      const overlay = document.querySelector(".overlay");
      overlay.classList.add("active");
      const productName = card.querySelector(".product-name");
      modalCardName.innerHTML = productName.innerText;
      const productImage = card.querySelector(".product-card-img");
      modalCardImage.innerHTML = `<img src="${productImage.src}"/>`;
      const price = card.querySelector(".product-price");
      modalCardPrice.innerText = price.innerText;
      const closeButton = document.querySelector(".close-btn");
      closeButton.addEventListener("click", () => {
        modal.classList.remove("show-modal");
        overlay.classList.remove("active");
      });
      overlay.addEventListener("click", () => {
        modal.classList.remove("show-modal");
        overlay.classList.remove("active");
      });

      // const addToCartBtn = document.getElementById("add-to-cart");
      // addToCartBtn.addEventListener("click", addItemToCart);

      const quantityBtns = document.querySelectorAll(".quantity-btn");
      const quantityInput = document.querySelector(".quantity-input");

      quantityBtns.forEach((quantityBtn) => {
        quantityBtn.addEventListener("click", updateQuantity);
      });

      function updateQuantity(e) {
        if (e.target.classList.contains("decrease")) {
          quantityInput.value--;
          if (isNaN(quantityInput.value) || quantityInput.value <= 0) {
            quantityInput.value = 1;
            // updateItemTotal(price, quantityInput.value);
          }
          const priceNumber = card.querySelector(".product-price");
          let price = parseFloat(priceNumber.innerText.replace("$", ""));
          updateItemTotal(price, quantityInput.value);
        }
        if (e.target.classList.contains("increase")) {
          quantityInput.value++;
          const priceNumber = card.querySelector(".product-price");
          let price = parseFloat(priceNumber.innerText.replace("$", ""));
          updateItemTotal(price, quantityInput.value);

          // let quantity = e.target;
          // let quantityValue = quantity.value;
        }
      }

      function updateItemTotal(price, quantity) {
        let total = (price * quantity).toFixed(2);
        total = Math.round(total * 100) / 100;
        modalCardPrice.innerText = "$" + total;
      }
    });
  });
}

// const quantityInput = document.querySelector(".quantity-input");
// quantityInput.addEventListener("change", (e) => {
//   updateItemTotal(parseFloat(modalCardPrice.innerText.replace("$", "")), quantityChange(e));
// });

// function quantityChange(e) {
//   let input = e.target;
//   let inputValue = input.value;
//   if (isNaN(inputValue) || inputValue <= 0) {
//     inputValue = 1;
//   }
//   updateItemTotal();
//   updateCartItems();
// }

function addItemToCart() {}

function updateCartItems() {}
