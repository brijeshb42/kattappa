var initBlock = [
// {
// type: "h2",
// data: "<p>Hello World</p>",
// key: Kattappa.uuid()
// },
{
type: "text",
data: '',
key: Kattappa.uuid()
},
// {
// type: "hr",
// key: Kattappa.uuid()
// },
// {
// type: "embed",
// data: {
//   url: "https://vine.co/v/hgh7zb0hlax"
// },
// key: Kattappa.uuid()
// },
// {
// type: "embed",
// data: {
//   url: "https://www.youtube.com/watch?v=li5E_Q33z9Y"
// },
// key: Kattappa.uuid()
// },
// {
// type: "embed",
// data: {
//   url: "https://instagram.com/p/6N47G1wqci/?taken-by=discoverychannel"
// },
// key: Kattappa.uuid()
// }
];
//Kattappa.Blocks.Image.UploadUrl = "/img/upload";

var Blocks = Kattappa.Blocks;
//delete Blocks.Text;

var EmbedTypes = Kattappa.Blocks.embed.EmbedTypes;

function getBlocks() {
  return initBlock;
}

function onSave(blocks) {
  console.log(blocks);
}

var Container = React.createClass({
  displayName: 'Container',

  getBlocks: function getBlocks() {
    return initBlock;
  },

  save: function save() {
    console.log(this.refs.kattappa.getBlocks());
  },

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'button',
        { onClick: this.save },
        'Save'
      ),
      React.createElement(Kattappa.Editor, {
        ref: 'kattappa',
        availableBlocks: Blocks,
        EmbedTypes: EmbedTypes,
        splitter: '<p><br></p><p><br></p>',
        //UploadUrl: '/upload_img',
        getBlocks: this.getBlocks })
    );
  }
});

var editor = React.createElement(Container, null);

ReactDOM.render(editor, document.getElementById('editor-content'));
