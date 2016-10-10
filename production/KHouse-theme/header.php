<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title><?php echo get_bloginfo('description'); ?></title>
	<meta name="description" content="">
	<link media="all" rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/build/vendor.css">
	<link media="all" rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/build/app.css">
	<link media="all" rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/style.css">
	<link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css">
	<link href="https://fonts.googleapis.com/css?family=Roboto+Slab:300,400,700&subset=cyrillic" rel="stylesheet">
	<?php wp_head(); ?>
</head>
<body>
	<div id="wrapper">
		<header class="header">
			<nav class="navbar navbar-custom">
				<div class="container">
					<div class="navbar-header">
						<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						<a class="navbar-brand" href="#"><img src="<?php echo get_template_directory_uri(); ?>/build/images/logo1.svg" alt=""></a>
					</div>
					<div class="collapse navbar-collapse" id="myNavbar">
						<ul class="nav navbar-nav navbar-right">
							<li><a href="http://test-4.kl.com.ua/#advertising">АКЦИИ</a></li>
							<li><a href="http://test-4.kl.com.ua/#advertising">О ПРОЕКТЕ</a></li>
							<li><a href="http://test-4.kl.com.ua/#advantages">ПРЕИМУЩЕСТВА</a></li>
							<li><a href="http://test-4.kl.com.ua/#gallery">ГАЛЕРЕЯ</a></li>
							<li><a href="http://test-4.kl.com.ua/#reviews">ОТЗЫВЫ</a></li>
							<li><a href="http://test-4.kl.com.ua/#contact">КОНТАКТЫ</a></li>
						</ul>
					</div>
					<ul class="contact-top">
						<li>г. Харьков</li>
						<li>ул. Весёлая, 30</li>
						<li><a href="tel:+38(093)5300530">093-53-00-530</a></li>
						<li><a href="tel:+38(098)7008700">098-700-8-700</a></li>
					</ul>
				</div>
			</nav>
		</header>