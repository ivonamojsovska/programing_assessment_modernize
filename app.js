'use strict'

const phone = document.getElementById('phone-number')
const form = document.querySelector('form')
const submitButton = document.querySelector('.submit-button');



////US mask phone number////

phone.addEventListener('input', (e) => {
    const input = e.target; //Get input element
    const value = input.value.replace(/\D/g, '').match(/(\d{3})(\d{3})(\d{4})/); //removes non-digit characters

    if (value) {
        //check if pattern is matched, formats the input value
        input.value = !value[2] ? value[1] : `(${value[1]}) ${value[2]}${value[3] ? '-' + value[3] : ''}`;
    }
});

////Submiting form and sending data to specific URL/////

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from submitting normally

    // Collect form data
    const formData = new FormData(form);

    // Make a POST request to the server
    fetch('https://formsws-hilstaging-com-0adj9wt8gzyq.runscope.net/solar', {
        method: 'POST',
        body: formData
    })
        .then(response => {
            if (response.ok) {
                // Successful submission
                console.log('Form submitted successfully');
                // Change button copy to "Submitted"
                submitButton.textContent = 'Submitted';
                submitButton.disabled = true; // Disable the button to prevent further submissions

            } else {
                // Handle errors or unsuccessful submission
                console.log('Form submission failed');
            }
        })
        .catch(error => {
            // Handle network errors
            console.log('An error occurred during form submission:', error);
        });
});
