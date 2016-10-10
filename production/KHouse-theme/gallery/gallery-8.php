<?php
/**
 * The template for displaying pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages and that
 * other "pages" on your WordPress site will use a different template.
 *
 * @package WordPress
 * @subpackage KHouse
 * @since KHouse 1.0
 * Template Name: Gallery-8
 */

get_header(); ?>

	<div id="gallery-8" class="gallery">
		<main id="main" class="site-main" role="main">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
	

					<?php while ( have_posts( ) ) : the_post(); ?>
						<?php the_content(); ?>
					<?php endwhile; ?>
					


					</div>
				</div>
			</div>
		</main><!-- .site-main -->
	</div><!-- .content-area -->

<?php get_footer(); ?>
