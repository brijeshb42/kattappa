import React from 'react';

import MediumComponent from './medium';

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
        text: 'List item...'
    },
    paste: {
      forcePlainText: true,
      cleanPastedHTML: false
    }
};

export default class LI extends React.Component {

  constructor(props) {
    super(props);
    this.captureReturn = this.captureReturn.bind(this);
    this.onContentChanged = this.onContentChanged.bind(this);
  }

  captureReturn() {
    if(this.props.addItem) {
      this.props.addItem(this.props.position);
    }
  }

  onContentChanged(content) {
    if(this.props.onContentChanged) {
      this.props.onContentChanged(this.props.position, content);
    }
  }

  render() {
    return (
      <MediumComponent
        content={this.props.content}
        captureReturn={this.captureReturn}
        enterCapture={true}
        options={options}
        onContentChanged={this.onContentChanged} />
    );
  }
}
