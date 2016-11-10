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
		<section class="section-top">
			<div class="line line-horizont-1"></div>
			<div class="line line-horizont-2"></div>
			<div class="line line-horizont-3"></div>
			<div class="line line-vertical-1"></div>
			<div class="line line-vertical-2"></div>
			<div class="container">
				<div class="row">
					<div class="col-md-12">
							<a class="logo" href="#"><img src="<?php echo get_template_directory_uri(); ?>/build/images/logo1.svg" alt="Культурный House"></a>
					</div>
				</div>
				<div class="row">
					<div class="owl-carousel">
					<?php
						$idObj = get_category_by_slug('Slider-top');
						$id = $idObj->term_id; 

							if ( have_posts() ) : query_posts('cat=' . $id);
							while (have_posts()) : the_post(); ?>

						<div class="item"><h2><?php the_content(); ?></h2></div>
							<?php endwhile; endif; wp_reset_query(); ?>

					</div>
				</div>
			</div>
			<i class="fa fa-angle-down" aria-hidden="true"></i>
		</section>
		<header class="header">
			<nav class="navbar">
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
							<li><a href="#advertising">АКЦИИ</a></li>
							<li><a href="#">О ПРОЕКТЕ</a></li>
							<li><a href="#advantages">ПРЕИМУЩЕСТВА</a></li>
							<li><a href="#gallery">ГАЛЕРЕЯ</a></li>
							<li><a href="#reviews">ОТЗЫВЫ</a></li>
							<li><a href="#contact">КОНТАКТЫ</a></li>
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
		<main>
			<section id="advertising" class="section-advertising">
				<a class="button-custom button-top" href="#">Для покорояющих мир!</a>
				<a class="button-custom button-bottom" href="#">Квартира всего за 9000$!</a>
				<div id="CDT"></div>
			</section>
			<div class="bottom-line">
				<div class="container">
					<div class="row">
						<div class="col-md-7">
							<a class="btn-left" href="#"><span>1/08/2016</span><b>Квартира в комплексе</b> "Культурный House" всего за 9000$!<i class="fa fa-angle-right" aria-hidden="true"></i></a>
						</div>
						<div class="col-md-5">
							<div class="row box-right-btn"">
								<div class="col-xs-4"><a class="btn-right" style="background:#54bfef;" href="#"><img src="<?php echo get_template_directory_uri(); ?>/build/images/bild1.svg"  alt="wall"></a></div>
								<div class="col-xs-4"><a class="btn-right" style="background:#4ab969;"  href="#"><img src="<?php echo get_template_directory_uri(); ?>/build/images/bild2.svg" alt="turn"></a></div>
								<div class="col-xs-4"><a class="btn-right" style="background:#bababa;" href="#"><img class="edit" src="<?php echo get_template_directory_uri(); ?>/build/images/bild3.svg" alt="apartment"></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<section id="advantages" class="section-advantages">
				<div class="heading">преимущества</div>
				<div class="line line-vertical-3"></div>
				<div class="advantages-holder">
					<div class="items left-box">

						<?php
							$idObj = get_category_by_slug('left-box');
							$id = $idObj->term_id; 

							if ( have_posts() ) : query_posts('cat=' . $id);
							while (have_posts()) : the_post(); ?>

						<div class="item">
							<?php the_post_thumbnail(); ?>
							<div class="descr-box">
								<img src="<?php echo get_post_meta($post->ID, 'img-url', true); ?>" style="<?php echo get_post_meta($post->ID, 'img-style', true); ?>" alt="buildings">
								<article>
									<h3><?php the_title(); ?></h3>
									<?php the_content(); ?>
								</article>
							</div>
						</div>

						<?php endwhile; endif; wp_reset_query(); ?>

					</div>
					<div class="items right-box">

						<?php
							$idObj = get_category_by_slug('right-box');
							$id = $idObj->term_id; 

							if ( have_posts() ) : query_posts('cat=' . $id);
							while (have_posts()) : the_post(); ?>

						<div class="item">
							<?php the_post_thumbnail(); ?>
							<div class="descr-box">
								<img src="<?php echo get_post_meta($post->ID, 'img-url', true); ?>" style="<?php echo get_post_meta($post->ID, 'img-style', true); ?>" alt="buildings">
								<article>
									<h3><?php the_title(); ?></h3>
									<?php the_content(); ?>
								</article>
							</div>
						</div>

						<?php endwhile; endif; wp_reset_query(); ?>

					</div>
				</div>
				<div class="block-bottom">
					<div class="overley"></div>
					<div class="container">
						<div class="row">
						<div class="line line-horizont-4"></div>
						<div class="line line-horizont-5"></div>
						<div class="line line-horizont-6"></div>
						<div class="line line-vertical-4"></div>
						<div class="line line-vertical-5"></div>
							<div class="col-lg-12 text-center">
								<div class="item">
									<img src="<?php echo get_template_directory_uri(); ?>/build/images/itembb1.svg" alt="">
									<div class="value">6</div>
									<div class="descr">лет на рынке</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-5 col-md-4 col-sm-12 text-left">
								<div class="item">
									<img src="<?php echo get_template_directory_uri(); ?>/build/images/itembb2.svg" alt="">
									<div class="value">5</div>
									<div class="descr">реализованных <br> проектов</div>
								</div>
							</div>
							<div class="col-lg-3 col-md-4 col-sm-12 text-center">
								<div class="item">
									<img src="<?php echo get_template_directory_uri(); ?>/build/images/itembb3.svg" alt="">
									<div class="value">10</div>
									<div class="descr">построенных <br> домов</div>
								</div>
							</div>
							<div class="col-lg-4 col-md-4 col-sm-12">

								<?php
									$idObj = get_category_by_slug('item-post');
									$id = $idObj->term_id; 

								if ( have_posts() ) : query_posts('cat=' . $id);
								while (have_posts()) : the_post(); ?>

								<div class="item-post">
									<?php the_content(); ?>
								</div>

								<?php endwhile; endif; wp_reset_query(); ?>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-7 col-sm-12">

								<?php
									$idObj = get_category_by_slug('post-item');
									$id = $idObj->term_id; 

									if ( have_posts() ) : query_posts('cat=' . $id);
									while (have_posts()) : the_post(); ?>

								<div class="item-post post">
									<?php the_content(); ?>
								</div>

								<?php endwhile; endif; wp_reset_query(); ?>
							</div>
							<div class="col-lg-5 col-sm-12 text-center">
								<div class="item">
									<img src="<?php echo get_template_directory_uri(); ?>/build/images/itembb4.svg" alt="">
									<div class="value">3000</div>
									<div class="descr">счастливых семей</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id="gallery" class="section-gallery">
				<div class="heading">галерея</div>
				<div class="container">
					<div class="row">
						<div class="col-md-3 col-sm-6 col-xs-12">
							<div class="item-gallery">
								<a href="http://test-4.kl.com.ua/gallery-1">
									<div class="overley"></div>
									<span class="descr">Галерея-1</span>
									<img src="<?php echo get_template_directory_uri(); ?>/build/images/gallery1.jpg" alt="gallery-novostroi">
								</a>
							</div>
						</div>
						<div class="col-md-3 col-sm-6 col-xs-12">
							<div class="item-gallery">
								<a href="http://test-4.kl.com.ua/gallery-2">
									<div class="overley"></div>
									<span class="descr">Галерея-1</span>
									<img src="<?php echo get_template_directory_uri(); ?>/build/images/gallery2.jpg" alt="gallery-novostroi">
								</a>
							</div>
						</div>
						<div class="col-md-3 col-sm-6 col-xs-12">
							<div class="item-gallery">
								<a href="http://test-4.kl.com.ua/gallery-3">
									<div class="overley"></div>
									<span class="descr">Галерея-1</span>
									<img src="<?php echo get_template_directory_uri(); ?>/build/images/gallery3.jpg" alt="gallery-novostroi">
								</a>
							</div>
						</div>
						<div class="col-md-3 col-sm-6 col-xs-12">
							<div class="item-gallery">
								<a href="http://test-4.kl.com.ua/gallery-4">
									<div class="overley"></div>
									<span class="descr">Галерея-1</span>
									<img src="<?php echo get_template_directory_uri(); ?>/build/images/gallery4.jpg" alt="gallery-novostroi">
								</a>
							</div>
						</div>
						<div class="col-md-3 col-sm-6 col-xs-12">
							<div class="item-gallery">
								<a href="http://test-4.kl.com.ua/gallery-5">
									<div class="overley"></div>
									<span class="descr">Галерея-1</span>
									<img src="<?php echo get_template_directory_uri(); ?>/build/images/gallery4.jpg" alt="gallery-novostroi">
								</a>
							</div>
						</div>
						<div class="col-md-3 col-sm-6 col-xs-12">
							<div class="item-gallery">
								<a href="http://test-4.kl.com.ua/gallery-6">
									<div class="overley"></div>
									<span class="descr">Галерея-1</span>
									<img src="<?php echo get_template_directory_uri(); ?>/build/images/gallery3.jpg" alt="gallery-novostroi">
								</a>
							</div>
						</div>
						<div class="col-md-3 col-sm-6 col-xs-12">
							<div class="item-gallery">
								<a href="http://test-4.kl.com.ua/gallery-7">
									<div class="overley"></div>
									<span class="descr">Галерея-1</span>
									<img src="<?php echo get_template_directory_uri(); ?>/build/images/gallery2.jpg" alt="gallery-novostroi">
								</a>
							</div>
						</div>
						<div class="col-md-3 col-sm-6 col-xs-12">
							<div class="item-gallery">
								<a href="http://test-4.kl.com.ua/gallery-8">
									<div class="overley"></div>
									<span class="descr">Галерея-1</span>
									<img src="<?php echo get_template_directory_uri(); ?>/build/images/gallery1.jpg" alt="gallery-novostroi">
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id="reviews" class="section-slider">
				<div class="overley"></div>
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<div class="heading">ОТЗЫВЫ</div>
						</div>
					</div>
				</div>
				<div class="line line-horizont-1"></div>
				<div class="line line-horizont-2"></div>
				<div class="line line-horizont-3"></div>
				<div class="line line-vertical-1"></div>
				<div class="line line-vertical-2"></div>
				<div class="container">
					<div class="row">
						<div class="owl-carousel">

							<?php
									$idObj = get_category_by_slug('Slider-reviews');
									$id = $idObj->term_id; 

									if ( have_posts() ) : query_posts('cat=' . $id);
									while (have_posts()) : the_post(); ?>

							<div class="item reviews">

								<?php the_post_thumbnail(); ?>
								<div class="descr">

									<?php the_content(); ?>

									<div class="name"><?php echo get_post_meta($post->ID, 'name', true); ?></div>
									<div class="social"><i class="fa <?php echo get_post_meta($post->ID, 'social-icon', true); ?>" aria-hidden="true"></i><?php echo get_post_meta($post->ID, 'social-id', true); ?></div>
								</div>
							</div>

							<?php endwhile; endif; wp_reset_query(); ?>

						</div>
					</div>
				</div>
			</section>
			<section class="section-partners">
				<div class="line line-horizont-7"></div>
				<div class="line line-horizont-8"></div>
				<div class="line line-horizont-9"></div>
				<div class="line line-horizont-10"></div>
				<div class="line line-horizont-11"></div>
				<div class="line line-vertical-6"></div>
				<div class="line line-vertical-7"></div>
				<div class="line line-vertical-8"></div>
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<div class="heading">Наши партнеры</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12 text-center">

							<?php
										$idObj = get_category_by_slug('partners');
										$id = $idObj->term_id; 

										if ( have_posts() ) : query_posts('cat=' . $id);
										while (have_posts()) : the_post(); ?>

							<div class="descr">
								<?php the_content(); ?>
							</div>

							<?php endwhile; endif; wp_reset_query(); ?>
						</div>
					</div>
					<div class="row">
						<div class="col-md-10 col-lg-offset-1 text-center">
							<div class="row">
								<div class="col-md-3 col-sm-4"><img src="<?php echo get_template_directory_uri(); ?>/build/images/brand1.jpg" alt="logo-company"></div>
								<div class="col-md-6 col-sm-4"><img src="<?php echo get_template_directory_uri(); ?>/build/images/brand2.jpg" alt="logo-company"></div>
								<div class="col-md-3 col-sm-4"><img src="<?php echo get_template_directory_uri(); ?>/build/images/brand3.jpg" alt="logo-company"></div>
							</div>
							<div class="row">
								<div class="col-md-3 col-sm-4"><img src="<?php echo get_template_directory_uri(); ?>/build/images/brand4.jpg" alt="logo-company"></div>
								<div class="col-md-6 col-sm-4"><img src="<?php echo get_template_directory_uri(); ?>/build/images/brand5.jpg" alt="logo-company" style="margin-top: -20px"></div>
								<div class="col-md-3 col-sm-4"><img src="<?php echo get_template_directory_uri(); ?>/build/images/brand6.jpg" alt="logo-company"></div>
							</div>
							<div class="row">
								<div class="col-md-3 col-sm-4"><img src="<?php echo get_template_directory_uri(); ?>/build/images/brand7.jpg" alt="logo-company"></div>
								<div class="col-md-6 col-sm-4"><img src="<?php echo get_template_directory_uri(); ?>/build/images/brand8.jpg" alt="logo-company" style="margin-top: 10px"></div>
								<div class="col-md-3 col-sm-4"><img src="<?php echo get_template_directory_uri(); ?>/build/images/brand9.jpg" alt="logo-company"></div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id="contact" class="section-contacts">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<div class="heading">Контакты</div>
						</div>
					</div>
					<div class="box-contact">
						<div class="item-contact">
							<i class="fa fa-map-marker" aria-hidden="true"></i>
							<div class="holder">
								<div class="head">Адрес</div>
								<p><?php $options = get_option( 'sample_theme_options' ); echo $options['adress']; ?></p>
							</div>
						</div>
						<div class="item-contact">
							<i class="fa fa-clock-o" aria-hidden="true"></i>
							<div class="holder">
								<div class="head">График работы<br> отдела продаж</div>
									<p><?php $options = get_option( 'sample_theme_options' ); echo $options['schedule']; ?></p>
							</div>
						</div>
						<div class="item-contact">
							<i class="fa fa-phone" aria-hidden="true"></i>
							<div class="holder">
								<div class="head">Телефон</div>
								<p><a href="tel:+38(066)5757570"><?php $options = get_option( 'sample_theme_options' ); echo $options['phone']; ?></a><br>
									<a href="tel:+38(096)0161717"><?php $options = get_option( 'sample_theme_options' ); echo $options['phone-2']; ?></a>
								</p>
							</div>
						</div>
						<div class="item-contact">
							<i class="fa fa-internet-explorer" aria-hidden="true"></i>
							<div class="holder">
								<div class="head">E-mail</div>
								<p><a href="mailto:kulturnyjhouse@gmail.com"><?php $options = get_option( 'sample_theme_options' ); echo $options['mail']; ?></a></p>
							</div>
						</div>
					</div>
					<div class="box-social">
						<a href="#"><i class="fa vk" aria-hidden="true"></i></a>
						<a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
						<a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
						<a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
						<a href="#"><i class="fa fa-youtube" aria-hidden="true"></i></a>
						<a href="#"><i class="fa khf" aria-hidden="true"></i></a>
					</div>

					<button id="calcRout" class="btn-custom">ПРОЛОЖИТЬ МАРШРУТ</button>
					<button class="fa fa-angle-up"></button>

					<div id="floating-panel">
						<b>Введите стартовый адрес: </b>
						<input id="start" type="text">
					</div>

					<div id="warnings-panel"></div>
				</div>

				<div id="map"></div>

			</section>
		</main>

<?php get_footer(); ?>