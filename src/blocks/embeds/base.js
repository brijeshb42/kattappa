import React from 'react';

class BaseEmbed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      message: 'Wait',
      id: '',
      valid: false,
      preview: false
    };
    this.validate = this.validate.bind(this);
    this.extraHandler = this.extraHandler.bind(this);
    this.showPreview = this.showPreview.bind(this);
  }

  componentDidMount() {
    this.validate();
    this.extraHandler();
  }

  showPreview() {
    this.setState({
      preview: !this.state.preview
    });
  }

  validate() {
    var match;
    match = this.props.regex.exec(this.props.url);
    this.props.regex.lastIndex = 0;
    if(!match) {
      this.props.checkContent(false);
      this.setState({
        message: 'error.'
      });
      return;
    }
    this.setState({
      message: 'OK.',
      id: match[1],
      valid: true
    });
    this.props.checkContent(true);
  }

  render() {
    return (
      <div class="katap-embed"></div>
    );
  }
}

BaseEmbed.defaultProps = {
  url: '',
  regex: /^$/
};

export default BaseEmbed;
