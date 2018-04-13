<?php
/**
 * Plugin Name: First Guty Blocks
 * Description: Our first Gutenberg Blocks!
 * Version: 1.0.0
 * Author: Jim Schofield
 *
 * @package firstgutyblocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function firstgutyblocks_hello_world_editor_assets() {
    wp_enqueue_script(
        'firstgutyblocks/hello-world',
        plugins_url( 'build/index.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-element' )
    );
};

add_action( 'enqueue_block_editor_assets', 'firstgutyblocks_hello_world_editor_assets');