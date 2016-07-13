import React from 'react';

import TextComponent from '../components/scribe';
import { baseTextOptions } from '../components/scribe-options';

class BlockText extends React.Component {

  constructor(props) {
    super(props);
    this.captureReturn = this.captureReturn.bind(this);
    this.onContentChanged = this.onContentChanged.bind(this);
    this.splitBlock = this.splitBlock.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

  componentDidMount() {
    this.props.setCurrentBlock(this.props.position);
  }

  componentWillUnmount() {
    this.props.setCurrentBlock(this.props.position - 1);
  }

  onFocus() {
    this.props.setCurrentBlock(this.props.position);
  }

  captureReturn() {
    console.log('cap ret');
    this.props.addBlock(Text.Name, this.props.position);
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
    return (
      <div className="katap-block katap-text">
        <TextComponent
          content={this.props.content}
          options={baseTextOptions}
          onFocus={this.onFocus}
          onContentChanged={this.onContentChanged} />
      </div>
    );
  }
}

let Text = {
  Name: 'text',
  React: BlockText,
  Icon: 'text-height',
  Empty: function() {
    return '<p><br></p>';
  },
  maximumBlocks: 0,
  Description: 'Text',
  isEmpty: function(content) {
    return (content.replace(/(<([^>]+)>)/ig,'') === '');
  },
};

export default Text;
