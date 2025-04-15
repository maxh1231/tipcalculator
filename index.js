const billInput = document.getElementById('bill-amount-input');
const numPplInput = document.getElementById('num-people-input');
const customTipInput = document.getElementById('custom-tip-btn');
const tipPercentBtns = document.querySelectorAll('input[type="radio"');
const tipPerPerson = document.getElementById('tip-per-person');
const totalPerPerson = document.getElementById('total-per-person');
const resetBtn = document.getElementById('result-reset-btn');

/**
 * Dynamically updates tip/bill calculations when bill input or number of people is modified.
 */
const textInputChange = () => {
    const checkedBtn = [...tipPercentBtns].find((btn) => btn.checked);
    if (checkedBtn) handleInteraction(checkedBtn.id, false);
    else if (customTipInput.value != '')
        handleInteraction(customTipInput.value, true);
};

/**
 * Bundles  and validates each text input, if successful, calls `calculateTip`.
 * @param origin | Origin
 * @param {boolean} evalCustom | To validate custom input.
 */
const handleInteraction = (origin, evalCustom) => {
    const isBillValid = validateTextInput(billInput);
    const isNumPplValid = validateTextInput(numPplInput);
    let isCustomValid = true;
    if (evalCustom) isCustomValid = validateTextInput(customTipInput);

    if (isBillValid && isNumPplValid && isCustomValid) calculateTip(origin);
};

/**
 * Returns false if text inputs are empty, 0, or NaN. Returns true otherwise. Calls `toggleError` to update associated error element.
 * @param input | Input to validate
 * @returns {boolean}
 */
const validateTextInput = (input) => {
    if (input.id != 'custom-tip-btn' && (!input.value || input.value === '0')) {
        toggleInputError(input, "Can't be zero");
        return false;
    } else if (parseInt(input.value) < 0) {
        toggleInputError(input, "Can't be negative");
        return false;
    } else if (isNaN(input.value)) {
        toggleInputError(input, 'Must be a number');
        return false;
    }

    toggleInputError(input, null);
    return true;
};

/**
 * Toggles error message when invalid inputs are provided.
 * @param element | Element to reference relative error.
 * @param message | Error message.
 */
const toggleInputError = (element, message) => {
    if (element.parentElement.className.includes('input-error-container')) {
        element.previousElementSibling.lastElementChild.textContent = message;
    }
};

/**
 * Calculates per person tip/bill and updates text elements.
 * @param tipPercent | Percentage for calculation.
 */
const calculateTip = (tipPercent) => {
    const bill = billInput.value;
    const tip = (parseFloat(tipPercent) / 100) * bill;
    const numPpl = numPplInput.value;
    tipPerPerson.textContent = `$${(tip / numPpl).toFixed(2)}`;
    totalPerPerson.textContent = `$${(
        (parseFloat(bill) + parseFloat(tip)) /
        numPpl
    ).toFixed(2)}`;
};

billInput.addEventListener('change', textInputChange);
numPplInput.addEventListener('change', textInputChange);

/**
 * Applies eventListener to all tip buttons.
 */
tipPercentBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        resetBtn.disabled = false;
        customTipInput.value = '';

        handleInteraction(btn.id, false);
    });
});

/**
 * Unselects preset tip buttons and updates result calculations if all input validation is successful.
 */
customTipInput.addEventListener('change', () => {
    tipPercentBtns.forEach((btn) => (btn.checked = false));
    handleInteraction(customTipInput.value, true);
});

/**
 * Resets all buttons, inputs, and text elements.
 */
resetBtn.addEventListener('click', () => {
    tipPercentBtns.forEach((btn) => (btn.checked = false));
    billInput.value = null;
    customTipInput.value = null;
    numPplInput.value = null;
    tipPerPerson.textContent = '$0.00';
    totalPerPerson.textContent = '$0.00';
});
