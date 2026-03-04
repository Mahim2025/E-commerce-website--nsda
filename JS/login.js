$(document).ready(function() {
    // Handling Signup Redirect
    $('#signupForm').on('submit', function(e) {
        e.preventDefault(); // Prevent actual form submission
        
        $('#modalTitle').text('Welcome!');
        $('#modalMessage').text('Your account was created successfully. Taking you home...');
        
        showPopupAndRedirect();
    });

    // Handling Login Redirect
    $('#loginForm').on('submit', function(e) {
        e.preventDefault();
        
        $('#modalTitle').text('Logged In!');
        $('#modalMessage').text('Success! Redirecting to your dashboard...');
        
        showPopupAndRedirect();
    });

    function showPopupAndRedirect() {
        // Initialize and show the Bootstrap Modal
        const myModal = new bootstrap.Modal(document.getElementById('statusModal'));
        myModal.show();

        // Redirect after 2.5 seconds
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2500);
    }
});