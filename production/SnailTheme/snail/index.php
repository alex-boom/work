<?php get_header(); ?>

		<main class="main">
			<section id="about" class="section-top">

				<?php
					$idObj = get_category_by_slug('banner');
					$id = $idObj->term_id; 

					if ( have_posts() ) : query_posts('cat=' . $id);
					while (have_posts()) : the_post(); ?>

				<?php the_post_thumbnail(); ?>
				<div class="head"><?php the_content(); ?></div>
				<?php endwhile; endif; wp_reset_query(); ?>
				
			</section>
			<article class="article">
				<div class="container">
					<div class="row">

						<?php
						$idObj = get_category_by_slug('section-second');
						$id = $idObj->term_id;

						if ( have_posts() ) : query_posts('cat=' . $id);
						while (have_posts()) : the_post(); ?>

						<div class="col-md-6 col-sm-12 holder">

							<img class="logo-article" src="<?php
								require_once 'wp-content/plugins/qtranslate-x/qtranslate_compatibility.php'; 
										$currentLang = qtranxf_getLanguage();
								if ($currentLang == 'ru'){
											echo "http://www.snails-house.com/wp-content/themes/snail/build/images/logo.svg";
									} 
								elseif ($currentLang == 'pl'){
											echo "http://www.snails-house.com/wp-content/themes/snail/build/images/logo.svg";
									
									} 
								elseif ($currentLang == 'fr'){
											echo "http://www.snails-house.com/wp-content/themes/snail/build/images/logo.svg";
									
								} 
								elseif ($currentLang == 'it'){
										echo "http://www.snails-house.com/wp-content/themes/snail/build/images/logo.svg";
								
								} 
								elseif ($currentLang == 'es'){
										echo "http://www.snails-house.com/wp-content/themes/snail/build/images/logo.svg";
								
								} 
								elseif ($currentLang == 'de'){
										echo "http://www.snails-house.com/wp-content/themes/snail/build/images/logo.svg";
								
								}
								elseif ($currentLang == 'en'){
										echo "http://www.snails-house.com/wp-content/themes/snail/build/images/logo.svg";
								
								} ?>" alt="alt">

						</div>

						<div class="col-md-6 col-sm-12">
							<?php the_content(); ?>
						</div>
						<?php endwhile; endif; wp_reset_query(); ?>
					</div>
				</div>
			</article>
			<section id="article" class="section-aticles">
				<div class="heading">
					<h2><?php
					$idObj = get_category_by_slug('articles');
					$id = $idObj->term_id;
					echo get_cat_name($id);?></h2>
				</div>
				<div class="container">
					<div class="row">

					<?php if ( have_posts() ) : query_posts('cat=' . $id);
						while (have_posts()) : the_post(); ?>

						<div class="col-md-4">
							<div class="item">
								<div class="holder">
									<?php the_post_thumbnail(); ?>
								</div>
								<h3 class="item-head <?php echo get_post_meta($post->ID, 'class', true); ?>"><?php the_title(); ?></h3>
								<?php the_content(); ?>
								<a href="<?php echo get_post_meta($post->ID, 'link-full-article', true); ?>" class="btn"><span><?php echo __('[:ru]читать дальше[:fr]lire la suite[:pl]czytaj więcej[:it]Per saperne di più[:es]leer más[:de]weiterlesen[:en]read more'); ?></span></a>
							</div>
						</div>
						<?php endwhile; endif; wp_reset_query(); ?>
					</div>
				</div>
				<div class="box-banner">
				<?php
					$idObj = get_category_by_slug('banner-2');
					$id = $idObj->term_id; 

					if ( have_posts() ) : query_posts('cat=' . $id);
					while (have_posts()) : the_post(); ?>

					<?php the_post_thumbnail(); ?>
					<div class="banner">
						<i class="fa fa-star blue" aria-hidden="true"></i>
						<i class="fa fa-star blue" aria-hidden="true"></i>
						<i class="fa fa-star white" aria-hidden="true"></i>
						<i class="fa fa-star red" aria-hidden="true"></i>
						<i class="fa fa-star red" aria-hidden="true"></i>
						<?php the_content(); ?>
						<i class="fa fa-star bott blue" aria-hidden="true"></i>
						<i class="fa fa-star bott blue" aria-hidden="true"></i>
						<i class="fa fa-star bott white" aria-hidden="true"></i>
						<i class="fa fa-star bott red" aria-hidden="true"></i>
						<i class="fa fa-star bott red" aria-hidden="true"></i>
					</div>
					<?php endwhile; endif; wp_reset_query(); ?>
				</div>
			</section>
			<section id="product" class="section-product">
				<div class="heading">
					<h2><?php
					$idObj = get_category_by_slug('product');
					$id = $idObj->term_id;
					echo get_cat_name($id);?></h2>
				</div>
				<div class="container">
					<div class="row">

					<?php if ( have_posts() ) : query_posts('cat=' . $id);
						while (have_posts()) : the_post(); ?>

						<div class="col-md-4">
							<div class="item-product">
								<?php the_post_thumbnail(); ?>
								<h3 class="item-head"><?php remove_filter('the_content', 'wpautop');?> <?php the_content(); ?></h3>
								<a href="<?php echo get_post_meta($post->ID, 'link', true); ?>" class="btn"><span><?php echo __('[:ru]подробнее[:fr]plus[:pl]więcej[:it]più[:es]más[:de]mehr[:en]more'); ?></span></a>
							</div>
						</div>

						<?php endwhile; endif; wp_reset_query(); ?>

					</div>
				</div>

			</section>
			<section id="payment" class="section-payment">
				<div class="heading">
					<h2><?php
					$idObj = get_category_by_slug('payment');
					$id = $idObj->term_id;
					echo get_cat_name($id);?></h2>
				</div>
				<div class="parallax"></div>
				<div class="holder">

					<div class="box-payment">
						<div class="container">
							<div class="row">

								<?php	if ( have_posts() ) : query_posts('cat=' . $id);
								while (have_posts()) : the_post(); ?>

								<div class="col-md-6">
									<div class="item">
										<div class="holder">
											<img src="<?php echo get_template_directory_uri(); ?>/build/images/<?php echo get_post_meta($post->ID, 'svg', true); ?>" alt="alt">
										</div>
										<h3 class="item-head"><?php the_title(); ?></h3>
										<p><?php the_content(); ?></p>
										<a href="<?php echo get_post_meta($post->ID, 'link-full-article', true); ?>" class="btn"><span><?php echo __('[:ru]подробнее[:fr]davantage[:pl]więcej[:it]più[:es]más[:de]mehr[:en]more'); ?></span></a>
									</div>
								</div>

								<?php endwhile; endif; wp_reset_query(); ?>
							</div>
						</div>
					</div>
				</div>
				<div class="parallax edit"></div>

				<div class="box-banner">
					<?php
					$idObj = get_category_by_slug('banner-3');
					$id = $idObj->term_id; 

					if ( have_posts() ) : query_posts('cat=' . $id);
					while (have_posts()) : the_post(); ?>

					<div class="banner">
						<?php the_content(); ?>
					</div>

					<?php endwhile; endif; wp_reset_query(); ?>
				</div>
			</section>
			<section id="contact" class="section-contact">
				<div class="heading">
					<h2><?php
					$idObj = get_category_by_slug('contact');
					$id = $idObj->term_id;
					echo get_cat_name($id);?></h2>
				</div>
				<div class="container">
					<div class="row">

					<?php if ( have_posts() ) : query_posts('cat=' . $id);
					while (have_posts()) : the_post(); ?>

						<form id="callback-form" class="forms form-horizontal">
							<div class="col-lg-6 col-md-12">
								<div class="head">
									<h3><?php the_title(); ?></h3>
									<p><?php the_content(); ?></p>
								</div>
								
								<div class="form-group">
									<input type="text" class="form-control" name="userName" placeholder="<?php echo __('[:ru]ВАШЕ ИМЯ*:[:fr]VOTRE NOM *:[:pl]IMIĘ I NAZWISKO *:[:it]IL TUO NOME *:[:es]SU NOMBRE *:[:de]IHR NAME*:[:en]YOUR NAME*:'); ?>">
								</div>
								<div class="form-group">
									<input type="text" class="form-control" name="email" placeholder="E-MAIL*:">
								</div>
								<div class="form-group">
									<input type="text" class="form-control" name="phone" placeholder="<?php echo __('[:ru]ТЕЛЕФОН:[:fr]TÉLÉPHONE:[:pl]TELEFON:[:it]TELEFONO:[:es]TELÉFONO:[:de]TELEFON:[:en]PHONE:'); ?>">
								</div>
							</div>
							<div class="col-lg-6 col-md-12">
								<div class="form-group">
										<textarea class="form-control textarea" name="textarea" placeholder="<?php echo __('[:ru]СООБЩЕНИЕ:[:fr]NOW:[:pl]WIADOMOŚĆ:[:it]SOCIETÀ:[:es]EMPRESA:[:de]JETZT:[:en]MESSAGE:'); ?>"></textarea>
										<input type="hidden" name="formname" value="Нижняя форма Контакты">
								</div>
							</div>
							<div class="col-md-12">
								<div class="form-group text-right">
									<button type="submit" class="btn"><?php echo __('[:ru]отправить[:fr]envoyer[:pl]wysłać[:it]inviare[:es]para enviar[:de]senden[:en]send'); ?></button>
								</div>
							</div>
						</form>
						<?php endwhile; endif; wp_reset_query(); ?>
					</div>
				</div>
			</section>
		</main>

<?php get_footer(); ?>
