window.addEventListener("load", loadProducts);

const products = [
  { id: 1, image: "images/product-images/Rectangle 251.png", name: "PHILOMENA 22", price: 3.9 },
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
  const modalCardName = document.querySelector(".modal-product-name");
  const modalCardImage = document.querySelector(".img-container");
  const modalCardPrice = document.querySelector(".modal-product-price");

  productCard.forEach((card) => {
    card.addEventListener("click", () => {
      //   window.scrollTo({
      //     top: 0,
      //     left: 0,
      //     behavior: "smooth",
      //   });
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
    });
  });
}
