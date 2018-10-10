import React from 'react';
import BaseEmbed from './base';

class Youtube extends BaseEmbed {
  constructor(props) {
    super(props);

    this.start = null;
    this.end = null;

    this.onChange = this.onChange.bind(this);
    this.renderInput = this.renderInput.bind(this);
  }

  onChange (e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    const meta = {}
    meta.start = this.start.value;
    meta.end = this.end.value;

    this.props.updateMeta(meta);
  }

  renderInput() {
    const meta = this.props.content.meta;
    return (
      <div className="katap-embed-inp-container">
        <form onSubmit={this.onChange}>
          <label>Start Time: <input type="text" ref={(node) => {this.start=node}} defaultValue={meta.start || ''} /></label>
          <label>End Time: <input type="text" ref={(node) => {this.end=node}} defaultValue={meta.end || ''} /></label>
          <button className="katap-show-preview-btn" onClick={this.onChange}>Update</button>
        </form>
      </div>
    );
  }

  render() {
    if(this.state.valid) {
      if(!this.state.preview) {
        return (
          <div className="katap-embed katap-youtube">
            <p>Youtube Video - <a href={this.props.url} target="_blank" rel="noopener noreferrer">{this.props.url}</a></p>
            <button className="katap-show-preview-btn" onClick={this.showPreview}>Preview</button>
          </div>
        );
      }
      let url = '//youtube.com/embed/' + this.state.id + '?';
      const meta = this.props.content.meta;
      if (meta.start && meta.start !== '') {
        url += 'start=' + meta.start + '&';
      }
      if (meta.end && meta.end !== '') {
        url += 'end=' + meta.end;
      }
      return (
        <div className="katap-embed katap-youtube">
        <iframe
          src={url}
          title={`youtube-embed-${this.state.id}`}
          frameBorder={0}
          width={580}
          height={320}
          allowFullScreen={true} />
        </div>
      );
    }
    return (
      <div className="katap-embed">Invalid Youtube URL.</div>
    );
  }
}

Youtube.defaultProps = {
  url: '',
  regex: /^.*(?:(?:youtu\.be\/)|(?:youtube\.com)\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*)/
};

export default Youtube;
