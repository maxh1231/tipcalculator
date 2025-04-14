const billInput = document.getElementById('bill-amount-input');
const numPplInput = document.getElementById('num-people-input');
const customTipInput = document.getElementById('custom-tip-btn');
const tipPercentBtns = document.querySelectorAll('input[type="radio"');
const tipPerPerson = document.getElementById('tip-per-person');
const totalPerPerson = document.getElementById('total-per-person');
const resetBtn = document.getElementById('result-reset-btn');

tipPercentBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        resetBtn.disabled = false;
        customTipInput.value = '';

        handleInteraction(btn.id, false);
    });
});

customTipInput.addEventListener('change', () => {
    tipPercentBtns.forEach((btn) => {
        btn.checked = false;
    });
    handleInteraction(customTipInput.value, true);
});

const textChange = () => {
    const checkedBtn = [...tipPercentBtns].find((btn) => btn.checked);
    if (checkedBtn) handleInteraction(checkedBtn.id, false);
    else if (customTipInput.value != '')
        handleInteraction(customTipInput.value, true);
};

billInput.addEventListener('change', textChange);
numPplInput.addEventListener('change', textChange);

const handleInteraction = (origin, evalCustom) => {
    const isBillValid = validateInput(billInput);
    const isNumPplValid = validateInput(numPplInput);
    let isCustomValid = true;
    if (evalCustom) isCustomValid = validateInput(customTipInput);

    if (isBillValid && isNumPplValid && isCustomValid) calcTip(origin);
};

const validateInput = (input) => {
    if (input.id != 'custom-tip-btn' && (!input.value || input.value === '0')) {
        toggleError(input, "Can't be zero");
        return false;
    } else if (parseInt(input.value) < 0) {
        toggleError(input, "Can't be negative");
        return false;
    } else if (isNaN(parseInt(input.value))) {
        toggleError(input, 'Must be a number');
        return false;
    }

    toggleError(input, null);
    return true;
};

const toggleError = (element, message) => {
    if (element.parentElement.className.includes('input-error-container')) {
        element.previousElementSibling.lastElementChild.textContent = message;
    }
};

const calcTip = (tipPercent) => {
    const bill = billInput.value;
    const tip = (parseFloat(tipPercent) / 100) * bill;
    const numPpl = numPplInput.value;
    tipPerPerson.textContent = (tip / numPpl).toFixed(2);
    totalPerPerson.textContent = (
        (parseFloat(bill) + parseFloat(tip)) /
        numPpl
    ).toFixed(2);
};
