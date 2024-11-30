// JavaScript for interactivity
const offers = document.querySelectorAll('.offer input[type="radio"]');
const totalPriceElement = document.querySelector('.total-price');
const radioButtons = document.querySelectorAll('.offer-box input[type="radio"]');
const detailsSections = document.querySelectorAll('.details');
offers.forEach((offer) => {
  offer.addEventListener('change', () => {
    // Update total price based on the selected offer
    const offerValue = offer.value; // Get selected value
    let price = 0;

    if (offerValue === '1') {
      price = 10.0; // Price for 1 unit
    } else if (offerValue === '2') {
      price = 18.0; // Price for 2 units
    } else if (offerValue === '3') {
      price = 24.0; // Price for 3 units
    }

    // Update the total price in the footer
    totalPriceElement.textContent = `$${price.toFixed(2)} USD`;

    // Handle showing/hiding details for 2 Unit offer
    document.querySelectorAll('.details').forEach((detail) => {
      detail.classList.add('hidden');
    });

    const parent = offer.closest('.offer-content');
    const details = parent.querySelector('.details');
    if (details) {
      details.classList.remove('hidden');
    }
  });
});


// Add event listeners to the radio buttons
radioButtons.forEach((radio) => {
  radio.addEventListener('change', () => {
    // Hide all details sections
    detailsSections.forEach((details) => details.classList.add('hidden'));

    // Show the details section corresponding to the selected offer
    const parentOffer = radio.closest('.offer-box');
    const details = parentOffer.querySelector('.details');
    if (details) {
      details.classList.remove('hidden');
    }
  });
});

