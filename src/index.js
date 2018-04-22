const { 
    registerBlockType,
    RichText,
    InspectorControls,
    ColorPalette
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
            default: 'black'
        }
    },


    edit(props) {

        const { 
            setAttributes, 
            attributes,
            className,
            focus
        } = props;
        const { fontColor } = props.attributes;

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

        return ([
            focus && <InspectorControls>
                <div>
                    <strong>Select a font color:</strong>
                    <ColorPalette
                        value={fontColor}
                        onChange={onTextColorChange}
                        />
                </div>
            </InspectorControls>,
            <div 
                className={className}
                style={{
                    backgroundImage: `url('http://placehold.it/1440x700')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                <div className="overlay"></div> {/* Adding an overlay element */}
                <RichText
                    tagName="h2"
                    className="content" // adding a class we can target
                    value={attributes.textString}
                    onChange={onTextChange}
                    placeholder="Enter your text here!"
                    style={{color: fontColor}}
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