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
<b>Название Формы:</b> $formname  <br> <br>
<b>Имя:</b> $name <br>
<b>Колличество, кг:</b> $number <br>
<b>Телефон:</b> $phone <br>
<b>Mail:</b> $mail <br>
<br>
<b>Содержание:</b> $textarea
";

mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
