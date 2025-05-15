// Turn on error reporting for debug (only during testing)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Get form fields safely
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // Admin email
    $admin_email = "aabantech76@gmail.com"; // <-- your admin email here

    // Email Subject
    $subject = "New Contact Form Message from Wake Oye Website";

    // Email Body
    $email_content = "You received a new message:\n\n";
    $email_content = "Name: $name\n";
    $email_content = "Email: $email\n";
    $email_content = "Message:\n$message\n";

    // Email Headers
    $headers = "From: $name <$email>";

    // Try to send email
    if (mail($admin_email, $subject, $email_content, $headers)) {
        // Email sent successfully
        echo 
            alert('Thank you! Your message has been sent successfully.');
            window.location.href = 'index 2.html';
        
    } else {
        // Email failed
        echo 
            alert('Oops! Your message could not be sent. Please try again.');
            window.history.back();    }

} else {
    // Not a POST request
    echo 
        alert('Invalid access.');
        window.location.href = 'index 2.html';
}
