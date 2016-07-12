import React from 'react';
import ReactDOM from 'react-dom';

class Droppable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      className: ''
    };
    this.getClassName = this.getClassName.bind(this);
    this.onDragEnter = this.onDragEnter.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
    this.onDragLeave = this.onDragLeave.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  getClassName() {
    return 'katap-droppable '+(this.props.className || this.state.className);
  }

  onDragEnter(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      className: 'katap-drop-active'
    });
  }

  componentDidMount() {
    this.refs.droppable.focus();
  }

  onDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = 'copy';
    if (this.props.onDragOver) {
      this.props.onDragOver(e);
    }
  }

  onDragLeave(e) {
    this.setState({
      className: ''
    });

    if (this.props.onDragLeave) {
      this.props.onDragLeave(e);
    }
  }

  onClick() {
    if (this.props.onFocus) {
      this.props.onFocus();
    }
    var fileInput = this.refs.input;
    fileInput.value = null;
    fileInput.click();
  }

  onDrop(e) {
    e.preventDefault();
    var files;
    if(e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if(e.target) {
      files = e.target.files;
    }
    var maxFiles = (this.props.multiple) ? files.length : 1;
    for (var i = 0; i < maxFiles; i++) {
      files[i].preview = URL.createObjectURL(files[i]);
    }
    if(this.props.onDrop) {
      files = Array.prototype.slice.call(files, 0, maxFiles);
      this.props.onDrop(files);
    }
  }

  render() {
    return (
      <div
        ref="droppable"
        style={{height: 100}}
        className={this.getClassName()}
        onDragEnter={this.onDragEnter}
        onDragOver={this.onDragOver}
        onDragLeave={this.onDragLeave}
        onClick={this.onClick}
        onDrop={this.onDrop} >
        <input
          ref="input"
          type="file"
          style={{display: 'none'}}
          multiple={this.props.multiple}
          onChange={this.onDrop} />
        {this.props.children}
      </div>
    );
  }
}

Droppable.defaultProps = {
  supportClick: true,
  multiple: false
};

export default Droppable;
