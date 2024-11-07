<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';
require 'path/to/PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com'; // Your SMTP host
    $mail->SMTPAuth = true;
    $mail->Username = 'joaofariaportfolio@gmail.com'; // Your email
    $mail->Password = 'joaofariaportfolio.2024'; // Your email password
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    $mail->setFrom('joaofariaportfolio@gmail.com', 'Your Name');
    $mail->addAddress('jpfariapt@gmail.com.com'); // Recipient's email

    $mail->isHTML(true);
    $mail->Subject = 'Test email';
    $mail->Body = 'This is a test email using PHPMailer with SMTP.';

    $mail->send();
    echo 'Email has been sent successfully';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>
