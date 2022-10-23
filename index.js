let billInput = document.getElementById('bill-input');
let tipBtn = document.querySelectorAll('.tipBtn');

console.log(tipBtn)

tipBtn.forEach(function (item) {
    item.addEventListener('click', function () {
        if (this.getAttribute('id') === 'five-percent') {
            console.log(true)
            document.querySelector('#tip-amount').textContent = (billInput.value * .05).toFixed(2)
        }

        if (this.getAttribute('id') === 'ten-percent') {
            console.log(true)
            document.querySelector('#tip-amount').textContent = (billInput.value * .10).toFixed(2)
        }

        if (this.getAttribute('id') === 'fifteen-percent') {
            console.log(true)
            document.querySelector('#tip-amount').textContent = (billInput.value * .15).toFixed(2)
        }

        if (this.getAttribute('id') === 'twentyFive-percent') {
            console.log(true)
            document.querySelector('#tip-amount').textContent = (billInput.value * .25).toFixed(2)
        }

        if (this.getAttribute('id') === 'fifty-percent') {
            console.log(true)
            document.querySelector('#tip-amount').textContent = (billInput.value * .5).toFixed(2)
        }
    })
})