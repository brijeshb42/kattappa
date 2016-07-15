import React from 'react';


export default class BaseBlock extends React.Component {
  constructor(props) {
    super(props);

    this.setPosition = this.setPosition.bind(this);
    this.onContentChanged = this.onContentChanged.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

  componentDidMount() {
    this.setPosition();
  }

  componentWillUnmount() {
    this.props.setCurrentBlock(this.props.position - 1);
  }

  setPosition() {
    this.props.setCurrentBlock(this.props.position);
  }

  onContentChanged(content) {
    if(this.props.onContentChanged) {
      this.props.onContentChanged(this.props.position, content);
    }
  }

  onFocus() {
    this.setPosition();
  }

  render() {
    return <div className="katap-block katap-base">Base Block. Extend this block to make your own.</div>
  }
}
