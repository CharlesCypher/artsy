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
const modalCardName = document.querySelector(".modal-product-name");
const modalCardImage = document.querySelector(".img-container");
const modalCardPrice = document.querySelector(".modal-product-price");

productLayout.classList.add("product-section-products-grid");
productSection.appendChild(productLayout);

function loadProducts() {
  product = JSON.parse(localStorage.getItem("products")) || [];

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
      // Modal
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

      // Close Modal Actions
      closeButton.addEventListener("click", () => {
        modal.classList.remove("show-modal");
        overlay.classList.remove("active");
        quantityInput.value = 1;
      });
      overlay.addEventListener("click", () => {
        modal.classList.remove("show-modal");
        overlay.classList.remove("active");
        quantityInput.value = 1;
      });

      // Quantity
      const quantityContainer = document.querySelector(".quantity-container");
      quantityContainer.innerHTML = "";
      const quantityInputDecrease = document.createElement("i");
      quantityInputDecrease.classList.add("fa-solid", "fa-minus", "quantity-btn", "decrease");
      const quantityInputs = document.createElement("input");
      quantityInputs.type = "number";
      quantityInputs.value = 1;
      quantityInputs.classList.add("quantity-input");
      const quantityInputIncrease = document.createElement("i");
      quantityInputIncrease.classList.add("fa-solid", "fa-plus", "quantity-btn", "increase");
      quantityContainer.appendChild(quantityInputDecrease);
      quantityContainer.appendChild(quantityInputs);
      quantityContainer.appendChild(quantityInputIncrease);
      const quantityBtns = document.querySelectorAll(".quantity-btn");
      const quantityInput = document.querySelector(".quantity-input");

      // Quantity btns functions
      quantityBtns.forEach((quantityBtn) => {
        quantityBtn.addEventListener("click", updateQuantity);
      });

      // Update Item Quantity
      function updateQuantity(e) {
        if (e.target.classList.contains("decrease")) {
          if (isNaN(quantityInput.value) || quantityInput.value <= 0) {
            quantityInput.value = 1;
          }
          const priceNumber = card.querySelector(".product-price");
          const price = parseFloat(priceNumber.innerText.replace("$", ""));
          quantityInput.value--;
          updateItemTotal(price, quantityInput.value);
        }
        if (e.target.classList.contains("increase")) {
          const priceNumber = card.querySelector(".product-price");
          const price = parseFloat(priceNumber.innerText.replace("$", ""));
          quantityInput.value++;
          updateItemTotal(price, quantityInput.value);
        }
      }

      // Create add to cart button
      // const modalBody = document.querySelector(".modal-details-body");
      const cartBtnContainer = document.querySelector(".cart-btn-container");
      const addToCartBtn = document.createElement("button");
      addToCartBtn.textContent = "Add to cart";
      addToCartBtn.classList.add("add-to-cart");
      addToCartBtn.setAttribute("id", "add-to-cart-btn");
      cartBtnContainer.innerHTML = "";
      cartBtnContainer.appendChild(addToCartBtn);

      // Add Item to Cart
      addToCartBtn.addEventListener("click", addItemToCart);

      // Update Item Total
      function updateItemTotal(price, quantity) {
        total = (price * quantity).toFixed(2);
        modalCardPrice.innerText = "$" + total;
      }

      // updateItemTotal(price);
      // updateItemTotal(parseFloat(price.innerText.replace("$", "")), quantityInput.value);
    });
  });
}

function addItemToCart(e) {
  // Send data to local storage
  // console.log("Item added to cart");
  // const ls = JSON.parse(localStorage.setItem(), localStorage.getItem()) || [];
  // console.log(ls);
  const productCard = document.querySelectorAll(".product-card");
  let cartBtn = e.target;
  // console.log(cartBtn);
  console.log(cartBtn);
  console.log(product);
}

// function setBackToDefult() {}
// function updateCartItems() {}
