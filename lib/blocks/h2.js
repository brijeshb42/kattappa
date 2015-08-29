import React from 'react';

import QuillComponent from '../components/quill';
import BlockText from './text';

class BlockH2 extends BlockText.React {

  render() {
    return (
      <h2 className="katap-block katap-h2">
        <QuillComponent
          showToolbar={false}
          formats={[]}
          content={this.props.content}
          captureReturn={this.captureReturn}
          onContentChanged={this.onContentChanged} />
      </h2>
    );
  }

}

let H2 = {
  Name: 'H2',
  React: BlockH2,
  Icon: '',
  Empty: function() {
    return '';
  },
  Description: 'Heading 2',
  isEmpty: function(content) {
    return (content.replace(/(<([^>]+)>)/ig,'') === '');
  }
};

export default H2;
