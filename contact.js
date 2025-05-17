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
    $email_content = "number: $number\n";
    $email_content = "Message:\n$message\n";

    // Email Headers
    $headers = "From: $name <$email>";

    // Try to send email
    if (mail($admin_email, $subject, $email_content, $headers)) {
        // Email sent successfully
        echo 
            alert('Thank you! Your message has been sent successfully.');
            window.location.href = 'contact.html';
        
    } else {
        // Email failed
        echo 
            alert('Oops! Your message could not be sent. Please try again.');
            window.history.back();    }

} else {
    // Not a POST request
    echo 
        alert('Invalid access.');
        window.location.href = 'contact.html';
}
function sendmail(event) {
    event.preventDefault();

    var obj = {
        name: document.getElementsByName('name')[0].value,
        email: document.getElementsByName('email')[0].value,
        number: document.getElementsByName('number')[0].value,
        message: document.getElementsByName('message')[0].value
    };

    emailjs.init('YOUR_PUBLIC_KEY'); // Starts with 'public_...'

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', obj)
    .then(function(response) {
        alert("Message sent successfully!");
    }, function(error) {
        alert("Message failed. Check console.");
        console.log('FAILED...', error);
    });
}
