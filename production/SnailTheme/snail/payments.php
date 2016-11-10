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
 * Template Name: Payments
 */

get_header(); ?>

	<div id="payments">
		<main class="main">
			<section>
				<article>
					<div class="container">
						<div class="row">
							<div class="post-payment">

								<?php while ( have_posts( ) ) : the_post(); ?>

								<div class="col-md-12 text-left"><h3><?php the_title(); ?></h3></div>
								<div class="col-md-12">
									<?php the_content(); ?>
								</div>
							</div>
						</div>
						
						<?php endwhile; ?>
						
					</div>
				</article>
			</section>
		</main>
	</div>

<?php get_footer(); ?>
