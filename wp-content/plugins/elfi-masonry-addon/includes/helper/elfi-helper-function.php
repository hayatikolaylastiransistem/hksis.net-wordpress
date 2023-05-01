<?php

	 function elfi_light_cat_type_portfolio(){

		$el_categories = get_terms(array (
			'taxonomy' => 'el_portfolio',

			'hide_empty' => true,
		));

		$el_cat_value = array();
		foreach ($el_categories as $el_category) {


			$el_cat_value[$el_category->term_id] = $el_category->name;

		}


		return $el_cat_value;



	}


		function elfi_light_selct_post_type(){



		$excluded_posttypdes=array('attachment','revision','nav_menu_item','custom_css','customize_changeset','oembed_cache','user_request','wp_block','scheduled-action','product_variation','shop_order','shop_order_refund','shop_coupon','page','elementor_library','e-landing-page','post','elfi');

		$gdtypes = get_post_types();
		$cpost_types = array_diff($gdtypes, $excluded_posttypdes);

		$el_post_value = array();
		foreach ($cpost_types as $post) {

		$post_type_title = get_post_type_object($post);
		$el_post_value['post'] = 'Posts';
		$el_post_value['elfi'] = 'Elfi Masonry';
		$el_post_value[$post] = $post_type_title
		->labels->name . '(Pro)';

		}

		return $el_post_value;

		}










	function elfi_light_cat_portfolio_not_in(){

	$args = [
	  'post_type'=>'elfi',
	  'posts_per_page' => -1,
	];

	$posts = get_posts($args);


	$el_post_value = array();
	foreach ($posts as $post) {


		$el_post_value[$post->ID] = $post->post_title;

	}


	return $el_post_value;


	}

	function elfi_light_post_not_in(){

	$args = [
	  'post_type' => 'post',
	  'posts_per_page' => -1,
	];

	$posts = get_posts($args);


	$el_post_value = array();
	foreach ($posts as $post) {


		$el_post_value[$post->ID] = $post->post_title;

	}


	return $el_post_value;


	}

			function elfi_light_cat_type_post(){

			$el_categories = get_terms(array (
				'taxonomy' => 'category',
				'hide_empty' => true,
			));

			$el_cat_value = array();
			foreach ($el_categories as $el_category) {


				$el_cat_value[$el_category->term_id] = $el_category->name;
			}

			return $el_cat_value;
		}


			function elfi_light_title(){
			$title = get_the_title(get_the_ID());
			if (strlen($title) > 13) {
			$get_title = substr($title, 0, 13). '...';
			} else {
			$get_title = $title;
			}
			
		return $get_title;
		}


			function elfi_light_post_thumbnail(){

				if(has_post_thumbnail(get_the_id())){

				$elfi_thumnai  = get_the_post_thumbnail_url(get_the_id());
				}else{
					$default_image = ELFI_DIR_LIGHT.'elementor/assets/images/placeholder.png';
				$elfi_thumnai = $default_image; 	
				}
				return $elfi_thumnai ;
			}
			function elfi_light_alt_text(){

					if(has_post_thumbnail(get_the_id())){

					$elfi_light_alt_text = get_post_meta (get_post_thumbnail_id(), '_wp_attachment_image_alt', true );

						if(!empty($elfi_light_alt_text)){
							$elfi_light_alt_text = $elfi_light_alt_text;
						}else{
							$elfi_light_alt_text = get_the_title();

						}

					}else{

					$elfi_light_alt_text = 'default-image';	
					}
					return $elfi_light_alt_text ;
				}


			function elfi_light_excerpt_length($length){

			$excerpt_length = $length;
			$excerpt = get_the_content();
			$excerpt = preg_replace(" ([.*?])",'',$excerpt);
			$excerpt = strip_shortcodes($excerpt);
			$excerpt = strip_tags($excerpt);
			$excerpt = substr($excerpt, 0, $excerpt_length);
			$excerpt = substr($excerpt, 0, strripos($excerpt, " "));


			return $excerpt;
		}


			function elfi_light_comments_count(){

			$commetts_count = get_comments_number(get_the_ID());
			if($commetts_count<= 1){
			 $commetts_ = 'comment';
			}else{
				$commetts_ = 'comments';
			}
			$comment_hit = $commetts_count . '' .$commetts_;

			return $comment_hit;
		}



			function elfi_light_default(){

				$default_image = ELFI_DIR_LIGHT.'elementor/assets/images/placeholder.png';
					$html = '<div class="demo">
				<img src="'.esc_url($default_image).'"  class="grid-item" alt="default-image">
				<img src="'.esc_url($default_image).'"  class="grid-item" alt="default-image">
				<img src="'.esc_url($default_image).'"  class="grid-item" alt="default-image">
				<img src="'.esc_url($default_image).'"  class="grid-item" alt="default-image">
				<img src="'.esc_url($default_image).'"  class="grid-item" alt="default-image">
				<img src="'.esc_url($default_image).'"  class="grid-item" alt="default-image">

				</div>';
				return $html;
			}

			function elfi_light_control_style($settings ,$rand_type){

			 ?>
				<style type="text/css">
				
			<?php  if($settings['display_readmore'] == 'yes'){ if( !empty($settings['readmore_align']) || !empty($settings['readmore_spacing'])){ ?>

				.elfi-filter-wrapper-<?php echo esc_html($rand_type) ?>  .elfi_readmore{
				  text-align: <?php echo esc_html($settings['readmore_align']); ?> ;
				  margin-top:<?php echo $settings['readmore_spacing']['unit'] . $settings['readmore_spacing']['size']  ?>;
				}

				<?php } } if( $settings['btn_mobile'] == 'yes'){ ?>

			@media (max-width:768px){
			.elfi-filter-wrapper-<?php echo esc_html($rand_type) ?>   .elfi-filter-nav ul{
					text-align: center;
				}
				.elfi-filter-wrapper-<?php echo esc_html($rand_type) ?>     .elfi-filter-nav ul li {
					text-align: center;
				    display: block;
				    margin:20px 0;
				}
				.elfi-filter-wrapper-<?php echo esc_html($rand_type) ?>    .active.hover_one::before, .active.hover_one::after {
					width: 20%;
					left: 41%;
					right: 0;
				}
				.elfi-filter-wrapper-<?php echo esc_html($rand_type) ?> .hover_two {
					left: 50%;
					transform: translate(-50%,0%);
				}
				.elfi-filter-wrapper-<?php echo esc_html($rand_type) ?>  .hover_six,.hover_seven,li.hover_nine.type1{
					width: 20%;
					left: 50%;
					position: relative;
					transform: translate(-50%);
				}
			.elfi-filter-wrapper-<?php echo esc_html($rand_type) ?>    li.hover_nine.type1{
					width: 45%;
				}
				}
				<?php } ?>
				a.elfi-free-item__link {
    				text-decoration: none !important;
				}
				</style>

				<?php 

			return $settings;



			}

			function elfi_light_fnc_style($settings){



			if($settings['grid_style'] == 'portfolio_wrap_one'){

				$elfi_iframe_link = 'https://elfi.sharabindu.com/wp/style-one';
			}

			if($settings['grid_style'] == 'portfolio_wrap_two'){

				$elfi_iframe_link = 'https://elfi.sharabindu.com/wp/style-two';
			}


			if($settings['grid_style'] == 'portfolio_wrap_three'){

				$elfi_iframe_link = 'https://elfi.sharabindu.com/wp/style-three';
			}

			if($settings['grid_style'] == 'portfolio_wrap_four'){

				$elfi_iframe_link = 'https://elfi.sharabindu.com/wp/style-four';
			}

			if($settings['grid_style'] == 'portfolio_wrap_five'){

				$elfi_iframe_link = 'https://elfi.sharabindu.com/wp/style-five';
			}

			if($settings['grid_style'] == 'portfolio_wrap_six'){

				$elfi_iframe_link = 'https://elfi.sharabindu.com/wp/style-six';
			}

			if($settings['grid_style'] == 'portfolio_wrap_seven'){

				$elfi_iframe_link = 'https://elfi.sharabindu.com/wp/style-seven';
			}

			if($settings['grid_style'] == 'portfolio_wrap_eight'){

				$elfi_iframe_link = 'https://elfi.sharabindu.com/wp/style-eight';
			}

			if($settings['grid_style'] == 'portfolio_wrap_nine'){

				$elfi_iframe_link = 'https://elfi.sharabindu.com/wp/style-nine';
			}
			if($settings['grid_style'] == 'portfolio_wrap_ten'){

				$elfi_iframe_link = 'https://elfi.sharabindu.com/wp/style-ten';
			}

			if($settings['grid_style'] == 'portfolio_wrap_one' || $settings['grid_style'] == 'portfolio_wrap_two'|| $settings['grid_style'] == 'portfolio_wrap_three'|| $settings['grid_style'] == 'portfolio_wrap_four'|| $settings['grid_style'] == 'portfolio_wrap_five'|| $settings['grid_style'] == 'portfolio_wrap_six'|| $settings['grid_style'] == 'portfolio_wrap_seven'|| $settings['grid_style'] == 'portfolio_wrap_eight'|| $settings['grid_style'] == 'portfolio_wrap_nine'|| $settings['grid_style'] == 'portfolio_wrap_ten' ){
				echo '<div class="elfi_woo_dem"><h2>'.esc_html__('Pro Demo for Product Filter','wlfi-masonry-addon').'</h2><iframe src="'.$elfi_iframe_link.'" width="1280px" height="600px" title="Iframe Example" id="Iframe"></iframe></div>';

			}

			if(class_exists('WooCommerce')){
			if($settings['elfi_post_type'] == 'product' ){

			echo '<div class="elfi_woo_dem"><h2>'.esc_html__('Pro Demo for Product Filter','elfi-masonry-addon').'</h2><iframe src="https://elfi.sharabindu.com/wp/product-mspnry-iframe/" width="1280px" height="600px" title="Iframe Example" id="Iframe"></iframe></div>';
			
				}
			}


			return;
	}




