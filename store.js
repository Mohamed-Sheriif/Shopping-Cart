if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  const removeCartItemBtn = document.getElementsByClassName("btn-danger");

  for (let i = 0; i < removeCartItemBtn.length; i++) {
    let btn = removeCartItemBtn[i];
    btn.addEventListener("click", removeCartItem);
  }
}

function removeCartItem(event) {
  let clickedBtn = event.target;
  clickedBtn.parentElement.parentElement.remove();
  updateCartTotal();
}

const updateCartTotal = () => {
  const cartItemContainer = document.getElementsByClassName("cart-items")[0];
  const cartRaws = cartItemContainer.getElementsByClassName("cart-row");
  let total = 0;

  for (let i = 0; i < cartRaws.length; i++) {
    let cartRaw = cartRaws[i];
    const priceElement = cartRaw.getElementsByClassName("cart-price")[0];
    const quantityElement = cartRaw.getElementsByClassName(
      "cart-quantity-input"
    )[0];

    const price = parseFloat(priceElement.innerText.replace("$", ""));
    const quantity = quantityElement.value;
    total += price * quantity;
  }
  document.getElementsByClassName(
    "cart-total-price"
  )[0].innerText = `$${total}`;
};
