const { registerBlockType } = wp.blocks;

registerBlockType('firstgutyblocks/hello-world', {
    title: "My First Guty Block!",
    icon: 'smiley',
    category: 'common',

    edit() {
        return <h1>Hello Editor</h1>;
    },

    save() {
        return <h1>Hello World</h1>;
    }
})