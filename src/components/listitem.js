import React from 'react';

import TextComponent from './scribe';
import { baseInlineOptions } from './scribe-options';

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
      <TextComponent
        content={this.props.content}
        captureReturn={this.captureReturn}
        enterCapture
        options={baseInlineOptions}
        onContentChanged={this.onContentChanged}
        placeholder="Add list item..." />
    );
  }
}
