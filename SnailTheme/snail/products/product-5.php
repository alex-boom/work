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
 * Template Name: Product-5
 */

get_header(); ?>


		<div id="page-product">
			<main class="main">
				<section id="product" class="section-product">
					<div class="container">
						<div class="row edit-btn">
							<div class="col-lg-2"><a href="/sleeping-snail" class="btn btn-product"><?php echo __('[:ru]спящие улитки[:fr]dorm. lescar.[:pl]uśpione ślim.[:it]dormienti l-a[:es]los caracoles[:de]schlafende[:en]dormant sn-s'); ?></a></div>
							<div class="col-lg-2"><a href="/cooked-snails" class="btn btn-product"><?php echo __('[:ru]готовые улитки[:fr]prêt l-got[:pl]gotowe[:it]pronti[:es]listo[:de]bereit[:en]ready'); ?></a></div>
							<div class="col-lg-2"><a href="/canned" class="btn btn-product"><?php echo __('[:ru]консервы[:fr]conserves[:pl]konserwy[:it]scatola[:es]conservas[:de]Konserven[:en]canned'); ?></a></div>
							<div class="col-lg-2"><a href="/frozen-snails" class="btn btn-product"><?php echo __('[:ru]замороженные[:fr]congelés[:pl]mrożone[:it]congelati[:es]congelados[:de]gefroren[:en]frozen'); ?></a></div>
							<div class="col-lg-2"><a href="/snail-caviar" class="btn btn-product active-link"><?php echo __('[:ru]икра улиток[:fr]caviar[:pl]kawior[:it]caviale[:es]el caviar[:de]Kaviar[:en]caviar'); ?></a></div>
							<div class="col-lg-2"><a href="/slime-snails" class="btn btn-product"><?php echo __('[:ru]слизь улиток[:fr]le mucilage[:pl]śluz[:it]il muco[:es]el moco[:de]Schleim[:en]mucus'); ?></a></div>
						</div>
						<div class="row">

				<?php
					$idObj = get_category_by_slug('product-5');
					$id = $idObj->term_id; 

					if ( have_posts() ) : query_posts('cat=' . $id);
					while (have_posts()) : the_post(); ?>


							<div class="col-lg-4 col-md-12 edit">
								<div class="item-product">
								<h3 class="item-head"><?php remove_filter('the_content', 'wpautop');?> <?php the_content(); ?></h3>
									<?php the_post_thumbnail(); ?>

									<?php echo get_field("characteristic"); ?>

									<button type="button" data-toggle="modal" data-target="<?php echo get_post_meta($post->ID, 'modal', true); ?>" class="btn"><span><?php echo __('[:ru]заказать[:fr]Commander[:pl]Na zamówienie[:it]Su ordinazione[:es]Para ordenar[:de]bestellen[:en]order'); ?></span></button>
								</div>
							</div>

						<?php endwhile; endif; wp_reset_query(); ?>

						</div>
					</div>
				<!-- Modal form-1-->
				<div class="modal fade closes" id="myModal-13" role="dialog">
					<div class="modal-dialog modal-sm">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal">&times;</button>
								<h4 class="modal-title"><?php echo __('[:ru]Икра улитки[:fr]Grape<br>snail[:pl]Grape<br>ślimak[:it]Uva<br>lumaca[:es]Caracol<br>de la uva[:de]Druiven<br>slak[:en]Druiven<br>slak'); ?></h4>
							</div>
							<div class="modal-body">

								<form class="form form-hidden">
									<div class="form-group">
										<input type="number" class="form-control" name="number" placeholder="<?php echo __('[:ru]ВВЕДИТЕ КОЛИЧЕСТВО:[:fr]Entrez le numéro de:[:pl]Podaj liczbę:[:it]Inserire il numero di:[:es]Introduce el número de:[:de]Geben Sie die Nummer:[:en]Enter the number of:'); ?>">
										<input type="text" class="form-control" name="userName" placeholder="<?php echo __('[:ru]ВАШЕ ИМЯ*:[:fr]Votre nom *:[:pl]Imię i nazwisko *:[:it]Il tuo nome *:[:es]Su nombre *:[:de]IHR NAME*:[:en]YOUR NAME*:'); ?>">
										<input type="text" class="form-control" name="phone" placeholder="<?php echo __('[:ru]ТЕЛЕФОН:[:fr]TÉLÉPHONE:[:pl]TELEFON:[:it]TELEFONO:[:es]TELÉFONO:[:de]TELEFON:[:en]PHONE:'); ?>">
										<input type="hidden" name="formname" value="Икра улитки">
										<button class="btn-small"><span><?php echo __('[:ru]ЗАКАЗАТЬ[:fr]Commander[:pl]Na zamówienie[:it]Su ordinazione[:es]Para ordenar[:de]bestellen[:en]order'); ?></span></button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<!-- Modal form-1-->
				<!-- Modal form-2-->
				<div class="modal fade closes" id="myModal-14" role="dialog">
					<div class="modal-dialog modal-sm">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal">&times;</button>
								<h4 class="modal-title"><?php echo __('[:ru]Икра улитки[:fr]Snail<br>Achatina[:pl]Ślimak<br>Achatina[:it]Lumaca<br>Achatina[:es]Caracol<br>Achatina[:de]Slak<br>Achatina[:en]Slak<br>Achatina'); ?></h4>
							</div>
							<div class="modal-body">
								<form class="form form-hidden">
									<div class="form-group">
										<input type="number" class="form-control" name="number" placeholder="<?php echo __('[:ru]ВВЕДИТЕ КОЛИЧЕСТВО:[:fr]Entrez le numéro de:[:pl]Podaj liczbę:[:it]Inserire il numero di:[:es]Introduce el número de:[:de]Geben Sie die Nummer:[:en]Enter the number of:'); ?>">
										<input type="text" class="form-control" name="userName" placeholder="<?php echo __('[:ru]ВАШЕ ИМЯ*:[:fr]Votre nom *:[:pl]Imię i nazwisko *:[:it]Il tuo nome *:[:es]Su nombre *:[:de]IHR NAME*:[:en]YOUR NAME*:'); ?>">
										<input type="text" class="form-control" name="phone" placeholder="<?php echo __('[:ru]ТЕЛЕФОН:[:fr]TÉLÉPHONE:[:pl]TELEFON:[:it]TELEFONO:[:es]TELÉFONO:[:de]TELEFON:[:en]PHONE:'); ?>">
										<input type="hidden" name="formname" value="Икра улитки">
										<button class="btn-small"><span><?php echo __('[:ru]ЗАКАЗАТЬ[:fr]Commander[:pl]Na zamówienie[:it]Su ordinazione[:es]Para ordenar[:de]bestellen[:en]order'); ?></span></button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<!-- Modal form-2-->
				<!-- Modal form-3-->
				<div class="modal fade closes" id="myModal-15" role="dialog">
					<div class="modal-dialog modal-sm">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal">&times;</button>
								<h4 class="modal-title"><?php echo __('[:ru]Икра улитки[:fr]Snail Promotions[:pl]Slimak Specials[:it]Snail Speciali[:es]Caracol Especiales[:nl]Slak Specials'); ?></h4>
							</div>
							<div class="modal-body">
								<form class="form form-hidden">
									<div class="form-group">
										<input type="number" class="form-control" name="number" placeholder="<?php echo __('[:ru]ВВЕДИТЕ КОЛИЧЕСТВО:[:fr]Entrez le numéro de:[:pl]Podaj liczbę:[:it]Inserire il numero di:[:es]Introduce el número de:[:de]Geben Sie die Nummer:[:en]Enter the number of:'); ?>">
										<input type="text" class="form-control" name="userName" placeholder="<?php echo __('[:ru]ВАШЕ ИМЯ*:[:fr]Votre nom *:[:pl]Imię i nazwisko *:[:it]Il tuo nome *:[:es]Su nombre *:[:de]IHR NAME*:[:en]YOUR NAME*:'); ?>">
										<input type="text" class="form-control" name="phone" placeholder="<?php echo __('[:ru]ТЕЛЕФОН:[:fr]TÉLÉPHONE:[:pl]TELEFON:[:it]TELEFONO:[:es]TELÉFONO:[:de]TELEFON:[:en]PHONE:'); ?>">
										<input type="hidden" name="formname" value="Икра улитки">
										<button class="btn-small"><span><?php echo __('[:ru]ЗАКАЗАТЬ[:fr]Commander[:pl]Na zamówienie[:it]Su ordinazione[:es]Para ordenar[:de]bestellen[:en]order'); ?></span></button>
									</div>
								</form>

							</div>
						</div>
					</div>
				</div>
				<!-- Modal form-3-->
				<!-- Modal send-->
				<div class="modal fade" id="send" role="dialog">
					<div class="modal-dialog modal-sm">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal">&times;</button>
								<h4 class="modal-title"><?php echo __('[:ru]Ваш заказ успешно отправлен[:fr]Votre commande a été envoyé avec succès[:pl]Twoje zamówienie zostało wysłane pomyślnie[:it]Il tuo ordine è stato inviato con successo[:es]Su pedido ha sido enviado con éxito[:de]Ihre Bestellung wurde erfolgreich gesendet[:en]Your order has been successfully sent'); ?></h4>
							</div>
						</div>
					</div>
				</div>
				<!-- Modal send-->
				</section>
			</main>
		</div>

<?php get_footer(); ?>