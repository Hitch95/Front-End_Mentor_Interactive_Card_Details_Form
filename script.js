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
const alertMsgTwoMM = document.getElementById('two-month');
const alertMsgTwoYY = document.getElementById('two-year');
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

    // Card Number Part. //
    if (numberInput.value.length <= 0) {
        alertMsgOne.style.display = "contents";
        alertMsgOne.innerHTML = "<span style='display:contents'>Can't be blank</span>";
    } else if (isNaN(numberInput.value)) {
        alertMsgOne.style.display = "contents";
        alertMsgOne.innerHTML = "<span style='display:contents'>Wrong format, numbers only</span>";
    } else if (numberInput.value.length > 0 && !isNaN(numberInput.value)) {
        alertMsgOne.style.display = "none";
        alertMsgOne.innerHTML = "<span style='display:contents'></span>";
    }
  

    // Exp. Date => Month Part. //
    if (!monthInput.value.length > 0) {
        alertMsgTwoMM.style.visibility = "visible";
    } else if (monthInput.value < 0 || monthInput.value > 12) {
            alertMsgTwoMM.style.visibility = "visible";
            alertMsgTwoMM.innerHTML = "<p style='visibility:visible'>01 to 12 only</p>";
    } else {
        alertMsgTwoMM.style.visibility = "hidden";
    }

    // Exp. Date => Year Part.
    if (yearInput.value.length < 2) {
        alertMsgTwoYY.style.visibility = "visible";
    } else if (yearInput.value <= 22) {
        alertMsgTwoYY.style.visibility = "visible";
        alertMsgTwoYY.innerHTML = "<p style='visibility:visible'>More than 22</p>";
    } else {
        alertMsgTwoYY.style.visibility = "hidden";
    }

    // CVC Number //
    if (CvcInput.value.length !== 3 || isNaN(CvcInput.value)) {
        alertMsgThree.style.visibility = "visible";
    } else {
        alertMsgThree.style.visibility = "hidden";
    }

    // All conditions for Submit Button work //
    if (nameInput.value || monthInput.value || yearInput.value || CvcInput.value) {
        sectionForm.style.visibility = "visible";
        sectionThankYou.style.visibility = "hidden";
    }
    else if (nameInput.value && monthInput.value && yearInput.value && CvcInput.value) {
        sectionForm.style.visibility = "hidden";
        sectionThankYou.style.visibility = "visible";
    }
}

numberInput.addEventListener('keyup', setCardNumber);
nameInput.addEventListener('keyup', setCardName);
monthInput.addEventListener('keyup', setCardMonth);
yearInput.addEventListener('keyup', setCardYear);
CvcInput.addEventListener('keyup', setCardCVC);

confirmBtn.addEventListener('click', handleSubmit);