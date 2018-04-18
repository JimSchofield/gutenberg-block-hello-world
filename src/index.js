const { 
    registerBlockType,
    RichText
} = wp.blocks;

registerBlockType('firstgutyblocks/hello-world', {
    title: "My First RichText Block!",
    icon: 'welcome-write-blog',
    category: 'common',

    attributes: {
        textString: {
            type: 'array',
            source: 'children',
            selector: 'h2',
        }
    },

    // props are passed to edit by default
    // props contains things like setAttributes and attributes
    edit(props) {

        // we are peeling off the things we need
        const { setAttributes, attributes } = props;

        // This function is called when RichText changes
        // By default the new string is passed to the function
        // not an event object like react normally would do
        function onTextChange(changes) {
            // works very much like setState
            setAttributes({
                textString: changes
            });
        }

        return (
            <RichText
                tagName="h2"
                value={attributes.textString}
                onChange={onTextChange}
                placeholder="Enter your text here!"
                />
        );
    },

    // again, props are automatically passed to save and edit
    save(props) {

        const { attributes } = props;

        // We want the text to be an h2 element
        // and we place the textString value just
        // like we would in a normal react app
        return (
            <h2>{attributes.textString}</h2>
        );
    }
})
