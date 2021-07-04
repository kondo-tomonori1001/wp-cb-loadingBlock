<?php
/**
 * Plugin Name:       Loading Block
 * Description:       ローディング画面を導入するためのブロックです。背景画像、回転する四角形の色をカスタムできます。
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           1.0.0
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
	$url = __DIR__;
	wp_enqueue_script(
		'loadingBlock',
		untrailingslashit( plugin_dir_url( __FILE__ ) ) . '/loadingBlock.js',
		array(),
		false,
		true
	);
}
add_action( 'wp_enqueue_scripts', 'add_js' );
