let popupContainer = document.querySelector('.popup_image');

let popupCard = popupContainer.querySelectorAll('.popup');

document.querySelectorAll('.box .card').forEach(product =>{

    product.onclick = () =>{

        popupContainer.style.display = 'flex';

        let name = product.getAttribute('data-name');

        popupCard.forEach(popup =>{

            let target = popup.getAttribute('data-target');

            if(name == target){

                popup.classList.add('active');

            }

        })

    }

})

popupCard.forEach(close =>{

    close.querySelector('.close').onclick = () =>{

        close.classList.remove('active');

        popupContainer.style.display = 'none';

    }

})


// const dollarToRupeeRate = 75.17; // 1 USD = 75.17 INR

// const priceElements = document.querySelectorAll('.price');

// priceElements.forEach(priceElement => {
//   const price = parseFloat(priceElement.textContent);
//   const nonDecimalPrice = Math.round(price * 100);
//   const inRupees = nonDecimalPrice * dollarToRupeeRate / 100;
//   priceElement.textContent = `₹${inRupees.toFixed(2)}`;
// });

// ..................

const dollarToRupeeRate = 75.17; // 1 USD = 75.17 INR

const priceElements = document.querySelectorAll('.price');

priceElements.forEach(priceElement => {
  const price = parseFloat(priceElement.textContent);
  const nonDecimalPrice = Math.round(price * 100);
  const inRupees = nonDecimalPrice * dollarToRupeeRate / 100;
  const wholeRupees = Math.floor(inRupees); // round down to nearest rupee
  priceElement.textContent = `₹${wholeRupees}`;
});
