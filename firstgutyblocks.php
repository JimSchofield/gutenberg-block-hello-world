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

function firstgutyblocks_hero_image_editor_assets() {
    wp_enqueue_script(
        'firstgutyblocks/hero-image',
        plugins_url( 'build/index.build.js', __FILE__ ),
        array( 'wp-blocks', 'wp-element' )
    );
    wp_enqueue_style(
		'firstgutyblocks/hero-image-editor-style',
        plugins_url( 'src/editor.css', __FILE__ ),
        array( 'wp-edit-blocks' )
	);
};

add_action( 'enqueue_block_editor_assets', 'firstgutyblocks_hero_image_editor_assets');

function firstgutyblocks_hero_image_assets() {
    wp_enqueue_style(
		'firstgutyblocks/hero-image',
        plugins_url( 'src/view.css', __FILE__ ),
        array( 'wp-blocks' )
	);
}
add_action( 'enqueue_block_assets', 'firstgutyblocks_hero_image_assets');