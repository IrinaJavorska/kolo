"use strict";

document
  .querySelector("#rentalForm")
  .addEventListener("change", calculateTotal);

function calculateTotal() {
  let totalPrice = 0;
  const maxOffer = parseInt(document.querySelector("#userOffer").value) || 0;
  const rentalDays = parseInt(document.querySelector("#rentalDays").value) || 0;

  const bikeTypes = document.querySelectorAll('input[name="bikeType"]:checked');
  for (const type of bikeTypes) {
    const countElementId = `#${type.id}Count`;
    const count = parseInt(document.querySelector(countElementId).value) || 0;
    totalPrice += count * parseInt(type.value) * rentalDays;
  }

  const rackSelector = 'input[name="rack"]:checked';
  const rack = parseInt(document.querySelector(rackSelector)?.value) || 0;
  const rackPercentage = rack / 100;
  totalPrice *= 1 + rackPercentage;

  totalPrice = Math.round(totalPrice);

  if (maxOffer < totalPrice) {
    alert("Vaše maximální nabídnutá cena je nižší než celková cena zápůjčky.");
  }

  const priceCheckResult = document.querySelector("#priceCheckResult");
  priceCheckResult.innerText = `Celková cena: ${totalPrice} Kč`;
}

function validateForm() {
  return true;
}
