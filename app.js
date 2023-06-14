'use strict'

const phone = document.getElementById('phone-number')

phone.addEventListener('input', (e) => {
    const input = e.target;
    const value = input.value.replace(/\D/g, '').match(/(\d{3})(\d{3})(\d{4})/);

    if (value) {
        input.value = !value[2] ? value[1] : `(${value[1]}) ${value[2]}${value[3] ? '-' + value[3] : ''}`;
    }
});
