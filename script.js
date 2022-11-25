// Name of Owner
const nameInput = document.getElementById('name');
const nameLog = document.getElementById('name-log');

// Card Elements
const numberInput = document.getElementById('card-number');
const numberLog = document.getElementById('number-log');

const monthInput = document.getElementById('month');
const monthLog = document.getElementById('month-log');

const yearInput = document.getElementById('year');
const yearLog =  document.getElementById('year-log');

const CvcInput = document.getElementById('cvc');
const cardCVC = document.getElementById('cvc-log');

// The 2 Buttons
const confirmBtn = document.getElementById('confirm-button');
const continueBtn = document.getElementById('continue-button');

const form = document.querySelector('.form');

const sectionForm = document.getElementById('section-input');
const sectionThankYou = document.getElementById('section-thank-you');

// Alert Message //
const alertMsgOne = document.getElementById('one');
const alertMsgTwoMM = document.getElementById('twoMonth');
const alertMsgTwoYY = document.getElementById('twoYear');
const alertMsgThree = document.getElementById('three');


function setCardNumber(e) {
    numberLog.innerText = format(e.target.value);
    
}
function setCardName(e) {
    nameLog.innerText = e.target.value;
}
function setCardMonth(e) {
    monthLog.innerText = e.target.value;
}
function setCardYear(e) {
    yearLog.innerText = e.target.value;
}
function setCardCVC(e) {
    cardCVC.innerText = e.target.value;
}
function format(s) {
    return s.toString().replace(/(.{4})/g, '$1 ').trim();
}

function handleSubmit(e) {
    e.preventDefault();

    // Cardholder Name //
    if ((nameInput.value.split(" ").length === 2) && (isNaN(nameInput.value))) {
        nameInput.classList.remove("wrong-input");
    } else {
        nameInput.classList.add("wrong-input");
        nameInput.value = null;
    }

    // Card Number Part. //
    if (numberInput.value.length <= 0) {
        alertMsgOne.style.visibility = "visible";
        numberInput.classList.add("wrong-input");
    } else if (isNaN(numberInput.value)) {
        alertMsgOne.style.visibility = "visible";
        alertMsgOne.innerHTML = "Wrong format, numbers only";
        numberInput.classList.add("wrong-input");
    } else {
        alertMsgOne.style.visibility = "hidden";
        numberInput.classList.remove("wrong-input");
    }
  

    // Exp. Date => Month Part. //
    if (monthInput.value.length < 1) {
        alertMsgTwoMM.style.visibility = "visible";
        monthInput.classList.add("wrong-input");
    } else if ((monthInput.value.length >= 1) && (monthInput.value <= 0 || monthInput.value > 12)) {
            alertMsgTwoMM.innerHTML = "01 to 12 only";
            monthInput.classList.add("wrong-input");
    } else {
        alertMsgTwoMM.style.visibility = "hidden";
        monthInput.classList.remove("wrong-input");
    }

    // Exp. Date => Year Part.
    if (yearInput.value.length < 1) {
        alertMsgTwoYY.style.visibility = "visible";
        yearInput.classList.add("wrong-input");
    } else if ((yearInput.value.length >= 1) && (yearInput.value >= 0 && yearInput.value <= 22)) {
        alertMsgTwoYY.style.visibility = "visible";
        alertMsgTwoYY.innerHTML = "More than 22";
        yearInput.classList.add("wrong-input");
    } else {
        alertMsgTwoYY.style.visibility = "hidden";
        yearInput.classList.remove("wrong-input");
    }

    // CVC Number //
    if (CvcInput.value.length < 3) {
        alertMsgThree.style.visibility = "visible";
        CvcInput.classList.add("wrong-input");
    } else {
        alertMsgThree.style.visibility = "hidden";
        CvcInput.classList.remove("wrong-input");
    }

    // All conditions for Submit Button work //
    if (nameInput.value && monthInput.value && yearInput.value && CvcInput.value) {
        sectionForm.style.visibility = "hidden";
        sectionThankYou.style.visibility = "visible";
    }
    else if (nameInput.value || monthInput.value || yearInput.value || CvcInput.value) {
        sectionForm.style.visibility = "visible";
        sectionThankYou.style.visibility = "hidden";
    }
}


numberInput.addEventListener('keyup', setCardNumber);
nameInput.addEventListener('keyup', setCardName);
monthInput.addEventListener('keyup', setCardMonth);
yearInput.addEventListener('keyup', setCardYear);
CvcInput.addEventListener('keyup', setCardCVC);

confirmBtn.addEventListener('click', handleSubmit);