document.addEventListener('DOMContentLoaded', () => {
    const passwordOverlay = document.getElementById('password-overlay');
    const passwordInput = document.getElementById('password-input');
    const passwordSubmit = document.getElementById('password-submit');
    const passwordError = document.getElementById('password-error');
    const mainContent = document.getElementById('main-content');

    const correctPassword = "passwordcorrect";

    passwordSubmit.addEventListener('click', () => {
        const enteredPassword = passwordInput.value.trim();

        if (enteredPassword === correctPassword) {
            passwordOverlay.style.display = 'none'; 
            mainContent.classList.remove('hidden'); 
        } else {
            passwordError.classList.remove('hidden'); 
        }
    });

    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            passwordSubmit.click();
        }
    });
});
