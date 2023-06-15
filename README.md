# Form Page

This project contains a simple web page that displays a form. The form allows users to submit data and includes basic validation to ensure the entered information is correct.

## Features

- Responsive design optimized for various screen sizes and devices.
- Form validation to ensure data integrity before submission.
- Error handling and display of error messages to guide users in correcting their input.
- Submit button to send the form data to the server via AJAX.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository to your local machine.
2. Open the project directory in your preferred code editor.
3. Open the index.html file in a web browser to view the form page.

## Usage

1. Fill in the form fields with the required information:

- Name: Enter your name (minimum of 2 characters).
- City: Optionally, enter your city.
- State: Optionally, enter your state.
- Phone Number: Enter a valid US phone number (format: (XXX) XXX-XXXX).
- Email Address: Enter a valid email address.

2. If any of the fields contain invalid data, error messages will be displayed next to the respective fields, and the fields' borders will turn red.
3. Once all fields are filled correctly, click the "Submit" button to send the form data to the server.
4. If the submission is successful, a confirmation message will be displayed, and the form will be reset for another submission.
5. In case of any errors during submission, an appropriate error message will be displayed.
