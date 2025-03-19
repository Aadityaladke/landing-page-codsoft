// Scroll to the features section when the button is clicked
function scrollToContent() {
    const featuresSection = document.getElementById('features');
    window.scrollTo({
        top: featuresSection.offsetTop,
        behavior: 'smooth'
    });
}

// Contact form submission (you can customize this as per your need)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent page reload on form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple alert for demonstration (you could send this to a server instead)
    alert(`Message sent! \nName: ${name} \nEmail: ${email} \nMessage: ${message}`);

    // Clear form after submission
    document.getElementById('contact-form').reset();
});
