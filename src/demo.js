import 'normalize.css/normalize.css'
import './kattappa.scss';
import './style.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import throttle from 'lodash.debounce';

import Kattappa from './';

var initBlock = [{
  "type": "h2",
  "data": "<p><a href=\"http://lipsum.com\">Lorem Ipsum</a></p>"
}, {
  "type": "text",
  "data": '<p>Lorem ipsum dolor sit amet</p>', // consectetur adipiscing elit. Morbi ut condimentum tortor. Aenean ornare ex non sagittis ullamcorper. Proin interdum leo porta lorem scelerisque lacinia. Nullam rhoncus ut urna a dapibus. Cras vestibulum cursus augue in ultricies. Proin vel malesuada dui. Sed et mi vel metus dictum aliquet. Nulla eleifend nunc eu diam tempor suscipit. Duis iaculis neque sit amet blandit pellentesque.</p><p>Quisque semper mi eget sapien ullamcorper volutpat. Nullam ac neque nulla. Nam dapibus felis ex, ut sagittis orci vestibulum nec. Suspendisse elementum, nulla at ultricies congue, tellus leo rhoncus risus, ac faucibus arcu neque sit amet elit. Donec sed ex lacus. Phasellus suscipit commodo tellus, sed malesuada justo ornare eu. Mauris blandit in nulla at consequat. Curabitur ut tortor faucibus, luctus augue a, ullamcorper arcu. Donec tincidunt consectetur eros, et viverra purus blandit eget. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum nec malesuada mi. Donec vel orci non nunc maximus interdum. Maecenas molestie diam ac porta ultrices. Quisque gravida malesuada purus, in venenatis nulla commodo et.</p><p>Mauris pulvinar dignissim interdum. Praesent molestie non nisi ut imperdiet. Curabitur eget ligula vehicula, laoreet leo ac, iaculis enim. Quisque hendrerit accumsan sem et lobortis. Sed dapibus placerat nunc, a finibus velit suscipit nec. Quisque in nunc posuere, semper mauris non, molestie orci. Fusce pulvinar nisi ipsum, nec semper ante iaculis ut. Cras suscipit malesuada massa id ultrices. Vivamus in nisl a augue lobortis ultrices. Quisque iaculis tortor sit amet feugiat porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed at eros mauris. Aenean non dapibus elit. Donec posuere sem sit amet nulla porta lacinia. Fusce congue massa sit amet sagittis mattis.</p><p>Vivamus aliquet ante tortor, eget iaculis elit ultricies a. Duis elementum tincidunt risus sit amet ultrices. Maecenas rutrum consectetur turpis et suscipit. Fusce sit amet mattis dui, et rhoncus nulla. Proin eget libero lacus. Sed aliquet orci vel mi tincidunt eleifend. Etiam scelerisque efficitur enim, ac molestie libero consectetur eu. Maecenas interdum tincidunt dui in lacinia. Sed id lacus pharetra, feugiat nisi at, hendrerit nulla. Pellentesque sit amet egestas mauris.</p><p>Quisque sit amet lacinia libero. Proin odio massa, dictum in ante id, blandit pretium sem. Curabitur convallis arcu sed odio ullamcorper elementum. Sed at enim consequat, varius velit vitae, congue urna. Vestibulum elementum accumsan felis, quis scelerisque quam bibendum in. Maecenas mollis elementum tellus, vel vulputate tortor varius eu. Nam id ultrices ante, a hendrerit orci. Ut vel sapien scelerisque, convallis tortor sed, congue est. Donec metus nunc, accumsan at arcu vitae, porta consectetur odio. Aenean maximus erat non magna congue, et pretium ex dignissim. Mauris pellentesque accumsan efficitur. Nulla sit amet interdum arcu. Curabitur vel velit nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis lobortis dignissim commodo. Proin a sollicitudin felis, in sollicitudin enim.</p><p>Praesent quis neque leo. Nunc ut pellentesque lacus, ut vulputate turpis. Fusce nec diam est. Maecenas efficitur convallis augue viverra vestibulum. Donec eget lorem laoreet, porta tellus nec, posuere orci. Vestibulum posuere sem in sem ultricies, at accumsan nunc scelerisque. Morbi euismod, lacus eget ullamcorper finibus, ex purus molestie magna, et mollis nisl ligula eget magna.</p><p>Morbi molestie mauris ligula, eu vulputate orci ultricies sed. Integer urna sapien, tempor in magna vitae, iaculis interdum lacus. Aliquam blandit, dolor ac lacinia volutpat, massa est varius justo, nec varius nibh lectus vitae sapien. Nulla pellentesque nisl nec lacus condimentum porta. Integer sed lectus pulvinar, hendrerit lacus vel, gravida risus. Praesent suscipit ultrices neque non commodo. Mauris blandit bibendum nisi vitae ullamcorper. Cras scelerisque, magna eget tincidunt commodo, urna urna auctor libero, at vulputate massa ante vitae quam. Integer sed massa nulla. Morbi in interdum est. Fusce pharetra quam sit amet dictum auctor. Duis tristique ipsum accumsan neque congue, at fringilla ex elementum. Donec sit amet orci malesuada, semper quam id, laoreet leo. Duis commodo scelerisque efficitur.</p><p>Nunc sed suscipit quam, vel molestie magna. Cras sit amet consectetur arcu, eu ullamcorper justo. Suspendisse potenti. Integer molestie dictum laoreet. Ut mollis sit amet velit eget feugiat. Vivamus consequat eros in nunc suscipit gravida. Sed vitae tincidunt nisi, eget malesuada lorem. Morbi at eros fringilla, pulvinar mi in, laoreet quam. Duis dictum euismod eleifend. Donec ante elit, finibus at bibendum nec, lacinia ac erat. Ut mollis tellus nunc, eget malesuada ipsum sollicitudin at. Donec in elit rhoncus, laoreet risus quis, facilisis augue. Nam enim lacus, pellentesque ut vehicula ut, convallis ut neque.</p><p>Maecenas dignissim enim purus, ac eleifend metus sodales in. Aenean sollicitudin augue ligula, ut fermentum ligula mattis sit amet. Curabitur mattis leo vitae justo tincidunt, convallis lacinia nibh sagittis. Vestibulum accumsan commodo leo, ultricies tristique neque. Sed quis magna ante. Pellentesque ac sem id libero tempor hendrerit nec vitae metus. Aliquam erat volutpat. Ut hendrerit justo quis felis scelerisque posuere.</p><p>Maecenas commodo erat id odio aliquet commodo. Maecenas eget egestas sapien. Integer venenatis massa velit, et tempus eros pulvinar ac. Nunc volutpat lorem velit, nec lacinia augue consequat id. Nulla facilisi. Cras sollicitudin, elit ac semper ornare, arcu mauris dapibus neque, eu ornare dolor ante ac quam. Morbi ante sem, iaculis ut semper vel, malesuada nec velit. Vestibulum vestibulum urna nec nisl laoreet cursus. In bibendum a tellus vitae convallis. Sed convallis nisi pellentesque commodo tristique. Pellentesque finibus mattis dolor, vitae sagittis neque aliquam id. In eu enim eget diam egestas lobortis. Integer nec sapien eros. Mauris sollicitudin varius nisl, et fringilla quam blandit ac.</p>'
}];

