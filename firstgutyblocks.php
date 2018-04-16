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
    wp_enqueue_style(
		'firstgutyblocks/hello-world-editor-style',
        plugins_url( 'src/editor.css', __FILE__ ),
        array( 'wp-edit-blocks' )
	);
};

add_action( 'enqueue_block_editor_assets', 'firstgutyblocks_hello_world_editor_assets');

function firstgutyblocks_hello_world_assets() {
    wp_enqueue_style(
		'firstgutyblocks/hello-world',
        plugins_url( 'src/view.css', __FILE__ ),
        array( 'wp-blocks' )
	);
}
add_action( 'enqueue_block_assets', 'firstgutyblocks_hello_world_assets');