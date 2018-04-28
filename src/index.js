const {
    registerBlockType,
    RichText,
    InspectorControls,
    ColorPalette,
    MediaUpload
} = wp.blocks;

registerBlockType('firstgutyblocks/hero-image', {
    title: "Hero Image Block",
    icon: 'format-image',
    category: 'common',

    attributes: {
        textString: {
            type: 'array',
            source: 'children',
            selector: 'h2',
        },
        fontColor: {
            type: 'string',
            default: null // let's get rid of the annoying orange
        },
        backgroundImage: {
            type: 'string',
            default: null, // no image by default!
        }
    },


    edit(props) {

        const {
            setAttributes,
            attributes,
            className,
            focus
        } = props;
        const { fontColor, overlayColor, backgroundImage } = props.attributes;

        function onTextChange(changes) {
            setAttributes({
                textString: changes
            });
        }

        function onTextColorChange(changes) {
            setAttributes({
                fontColor: changes
            })
        }

        function onOverlayColorChange(changes) {
            setAttributes({
                overlayColor: changes
            })
        }

        function onImageSelect(imageObject) {
            setAttributes({
                backgroundImage: imageObject.sizes.full.url
            })
        }

        return ([
            focus && <InspectorControls>
                <div>
                    <strong>Select a font color:</strong>
                    <ColorPalette
                        value={fontColor}
                        onChange={onTextColorChange}
                    />
                </div>
                <div>
                    <strong>Select an overlay color:</strong>
                    <ColorPalette
                        value={overlayColor}
                        onChange={onOverlayColorChange}
                    />
                </div>
                <div>
                    <strong>Select a background image:</strong>
                    <MediaUpload
                        onSelect={onImageSelect}
                        type="image"
                        value={backgroundImage}
                        render={({ open }) => (
                            <button onClick={open}>
                                Upload Image!
                            </button>
                        )}
                    />
                </div>
            </InspectorControls>,
            <div
                className={className}
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                <div
                    className="overlay"
                    style={{ background: overlayColor }}
                ></div>
                <RichText
                    tagName="h2"
                    className="content"
                    value={attributes.textString}
                    onChange={onTextChange}
                    placeholder="Enter your text here!"
                    style={{ color: fontColor }}
                />
            </div>
        ]);
    },

    save(props) {

        const { attributes, className } = props;
        const { fontColor } = props.attributes;

        return (
            <div
                className={className}
                style={{
                    backgroundImage: `url('http://placehold.it/1440x700')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                <div className="overlay"></div>
                <h2 class="content" style={{ color: fontColor }}>{attributes.textString}</h2>
            </div>
        );
    }
})