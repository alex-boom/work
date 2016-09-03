<?php

$frm_name  = "Александр";
$recepient = "dudka.aleksandr2013@ya.ru";
$sitename  = "Cuda";
$subject   = "Новая заявка с сайта \"$sitename\"";

$name = trim($_POST["name"]);
$mail = trim($_POST["email"]);
$textarea = trim($_POST["textarea"]);


$message = "
Имя: $name <br>
Телефон: $mail
Форма: $textarea
";

mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
