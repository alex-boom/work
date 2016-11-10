<?php

$frm_name  = "Александр";
$recepient = "dudka.aleksandr2013@ya.ru";
$sitename  = "Snail-House";
$subject   = "Новая заявка с сайта \"$sitename\"";

$name = trim($_POST["userName"]);
$phone = trim($_POST["phone"]);
$mail = trim($_POST["email"]);
$textarea = trim($_POST["textarea"]);
$number = trim($_POST["number"]); 
$formname = trim($_POST["formname"]);



$message = "
Название Формы: $formname  <br> <br>
Имя: $name <br>
Колличество, кг: $number <br>
Телефон: $phone <br>
Mail: $mail <br>
<br>
Содержание: $textarea
";

mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
