import React from 'react';

import Action from '../utils/action';
import LI from '../components/listitem';
import BlockControl from '../components/blockcontrol';
import {uuid} from '../utils';


class BlockOL extends React.Component {

  constructor(props) {
    super(props);
    this.onContentChanged = this.onContentChanged.bind(this);
    this.addItem = this.addItem.bind(this);
    this.handleItemRemove = this.handleItemRemove.bind(this);
    this.renderListItem = this.renderListItem.bind(this);
  }

  onContentChanged(position, content) {
    this.props.content[position].content = content;
    if(this.props.onContentChanged) {
      this.props.onContentChanged(this.props.position, this.props.content);
    }
  }

  addItem(position) {
    if(position < 0 || position >= this.props.content.length) {
      return;
    }
    var content = this.props.content;
    content.push({
      content: '',
      key: uuid()
    });
    if(this.props.onContentChanged) {
      this.props.onContentChanged(this.props.position, content);
    }
  }

  handleItemRemove(action, position) {
    if(this.props.content.length < 2) {
      return;
    }
    var content = this.props.content;
    content.splice(position, 1);
    if(this.props.onContentChanged) {
      this.props.onContentChanged(this.props.position, content);
    }
  }

  renderListItem() {
    var self = this;
    var li = [];
    this.props.content.map(function(item, index) {
      li.push(
        <li key={item.key}>
          <BlockControl
            onlyRemove={true}
            blockAction={self.handleItemRemove}
            position={index}
            length={self.props.content.length} />
          <LI
            position={index}
            content={item.content}
            addItem={self.addItem}
            onContentChanged={self.onContentChanged} />
        </li>
      );
    });
    return li;
  }

  render() {
    return (
      <ol className="katap-block katap-list">
      {this.renderListItem()}
      </ol>
    );
  }
}

let OL = {
  Name: 'OL',
  React: BlockOL,
  Icon: '',
  Empty: function() {
    return [{
      content: '',
      key: uuid()
    }];
  },
  Description: 'Ordered List',
  isEmpty: function(content) {
    for(var i = 0; i<content.length; i++) {
      if(content[i].content.replace(/(<([^>]+)>)/ig,'') !== '') {
        return false
      }
    }
    return true;
  }
};

BlockOL.defaultProps = {
  content: OL.Empty()
};

export default OL;
