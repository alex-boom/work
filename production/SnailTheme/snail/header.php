<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title><?php echo get_bloginfo('description'); ?></title>
	<link media="all" rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/build/vendor.css">
	<link media="all" rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/build/app.css">
	<link media="all" rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/style.css">
	<link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css">
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700|Taviraj:400,600,600i,700&amp;subset=cyrillic-ext" rel="stylesheet">
	<?php wp_head(); ?>
</head>
<body>
	<div id="wrapper">
		<header class="header">
			<div class="top-line">
				<div class="container">
					<div class="row">

					<?php
					$idObj = get_category_by_slug('header');
					$id = $idObj->term_id; 

					if ( have_posts() ) : query_posts('cat=' . $id);
					while (have_posts()) : the_post(); ?>

						<div class="col-lg-2 col-xs-4">
							<ul class="social">
								<li><a href="<?php echo get_post_meta($post->ID, 'instagram', true); ?>"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
								<li><a href="<?php echo get_post_meta($post->ID, 'twitter', true); ?>"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
								<li><a href="<?php echo get_post_meta($post->ID, 'facebook', true); ?>"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
							</ul>
						</div>
						<div class="col-lg-4">
							<div class="adress">
								<span><?php echo get_field("address"); ?></span>
								<a href="#"><?php echo get_post_meta($post->ID, 'phone', true); ?></a>
							</div>
						</div>
						<div class="col-lg-3">
							<div class="mail">
								<a href="#callback-form"><span><?php echo get_field("text"); ?></span></a>
								<i class="fa fa-envelope-o" aria-hidden="true"></i>
							</div>
						</div>
						<?php endwhile; endif; wp_reset_query(); ?>
						
						<div class="col-lg-3 col-xs-8">
							<!-- флаги -->
							<?php qtranxf_generateLanguageSelectCode($type='image'); ?>
							<!-- флаги -->
						</div>
					</div>
				</div>
			</div>
			<nav class="navbar">
				<div class="container">
					<div class="navbar-header">
						<button type="button" class="navbar-toggle" data-breakpoint="1000px" data-toggle="collapse" data-target="#myNavbar">
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>

						<a class="navbar-brand" href="/"><img class="logo" src="<?php
							require_once 'wp-content/plugins/qtranslate-x/qtranslate_compatibility.php'; 
									$currentLang = qtranxf_getLanguage();
							if ($currentLang == 'ru'){
										echo "http://www.snails-house.com/wp-content/themes/snail/build/images/logo-heder.svg";
								} 
							elseif ($currentLang == 'pl'){
										echo "http://www.snails-house.com/wp-content/themes/snail/build/images/logo-heder.svg";
								
								} 
							elseif ($currentLang == 'fr'){
										echo "http://www.snails-house.com/wp-content/themes/snail/build/images/logo-heder.svg";
								
							} 
							elseif ($currentLang == 'it'){
									echo "http://www.snails-house.com/wp-content/themes/snail/build/images/logo-heder.svg";
							
							} 
							elseif ($currentLang == 'es'){
									echo "http://www.snails-house.com/wp-content/themes/snail/build/images/logo-heder.svg";
							
							} 
							elseif ($currentLang == 'de'){
									echo "http://www.snails-house.com/wp-content/themes/snail/build/images/logo-heder.svg";
							
							} 
							elseif ($currentLang == 'en'){
									echo "http://www.snails-house.com/wp-content/themes/snail/build/images/logo-heder.svg";
							
							} ?>" alt="alt">
						</a>

					</div>
					<div class="collapse navbar-collapse" id="myNavbar">
						<?php /* Primary navigation */
							wp_nav_menu( array(
								'menu' => 'top_menu',
								'depth' => 2,
								'container' => false,
								'menu_class' => 'nav navbar-nav navbar-right',
								//Process nav menu using our custom nav walker
								'walker' => new wp_bootstrap_navwalker())
								);
							?>
					</div>
				</div>
			</nav>
		</header>