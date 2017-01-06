import React from 'react';
import BaseEmbed from './base';

class Youtube extends BaseEmbed {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.renderInput = this.renderInput.bind(this);
  }

  onChange (e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    const meta = {}
    meta.start = this.refs.start.value;
    meta.end = this.refs.end.value;

    this.props.updateMeta(meta);
  }

  renderInput() {
    const meta = this.props.content.meta;
    return (
      <div className="katap-embed-inp-container">
        <form onSubmit={this.onChange}>
          <label>Start Time: <input type="text" ref="start" defaultValue={meta.start || ''} /></label>
          <label>End Time: <input type="text" ref="end" defaultValue={meta.end || ''} /></label>
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
            <p>Youtube Video - <a href={this.props.url} target="_blank">{this.props.url}</a></p>
            {this.renderInput()}
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
          frameBorder={0}
          width={580}
          height={320}
          allowFullScreen={true} />
        {this.renderInput()}
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
  regex: /^.*(?:(?:youtu\.be\/)|(?:youtube\.com)\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*)/
};

export default Youtube;
