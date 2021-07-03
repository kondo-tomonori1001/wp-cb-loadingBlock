/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({attributes}) {
	const { bgColor, squareColor, text, delay } = attributes;
	return (
		<div className="p-loading is-loading" data-delay={delay} style={{ backgroundColor: bgColor }}>
			<div class="p-loading__square">
				<span
					class="p-loading__square1"
					style={{ backgroundColor: squareColor }}
				></span>
				<span
					class="p-loading__square2"
					style={{ backgroundColor: squareColor }}
				></span>
				<span
					class="p-loading__square3"
					style={{ backgroundColor: squareColor }}
				></span>
				<span
					class="p-loading__square4"
					style={{ backgroundColor: squareColor }}
				></span>
			</div>
			<p class="p-loading__text" style={{ color: squareColor }}>
				{text}
				<span
					className="p-loading__text__cover"
					style={{ backgroundColor: bgColor }}
				></span>
			</p>
		</div>
	);
}
