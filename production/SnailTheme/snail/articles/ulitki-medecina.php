<?php
/**
 * The template for displaying pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages and that
 * other "pages" on your WordPress site will use a different template.
 *
 * @package WordPress
 * @subpackage Snail
 * @since Snail 1.0
 * Template Name: Ulitki-medecina
 */

get_header(); ?>

		<main class="main">
			<section id="article" class="section-aticles">

				<?php
				$idObj = get_category_by_slug('ulitki-medecina');
				$id = $idObj->term_id; 

				if ( have_posts() ) : query_posts('cat=' . $id);
				while ( have_posts( ) ) : the_post(); ?>

				<article class="article page-article">
					<div class="container">
						<div class="row">
							<div class="col-md-12 text-left"><h3><?php the_title(); ?></h3></div>
							<div class="col-md-6 col-sm-12">
								<?php the_content(); ?>
							</div>
							<div class="col-md-6 col-sm-12"><?php the_post_thumbnail(); ?></div>
						</div>
					</div>
				</article>

				<?php endwhile; endif; wp_reset_query(); ?>

			</section>
		</main>

<?php get_footer(); ?>