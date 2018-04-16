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
            type: 'string'
        }
    },


    edit(props) {

        const { 
            setAttributes, 
            attributes,
            className // The class name as a string!
        } = props;

        function onTextChange(changes) {
            setAttributes({
                textString: changes
            });
        }

        return (
            // We've added a container div
            // and we're placing our styles on that manually
            <div className={className}>
                <RichText
                    tagName="h2"
                    value={attributes.textString}
                    onChange={onTextChange}
                    placeholder="Enter your text here!"
                    />
            </div>
        );
    },

    save(props) {

        const { attributes, className } = props;

        return (
            <div className={className}>
                <h2>{attributes.textString}</h2>
            </div>
        );
    }
})