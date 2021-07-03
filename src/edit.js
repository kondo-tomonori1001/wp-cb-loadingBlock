/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { PanelBody, ColorPicker } from "@wordpress/components";
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({attributes,setAttributes}) {
  const blockProps = useBlockProps();
	const { bgColor, squareColor, textColor } = attributes;
	console.log(bgColor);
	return (
		<>
			<InspectorControls>
				<PanelBody title="背景色の設定" initialOpen={ false }>
					<ColorPicker
						disableAlpha={true}
						onChangeComplete={(value) => setAttributes({bgColor:value.hex})}
					/>
				</PanelBody>
				<PanelBody title="回転する小さい四角形の色設定" initialOpen={ false }>
					<ColorPicker
						disableAlpha={true}
						onChangeComplete={(value) => setAttributes({squareColor:value.hex})}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
			  <div className="p-loading is-edit" style={{backgroundColor:bgColor}}>
	  			<div class="p-loading__square">
	      		<span class="p-loading__square1" style={{backgroundColor:squareColor}}></span>
	      		<span class="p-loading__square2" style={{backgroundColor:squareColor}}></span>
	      		<span class="p-loading__square3" style={{backgroundColor:squareColor}}></span>
	      		<span class="p-loading__square4" style={{backgroundColor:squareColor}}></span>
	    		</div>
	        <p class="p-loading__text">
						LOADING ...
						<span className="p-loading__text__cover" style={{backgroundColor:bgColor}}></span>
					</p>
	  		</div>
			</div>
		</>
	);
}
