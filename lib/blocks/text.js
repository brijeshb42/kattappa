import React from 'react';

//console.log(MediumEditorComponent);

var options = {
    toolbar: {
        buttons: [
          'bold',
          'italic',
          'underline',
          'anchor',
          'strikethrough',
          'quote',
          'unorderedlist',
          'orderedlist'
        ]
    },
    autoLink: false,
    imageDragging: false,
    placeholder: {
        text: 'Write your story...'
    },
    paste: {
      forcePlainText: true,
      cleanPastedHTML: true,
      cleanTags: ['meta', 'span']
    }
};

class BlockText extends React.Component {

  constructor(props) {
    super(props);
    this.captureReturn = this.captureReturn.bind(this);
    this.onContentChanged = this.onContentChanged.bind(this);
    this.splitBlock = this.splitBlock.bind(this);
  }

  captureReturn() {
    this.props.addBlock("text", this.props.position);
  }

  onContentChanged(content) {
    if(this.props.onContentChanged) {
      this.props.onContentChanged(this.props.position, content);
    }
  }

  splitBlock(e) {
    this.props.splitBlock(this.props.position);
  }

  render() {
    var TextComponent = this.props.rteBlock;
    return (
      <div className="katap-block katap-text">
        <div className="katap-toolbar-wrapper katap-clearfix">
          <button className="katap-splitter" onClick={this.splitBlock}>&lt;/&gt;</button>
        </div>
        <TextComponent
          content={this.props.content}
          options={options}
          onContentChanged={this.onContentChanged} />
      </div>
    );
  }
}

let Text = {
  Name: 'text',
  React: BlockText,
  Icon: '',
  Empty: function() {
    return '';
  },
  Description: 'Text',
  isEmpty: function(content) {
    return (content.replace(/(<([^>]+)>)/ig,'') === '');
  },
};

export default Text;
