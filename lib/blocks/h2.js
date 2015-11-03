import React from 'react';

import MediumComponent from '../components/medium';
import BlockText from './text';

let options = {
    toolbar: {
        buttons: [
          'bold',
          'italic',
          'underline',
          'anchor',
          'strikethrough'
        ]
    },
    autoLink: false,
    imageDragging: false,
    placeholder: {
        text: 'Heading...'
    },
    paste: {
        forcePlainText: true,
        cleanPastedHTML: true
    }
};

class BlockH2 extends BlockText.React {

  captureReturn() {
    this.props.addBlock("text", this.props.position);
  }

  render() {
    return (
      <h2 className="katap-block katap-h2">
        <MediumComponent
          //showToolbar={false}
          options={options}
          content={this.props.content}
          captureReturn={this.captureReturn}
          enterCapture={true}
          onContentChanged={this.onContentChanged} />
      </h2>
    );
  }

}

let H2 = {
  Name: 'h2',
  React: BlockH2,
  Icon: '',
  Empty: function() {
    return '';
  },
  Description: 'Heading',
  isEmpty: function(content) {
    return (content.replace(/(<([^>]+)>)/ig,'') === '');
  }
};

export default H2;
