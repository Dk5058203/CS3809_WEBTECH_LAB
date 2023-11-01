function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    if (username.trim() === '') {
        alert('Username is required.');
        return false;
    }

    if (password.trim() === '') {
        alert('Password is required.');
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === '') {
        alert('Email is required.');
        return false;
    } else if (!emailPattern.test(email)) {
        alert('Invalid email format.');
        return false;
    }

    // Confirmation dialog before submitting the form
    const confirmation = confirm('Are you sure you want to submit the form?');
    if (!confirmation) {
        return false;
    }

    // Response dialog after successful form submission
    alert('Form submitted successfully!');

    return true;
}
