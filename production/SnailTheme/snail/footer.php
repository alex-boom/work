		<footer class="footer">
			<div class="container">
				<div class="row">
					<?php
					$idObj = get_category_by_slug('footer');
					$id = $idObj->term_id; 

					if ( have_posts() ) : query_posts('cat=' . $id);
					while (have_posts()) : the_post(); ?>

					<div class="col-md-4">
						<div class="head">
							<span><?php echo get_field("title-1"); ?></span>
						</div>
						<p><?php echo get_field("e-mail"); ?></p>
					</div>
					<div class="col-md-4">
						<div class="head">
							<span><?php echo get_field("title-2"); ?></span>
						</div>
						<p><?php echo get_field("text"); ?></p>
					</div>
					<div class="col-md-4">
						<div class="head">
							<span><?php echo get_field("title-3"); ?></span>
						</div>
						<p><?php echo get_field("address"); ?></p>
					</div>
				<?php endwhile; endif; wp_reset_query(); ?>
				</div>
			</div>
			<i class="fa fa-angle-up"></i>
		</footer>
		<!-- preloader -->
		<div id="before-load">
			<i class="fa fa-spinner fa-spin"></i>
		</div>
		<!-- preloader -->
	</div>
	<script>var urlMail = "<?php echo get_template_directory_uri(); ?>/mail.php";</script>
	<script src="<?php echo get_template_directory_uri(); ?>/build/vendor.js"></script>
	<script src="<?php echo get_template_directory_uri(); ?>/build/app.js"></script>
	<?php wp_footer(); ?>
</body>
</html>