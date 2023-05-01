<?php
/**
 * The file that defines the bulk print admin area
 *
 * public-facing side of the site and the admin area.
 *
 * @link       https://sharabindu.com
 * @since      1.0.7
 *
 * @package    elfi-masonry-addon_pro
 * @subpackage elfi-masonry-addon_pro/admin
 */

class Elfi_admin_dashborad_Light
{

    public function __construct()
    {

        add_action('admin_menu', array(
            $this,
            'admin_menu_define'
        ));

        add_action("admin_enqueue_scripts",array(
            $this, 'enqueue_styles' ));
        add_action('admin_init', array(
            $this,'elfi_plugin_redirect'));


        add_filter( 'plugin_action_links_' . ELFI_BASENAME_LIGHT, array(
            $this,'add_action_links' ));



    }
    public function elfi_plugin_redirect() {

    if (get_option('elfi_plugin_do_activation_redirect', false)) {
        delete_option('elfi_plugin_do_activation_redirect');
        if(!isset($_GET['activate-multi']))
        {
            wp_redirect("edit.php?post_type=elfi&page=home");
        }
     }
    }



    public function add_action_links($links)
    {

        return array_merge(array(
            '<a class="yhow_yse" href="' . admin_url('edit.php?post_type=elfi&page=home') . '">' . __('How To Use', 'yoo-bar') . '</a>',
            '<a class="elfi_pro_link" href="https://sharabindu.com/plugins/elfi/">' . __('Go Pro', 'yoo-bar') . '</a>',
        ) , $links);

    }



    public function enqueue_styles()
    {
    wp_enqueue_style('google-font', ELFI_URL_LIGHT . '/assets/fonts/stylesheet.css', array() , "3.1", 'all');
    wp_enqueue_style('elfi-admin-settings', ELFI_URL_LIGHT . '/assets/css/elfi-admin-settings.css', array() , "3.1", 'all');
}

    function elfi__settting_func()
    {

        return;
    }

    public function admin_menu_define()
    {

        add_submenu_page('edit.php?post_type=elfi', __('Home', 'menu-test') , __('Home', 'menu-test') , 'manage_options', 'home', array(
            $this,
            'how_to_use'
        ));

    }

