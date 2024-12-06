document.getElementById('contact-btn').addEventListener('click', function() {
    // Email addresses to include in the "To" field
    const emails = ['rico.borgdorff@outlook.com', 'ameyasgupta@gmail.com'];
    const subject = 'Contact from GearRev Ignition Crew+';
    const body = 'Hello, I have a question about the app...';

    // Create a mailto link with multiple recipients
    const mailtoLink = `mailto:${emails.join(',')}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the mailto link
    window.location.href = mailtoLink;
});