for(var i=0; i<initBlock.length; i++) {
  initBlock[i].key = Kattappa.uuid();
}


const { Blocks, Editor } = Kattappa;

const { EmbedTypes } = Blocks.embed;

function getBlocks() {
  return initBlock;
}

function onChange(position, content) {
  initBlock[position].data = content;
}

function onSave(blocks) {
  console.log(blocks);
}

function onFilesAdded(files, success=null, error=null) {
  if (success) {
    success.call(null, files[0].preview);
    console.log('Success');
  }
}

class Container extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      blocks: initBlock,
    };

    this.toolbar = null;
    this.editor = null;
    this.toolbarNode = null;

    this.save = this.save.bind(this);
    this.getBlocks = this.getBlocks.bind(this);
    this.onChange = (blocks) => this.setState({ blocks });
    this.handleScroll = throttle(this.handleScroll.bind(this), 20, {
      leading: false,
      trailing: true,
    });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  getBlocks() {
    return this.state.blocks;
  }

  save() {
    console.log(this.state.blocks);
    console.log(this.refs.kattappa.currentBlock);
  }

  handleScroll(e) {
    if (!this.toolbar) {
      this.toolbar = this.refs.kattappa.refs.toolbar;
      this.toolbarNode = ReactDOM.findDOMNode(this.toolbar);
      this.editor = ReactDOM.findDOMNode(this);
      window.toolbar = this.toolbarNode;
    }
    const toolbarBoundary = this.toolbarNode.getBoundingClientRect();
    if (toolbarBoundary.top < window.scrollY - toolbarBoundary.height) {
      if (this.toolbarNode.style.left === '0px') {
        return;
      }
      this.editor.style.paddingTop = toolbarBoundary.height + 'px';
      this.toolbarNode.style.position = 'fixed';
      this.toolbarNode.style.width = toolbarBoundary.width + 'px';
      this.toolbarNode.style.top =  '0px';
      this.toolbarNode.style.left =  toolbarBoundary.left +  'px';
      this.toolbarNode.style.right =  '0px';
    } else {
      // if (this.editor.style.paddingTop !== '') {
      //   return;
      // }
      this.editor.style.paddingTop = '0px';
      this.toolbarNode.removeAttribute('style');
    }
  }

  render() {
    return (
      <div>
        <button style={{position: 'fixed', top: 40, left: 10}} onClick={this.save}>console.log</button>
        <Editor
          ref="kattappa"
          blocks={this.state.blocks}
          onChange={this.onChange}
          availableBlocks={Blocks}
          EmbedTypes={EmbedTypes}
          splitter="<p><br></p>"
          getBlocks={this.getBlocks}
          onFilesAdded={onFilesAdded} />
      </div>
    );
  }
}

ReactDOM.render(<Container />, document.getElementById('editor-content'));
