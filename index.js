const billInput = document.getElementById('bill-amount-input');
const numPplInput = document.getElementById('num-people-input');
const customTipInput = document.getElementById('custom-tip-input');
const tipPercentBtns = document.querySelectorAll('input[type="radio"');
const tipPerPerson = document.getElementById('tip-per-person');
const totalPerPerson = document.getElementById('total-per-person');

tipPercentBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (validateInput(billInput) && validateInput(numPplInput))
            calcTip(btn.id);
    });
});

const validateInput = (input) => {
    if (!input.value || input.value === '0') {
        input.previousElementSibling.lastElementChild.style.display = 'inline';
        return false;
    } else {
        input.previousElementSibling.lastElementChild.style.display = 'none';
        return true;
    }
};

const calcTip = (tipPercent) => {
    console.log(tipPercent);
    const bill = billInput.value;
    const tip = (tipPercent / 100) * bill;
    const numPpl = numPplInput.value;
    tipPerPerson.textContent = (tip / numPpl).toFixed(2);
    totalPerPerson.textContent = (
        (parseInt(bill) + parseInt(tip)) /
        numPpl
    ).toFixed(2);
};
