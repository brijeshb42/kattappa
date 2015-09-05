import React from 'react';
import QuillComponent from '../components/quill';
//import MediumEditorComponent from '../components/medium';

//console.log(MediumEditorComponent);

class BlockText extends React.Component {

  constructor(props) {
    super(props);
    this.captureReturn = this.captureReturn.bind(this);
    this.onContentChanged = this.onContentChanged.bind(this);
  }

  captureReturn() {
    this.props.addBlock("text", this.props.position);
  }

  onContentChanged(content) {
    if(this.props.onContentChanged) {
      this.props.onContentChanged(this.props.position, content);
    }
  }

  render() {
    return (
      <div className="katap-block katap-text">
        <QuillComponent
          content={this.props.content}
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
