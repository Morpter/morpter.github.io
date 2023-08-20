document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        if (!validateFormInputs(loginForm)) {
            return;
        }

        const formData = new FormData(loginForm);

        try {
            const response = await fetch('morpter.rf.gd/login.php', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();
            if (data.authToken) {
                authToken = data.authToken;
                console.log('Login successful');
                // Perform any actions after successful login, e.g., redirect
            } else {
                console.log('Login failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });

    signupForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        if (!validateFormInputs(signupForm)) {
            return;
        }

        const formData = new FormData(signupForm);

        try {
            const response = await fetch('morpter.rf.gd/signup.php', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();
            console.log(data); // Handle response data here
        } catch (error) {
            console.error('Error:', error);
        }
    });

    function validateFormInputs(form) {
        const inputs = form.querySelectorAll('input');
        let valid = true;
        inputs.forEach(input => {
            if (input.value.trim() === '') {
                valid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });
        return valid;
    }
});
