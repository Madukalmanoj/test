document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display a simple alert (you can replace this with actual form handling)
    alert(`Thank you, ${name}! Your message has been sent.`);
    
    // Clear the form
    this.reset();
});