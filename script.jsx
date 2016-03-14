var initBlock = [
{
  type: Kattappa.Blocks.Embed.Name,
  content: 'https://instagram.com/p/6HAMzFAT98/media/?size=m',
  key: Kattappa.uuid()
},
{
  type: Kattappa.Blocks.Text.Name,
  content: '<div><b>Hello World</b></div>',
  key: Kattappa.uuid()
},
{
  type: Kattappa.Blocks.Embed.Name,
  content: 'https://www.youtube.com/watch?v=li5E_Q33z9Y',
  key: Kattappa.uuid()
}
];

var Blocks = Kattappa.Blocks;
delete blocks.Text;
//Kattappa.Blocks.Image.UploadUrl = "/img/upload";

function getBlocks() {
  return initBlock;
}

function onSave(blocks) {
  console.log(blocks);
}

var Container = React.createClass({

  getBlocks: function() {
    return initBlock
  },

  save: function() {
    console.log(this.refs.kattappa.getBlocks());
  },

  render: function() {
    return (
      <div>
        <button onClick={this.save}>Save</button>
        <Kattappa.Editor
          availableBlocks={Blocks}
          ref="kattappa"
          getBlocks={this.getBlocks} />
      </div>
    );
  }
});

ReactDOM.render(<Container />, document.getElementById('editor-content'));