    function how_to_use()
    {

?>

     <div class="yoobaradmin__codewrap">
      <div class="yooba_wp_admin">
         <ul class="yoobaradmin__nav_bar">
            <li><a href="https://elfi.sharabindu.com/wp/" target="_blank"><?php echo esc_html('View Demo', 'elfi-masonry-addon') ?></a></li>
            <li><a href="https://elfi.sharabindu.com/wp/docs/introduction/" target="_blank"><?php echo esc_html('Docs', 'elfi-masonry-addon') ?></a></li>
            <li><a href="https://sharabindu.com/live-chat/" target="_blank"><?php echo esc_html('Live Chat', 'elfi-masonry-addon') ?></a></li>
            <li><a href="https://sharabindu.com/plugins/" target="_blank"><?php echo esc_html('More Plugin', 'elfi-masonry-addon') ?></a></li>
            <li><a href="https://sharabindu.com/plugins/elfi/" target="_blank"><?php echo esc_html('Get Licence', 'elfi-masonry-addon') ?></a></li>
         </ul>

      </div>
        <div class="tirmoof" >
          <div class="yoobar_howku" style="background:#fff;background-size:cover;width:100%;">
          <ul  class="yoobaradmin__hdaer_cnt">
             <li> 
              
              <img src=" <?php echo ELFI_URL_LIGHT . '/assets/img/logo.png' ?>" alt="elfi logo"></li>
             <li  class="yoobaradmin__fd_cnt">
              <h3 style="color:#fff"><?php echo esc_html('ELFI - V:', 'elfi-masonry-addon') . ' ' . ELFI_VERSION_LIGHT; ?> </h3>
                <small><?php echo esc_html('Masonry filter addon for Elementor', 'elfi-masonry-addon') ?></small>
             </li>
          </ul>
          <ul class="thsnlot">
         <li>Thanks a lot</li>   
         <li>for choosing ElFI Masonry Filter</li>   

          </ul>
       </div>


      <div class="yoobar-feature">
        <ul>
          <li class="yoobar-feature_6">
           <img class='yoo_dcs_img' src=" <?php echo ELFI_URL_LIGHT . '/assets/img/docs.svg' ?>"> 
        <h3 class="yoobar-feature-title">How it Works</h3>
        <p class="feature-title18">We have created full documentation for you. It will help you to understand how our plugin works.</p>
        <div>
        <a class="ydocsbutn" href="https://elfi.sharabindu.com/wp/docs/introduction/">Documentation</a>
        </div>
        </li>
        <li><img src=" <?php echo ELFI_URL_LIGHT . '/assets/img/docs-thuink.jpg' ?>"></li>
        </ul>

      </div>

      <div class="yoobar-feature">
        <ul>
          <li class="yoobar-feature_6" style="left:0">
           <img class='yoo_dcs_img' src=" <?php echo ELFI_URL_LIGHT . '/assets/img/tutorial.svg' ?>"> 
        <h3 class="yoobar-feature-title">Video tutorial</h3>
        <p style="width: 130%" class="feature-title18">
      We've created some video tutorials to help you use the plugin more easily</p>

        </li>  
        <li style="width:400px"></li>
        </ul>
        <ul class="yoobartutorial elfidor" id="turoaljhdgf">
          <li>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/XK4sdZkzXx4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h3 class="telatilhead">Elfi for Elementor</h3>
        </li>
        </ul>
      </div>

      <div class="yoobar-feature">
        <ul>
          <li class="yoobar-feature_6 fswr">
           <img class='yoo_dcs_img' src=" <?php echo ELFI_URL_LIGHT . '/assets/img/question.svg' ?>"> 

        <h3 class="yoobar-feature-title">FAQ</h3>
        <p class="feature-title18">Frequently Asked Questions</p>

        <div class="yoofaqdes">
      <h4>Will this addon work on Pro Elementor</h4>
      <p>Yes, it will work on both Pro and free elementor version. Use it to bring colorful moments to your site. And don’t forget to check out our premium features.</p>
      </div>
      <div class="yoofaqdes">
      <h4>Is there any support available for the free users?</h4>
      <p>Both the free and pro versions bring great support from us. However Pro users will get priority support.</p>
      </div>


        </li>
        <li style="width:400px"></li>
        </ul>

      </div>

      <div class="yoobar-feature">
        <ul>
          <li class="yoobar-feature_6" style="text-align: center;">
           <img class='yoo_dcs_img' src=" <?php echo ELFI_URL_LIGHT . '/assets/img/support.svg' ?>"> 

        <h3 class="yoobar-feature-title">Support</h3>
        <p class="feature-title18">Feeling like consulting an expert? Get our live chat support. We are always ready to help you.</p>

        <div>
          <a class="ydocsbutn" href="https://sharabindu.com/contact-us">Get Support</a>
          </div>

        </li>
        <li style="width:400px"></li>
        </ul>

      </div>

      <div class="yoobar-feature">
        <ul>
          <li class="yoobar-feature_6">

        <h3 class="yoobar-feature-title">Missing Any Features</h3>
        <p style="width:90%">Do you need any features that we don't have in our plugin? Let us know Feel free to do a request from here</p>
        <a class="ydocsbutn" href="https://elfi.sharabindu.com/wp/missing-any-features/" style="background: #e2498a">Request Feature</a>
        </li>
        <li><img src=" <?php echo ELFI_URL_LIGHT . '/assets/img/missing.jpg' ?>"></li>

        </ul>

      </div>
      <div class="yoobar-feature">
        <div id="yooshado">
        <ul>

          <li><img src=" <?php echo ELFI_URL_LIGHT . '/assets/img/review.svg' ?>"></li>
          <li class="yoobar-feature_67">

        <h3 class="yoobar-feature-title">Happy with Our Plugin?</h3>
        <p class="feature-title18">We are really grateful that you have chosen our plugin. If you like our plugin, please share your happiness by giving us a 5star rating in WordPress Org.</p>
        <a class="ydocsbutn" href="https://wordpress.org/plugins/elfi-masonry-addon/#reviews">Give us 5*</a>
        </li>
        </ul>
        </div>
      </div>
      </div>
    </div>


    <?php
    }

}

if (class_exists('Elfi_admin_dashborad_Light'))
{
    new Elfi_admin_dashborad_Light;
};

