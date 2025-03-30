let billInput = document.getElementById('bill-input');
let tipBtn = document.querySelectorAll('.tipBtnDeactive');

console.log(tipBtn)

tipBtn.forEach(function (item) {
    item.addEventListener('click', function () {


        if (this.getAttribute('id') === 'five-percent') {
            let tipAmt = (billInput.value * .05).toFixed(2)
            document.querySelector('#tip-amount').textContent = `$${tipAmt}`
            document.querySelector('#per-person').textContent = `$${tipAmt / (document.querySelector('#people-input').value)}`
            tipBtn.forEach(function (item) {
                item.classList.remove('tipBtnActive');
            })
            this.classList.add('tipBtnActive');
        }

        if (this.getAttribute('id') === 'ten-percent') {
            let tipAmt = (billInput.value * .10).toFixed(2)
            document.querySelector('#tip-amount').textContent = `$${tipAmt}`
            let perPerson = (tipAmt / document.querySelector('#people-input').value).toFixed(2);
            document.querySelector('#per-person').textContent = `$${perPerson}`

            tipBtn.forEach(function (item) {
                item.classList.remove('tipBtnActive');
            })
            this.classList.add('tipBtnActive');
        }


        if (this.getAttribute('id') === 'fifteen-percent') {
            let tipAmt = (billInput.value * .15).toFixed(2)
            document.querySelector('#tip-amount').textContent = `$${tipAmt} `
            document.querySelector('#per-person').textContent = `$${tipAmt / (document.querySelector('#people-input').value)} `
            tipBtn.forEach(function (item) {
                item.classList.remove('tipBtnActive');
            })
            this.classList.add('tipBtnActive');
        }


        if (this.getAttribute('id') === 'twentyFive-percent') {
            let tipAmt = (billInput.value * .25).toFixed(2)
            document.querySelector('#tip-amount').textContent = `$${tipAmt} `
            document.querySelector('#per-person').textContent = `$${tipAmt / (document.querySelector('#people-input').value)} `
            tipBtn.forEach(function (item) {
                item.classList.remove('tipBtnActive');
            })
            this.classList.add('tipBtnActive');
        }


        if (this.getAttribute('id') === 'fifty-percent') {
            let tipAmt = (billInput.value * .5).toFixed(2)
            document.querySelector('#tip-amount').textContent = `$${tipAmt} `
            document.querySelector('#per-person').textContent = `$${tipAmt / (document.querySelector('#people-input').value)} `
            tipBtn.forEach(function (item) {
                item.classList.remove('tipBtnActive');
            })
            this.classList.add('tipBtnActive');
        }


    })
})
