<?php

/*
Plugin Name: Zeus Admin Theme
Plugin URI: http://gravityux.com/
Description: A simple, clean admin theme with select features to improve your WordPress experience.
Author: Luke Hertzler
Version: 2.1
Author URI: http://gravityux.com/
*/

/*
* Load zeus css/script plugin files
*/

function zeus_admin_files() {
  wp_enqueue_style( 'zeus-admin-theme', plugins_url('css/zeus-admin.css', __FILE__), array(), '1.0' );
}
add_action( 'admin_enqueue_scripts', 'zeus_admin_files' );

/*
* Load admin menu editor
*/
    require 'inc/ajax-admin-menu-editor/ajax-admin-menu-editor.php';

/*
* Load admin menu editor
*/
    require 'inc/hide-admin-menu/init.php';

/*
* Load front-end admin bar toggle
*/

    require 'inc/hide-wp-toolbar/hide-wp-toolbar.php';

/*
* Load back-end search
*/

    require 'inc/jarvis/jarvis.php';

/*
* Create welcome screen on activation
*/

    register_activation_hook( __FILE__, 'welcome_screen_activate' );
    function welcome_screen_activate() {
      set_transient( '_welcome_screen_activation_redirect', true, 30 );
    }

    add_action( 'admin_init', 'welcome_screen_do_activation_redirect' );
    function welcome_screen_do_activation_redirect() {
      // Bail if no activation redirect
        if ( ! get_transient( '_welcome_screen_activation_redirect' ) ) {
        return;
      }

      // Delete the redirect transient
      delete_transient( '_welcome_screen_activation_redirect' );

      // Bail if activating from network, or bulk
      if ( is_network_admin() || isset( $_GET['activate-multi'] ) ) {
        return;
      }

      // Redirect to bbPress about page
      wp_safe_redirect( add_query_arg( array( 'page' => 'welcome-screen-about' ), admin_url( 'index.php' ) ) );

    }

    add_action('admin_menu', 'welcome_screen_pages');

    function welcome_screen_pages() {
      add_dashboard_page(
        'Welcome To Welcome Screen',
        'Welcome To Welcome Screen',
        'read',
        'welcome-screen-about',
        'welcome_screen_content'
      );
    }

    function welcome_screen_content() {
      ?>
      <div class="wrap">
        <h1>Welcome to Zeus!</h1>
        <p>Thanks for downloading our plugin!  We hope it improves your WordPress experience.</p>
        <h2>Your new admin features:</h2>
        <ol>
          <li><b>Improved Admin UI</b><br>We've slightly tweaked the WordPress admin to improve read-ability and aesthetic.</li>
          <li><b>Hide Front-End Toolbar</b><br>Find the arrow in the top right and give it a click to slide out of screen.</li>
          <li><b>Global Admin Search</b><br>Find the magnifying glass in the top right and give it a click.  Your input will search through all database items.</li>
          <li><b>Menu Ordering</b><br>Simply drag and drop any top level menu anywhere on the left hand side.</li>
          <li><b>Hide Menu Items</b><br>Navigate to settings -> Hide Menu and check off anything you don't want to see.</li>
          <p>If this plugin improved your WordPress admin experience in any way, please consider giving us 5 stars by rating us <a href="https://wordpress.org/plugins/zeus-admin-theme/">here</a>.</p>
      </div>
      <?php
    }
    add_action( 'admin_head', 'welcome_screen_remove_menus' );
    function welcome_screen_remove_menus() {
        remove_submenu_page( 'index.php', 'welcome-screen-about' );
    }

?>
