'use strict'

const phone = document.getElementById('phone-number')
const form = document.querySelector('form')
const submitButton = document.querySelector('.submit-button');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const nameError = document.getElementById('name-error')
const phoneError = document.getElementById('phone-error')
const emailError = document.getElementById('email-error')
const borderInputError = '#D50303'



////US mask phone number////

phone.addEventListener('input', (e) => {
    const input = e.target; //Get input element
    const value = input.value.replace(/\D/g, '').match(/(\d{3})(\d{3})(\d{4})/); //removes non-digit characters

    if (value) {
        //check if pattern is matched, formats the input value
        input.value = !value[2] ? value[1] : `(${value[1]}) ${value[2]}${value[3] ? '-' + value[3] : ''}`;
    }
});


////Change the border color to #D50303 when there is an error in the form's inputs

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Reset error styles
    nameInput.style.borderColor = ''
    nameError.textContent = ''

    phone.style.borderColor = ''
    phoneError.textContent = ''

    emailInput.style.borderColor = ''
    emailError.textContent = ''


    // Perform form validation
    let hasError = false;


    if (nameInput.value.length < 2) {
        nameInput.style.borderColor = borderInputError;
        nameError.textContent = 'Name should be at least 2 characters long'
        hasError = true;
    }

    const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
    if (!phoneRegex.test(phone.value)) {
        phone.style.borderColor = borderInputError;
        phoneError.textContent = 'Phone number has to have 10 digits'
        hasError = true;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailInput.style.borderColor = borderInputError;
        emailError.textContent = 'Email example: Johndoe@domain.com'
        hasError = true;
    }

    if (hasError) {
        //Handle form submission error
        return;
    }

    // Submit the form if there are no errors
    if (!hasError) {

        // try {

        // Collect form data
        const formData = new FormData(form);

        //Reset the form 
        //form.reset()
        //Change button text to "Submitted"
        //submitButton.textContent = 'SUBMITTED';
        //submitButton.disabled = true; // Disable the button to prevent further submissions


        // Make a POST request to the server
        const response = fetch('https://formsws-hilstaging-com-0adj9wt8gzyq.runscope.net/solar ', {
            method: 'POST',
            body: formData
        })
        // if (response.ok) {
        // Successful submission
        console.log('Form submitted successfully');
        // Reset the form 
        form.reset()
        // Change button text to "Submitted"
        submitButton.textContent = 'SUBMITTED';
        submitButton.disabled = true; // Disable the button to prevent further submissions

        // } else {
        // Handle errors or unsuccessful submission
        //     console.log('Form submission failed');
        // }
        // } catch (error) {
        //     // Handle network errors
        //     console.log('An error occurred during form submission:', error);
        // };
    }
});
