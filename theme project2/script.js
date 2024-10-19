document.getElementById('registrationForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Registration successful! You can now log in.');
    window.location.href = 'index.html'; // Redirect to login page
});

document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Login successful!'); // Placeholder for login functionality
    window.location.href = 'doctors.html'; // Redirect to doctors page
});

document.getElementById('appointmentForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Appointment booked successfully!');
    // Here, you can add more logic to handle the appointment
});

document.getElementById('appointmentForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const confirmBooking = confirm('Are you sure you want to book this appointment?');
    
    if (confirmBooking) {
        alert('Appointment booked successfully!');
        // Add any further code to process the booking
        window.location.href = 'confirmation.html'; // Redirect to confirmation page
    } else {
        alert('Appointment booking canceled.');
    }
});




