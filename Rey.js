document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const messageElement = document.getElementById('message');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevents the form from submitting normally and reloading the page

        // Get the values from the input fields
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const dob = document.getElementById('dob').value;

        // Basic validation checks
        if (name === '' || email === '' || password === '' || dob === '') {
            messageElement.textContent = 'Please fill out all fields.';
            messageElement.style.color = 'red';
            return;
        }

        // Validate password length
        if (password.length < 8) {
            messageElement.textContent = 'Password must be at least 8 characters long.';
            messageElement.style.color = 'red';
            return;
        }

        // Validate date of birth (cannot be a future date)
        const dobDate = new Date(dob);
        const today = new Date();
        if (dobDate > today) {
            messageElement.textContent = 'Date of birth cannot be in the future.';
            messageElement.style.color = 'red';
            return;
        }

        // If all validations pass, display a success message
        messageElement.textContent = 'Registration successful!';
        messageElement.style.color = 'green';
        form.reset(); // Clear the form fields
    });
});
