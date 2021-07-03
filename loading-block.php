<?php
/**
 * Plugin Name:       Loading Block
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            KON
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       loading-block
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function create_block_loadig_block_block_init() {
	register_block_type_from_metadata( __DIR__ );
}
add_action( 'init', 'create_block_loadig_block_block_init' );

// JSフック
function add_js(){
	wp_enqueue_script(
		'loadingBlock',
		plugins_url('/loading-block/loadingBlock.js'),
		array(),
		false,
		true
	);
}
add_action( 'wp_enqueue_scripts', 'add_js' );
