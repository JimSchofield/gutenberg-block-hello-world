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

        const { setAttributes, attributes } = props;

        function onTextChange(changes) {
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

    save(props) {

        const { attributes } = props;

        return (
            <h2>{attributes.textString}</h2>
        );
    }
})