const removeCartItemBtn = document.getElementsByClassName("btn-danger");

for (let i = 0; i < removeCartItemBtn.length; i++) {
  let btn = removeCartItemBtn[i];
  btn.addEventListener("click", (event) => {
    let clickedBtn = event.target;
    clickedBtn.parentElement.parentElement.removee();
  });
}

const updateCartTotal = () => {
  const cartItemContainer = document.getElementsByClassName("cart-items")[0];
  const cartRaws = cartItemContainer.getElementsByClassName("cart-raw");

  for (let i = 0; i < cartRaws.length; i++) {
    let cartRaw = cartRaws[i];
    const priceElement = cartRaw.getElementsByClassName("cart-price")[0];
    const quantityElement = cartRaw.getElementsByClassName(
      "cart-quantity-input"
    )[0];

    const price = parseFloat(priceElement.innerText.replace("$", ""));
  }
};
