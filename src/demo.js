import 'normalize.css/normalize.css'
import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';
import './kattappa.scss';
import './style.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import throttle from 'lodash.debounce';

import Kattappa from './';

var initBlock = [{
  "type": "text",
  "data": "<p>Written texts in Thai Buddhist manuscripts may not always pay much attention to female figures, but the illustrations often depict male and female beings, and sometimes the relationships between them, in a well-balanced manner. Many Jataka<i> </i>stories of the birth tales of the Buddha are unthinkable without female figures, be it Maddi, the wife of Prince Vessantara; or the sea goddess that rescues Prince Janaka; or the young naga maidens who entertain Bhuridatta while meditating.</p><p>Although all of the last 10 birth stories are very popular among Thai Buddhists, the \"Vessantara Jataka\" is among the best known, since it is frequently performed on theatre stages set up at annual Buddhist festivals or during temple fairs throughout the country. </p><p>The \"Vessantara Jataka\" portrays the virtue of charity. It narrates the life of prince Vessantara who from early childhood, shows true generosity and a great sense of charity: he gives away all his possessions, including an elephant that he grew up with, his children, and finally his beloved wife Maddi. However, in the end they all get back together again.</p>"},
  // {"type": "image", "data": {"url": "//d1u4oo4rb13yy8.cloudfront.net/zmjjcxvqvf-1468311997.png", "subtext": "19th-century folding book from Central Thailand containing a collection of Buddhist texts and illustrations from the Ten Birth Tales. British Library, Or 16552, f. 26", "hyperlink": "http://www.bl.uk/manuscripts/FullDisplay.aspx?ref=Or_16552"}}, {"type": "text", "data": "<p>The people of his kingdom find Vessantara\u2019s generosity distressing and frightening. They persuade Vessantara\u2019s father to take back the kingdom from his son and drive him into exile, where eventually his wife and children follow him. Before their departure, they pay a visit to Vessantara\u2019s mother, Phusati, shown in the illustration above. Phusati, sitting on a high pedestal on the left side, faces Vessantara together with Maddi and their two children sitting on Maddi\u2019s lap. Vessantara pays respects to his mother with a <em>wai</em> gesture, while she pats her son's right shoulder to console him, and to give her blessings for their departure.   <br></p>"}, {"type": "image", "data": {"url": "//d1u4oo4rb13yy8.cloudfront.net/rmxasnziwd-1468312060.png", "subtext": "Thai illustrated manuscript of the Ten Birth Tales, 19th century. British Library, Or 16552, f. 52 ", "hyperlink": "http://www.bl.uk/manuscripts/FullDisplay.aspx?index=0&ref=Or_16552"}}, {"type": "text", "data": "<p>After their departure from the kingdom, Vessantara and his family decide to live in a forest as hermits. While Maddi collects fruits in the forest for her family, the Brahmin Jujaka meets Vessantara to ask for his two children to become servants for the Brahmin\u2019s wife. Vessantara brokenheartedly gives his children away in an act of ultimate charity. </p><p>As Jujaka drives the wailing children through the forest, the gods imagine Maddi\u2019s anguish if she were to see them in this state, and so three gods take the form of wild animals in order to block Maddi's path, thus preventing her immediate return to the hermitage. Maddi, kneeling down in front of the three animals, greets them with a <em>wai</em> fearlessly and respectfully, showing her still calm and peaceful state of mind. <br><br>Another of the last 10 Jatakas, the Narada Jataka, tells of the generous King Andati who was deceived by a false ascetic and ceased giving alms to the poor. His only daughter, Ruja, prays for help from the gods to bring her father back to his senses. The Buddha, who exists in this Jataka as the celestial deity Narada, appears before the king to warn him that those who follow false doctrine will be condemned to a horrific existence in hell.  The king shows remorse and asks Narada for forgiveness, and finally resolves to provide for those living in poverty. </p>"}, {"type": "image", "data": {"url": "//d1u4oo4rb13yy8.cloudfront.net/vgptfdlvzv-1468312234.png", "subtext": "Central Thai folding book containing a collection of Buddhist texts including the Mahabuddhaguna on the qualities of the Buddha, 18th century. British Library, Or 14068, f. 9", "hyperlink": "http://www.bl.uk/manuscripts/FullDisplay.aspx?ref=Or_14068"}}, {"type": "text", "data": "<p>The painting shown above depicts Ruja, King Andati\u2019s daughter, kneeling on a pedestal. She is drawn with a red aura, which is similar to the aura that in Thai manuscript paintings is often associated with the future Buddha, Maitreya, or the saint Phra Malai. Ruja prays to the deity Narada while one of her four female attendants carries an offering bowl. The four-armed deity Narada can be seen in the upper right quarter of the painting, floating in the air.  Ruja is seen as an example of a good daughter and a strong believer in and upholder of Buddhist moral standards, hence her decoration with the aura of a saint. <br><br>The Bhuridatta Jataka tells of the Buddha in a former existence as a naga (serpent) prince, who practices meditation every night under a Banyan tree. He earned the name Bhuridatta because of his wisdom and goodness, and he aims to follow the Eight Precepts. An evil Brahmin and snake charmer named Alambayana obtains magic spells from a hermit in order to capture Bhuridatta and force him to perform in market places so that the Brahmin would earn fame and wealth. The naga prince represses his shame and anger in order to follow the Eight Precepts. Eventually, he is freed by his three brothers.</p>"}, {"type": "image", "data": {"url": "//d1u4oo4rb13yy8.cloudfront.net/rvpnahcfwe-1468312351.png", "subtext": "Thai folding book dated 1841 A.D. containing extracts from the Abhidhamma, Suttas and the Mah\u0101buddhagun\u0101. British Library, Or 15925, f. 12 ", "hyperlink": "http://www.bl.uk/manuscripts/FullDisplay.aspx?ref=Or_15925"}}, {"type": "text", "data": "<p>Nagas are believed to be magical serpents who can assume human form when they wish. This painting depicts Bhuridatta practising meditation while coiled around a huge ant hill. In front of the serpent are two naga maidens in human form. The duty of the maidens is to wake up Bhuridatta from his meditation every morning and to escort him back to the realm of the nagas where he spends the daytime, before coming back at night to resume his meditations.   <br></p>"}, {"type": "image", "data": {"url": "//d1u4oo4rb13yy8.cloudfront.net/zsqinosxfc-1468312412.png", "subtext": "Thai manuscript of Mahabuddhaguna and other Buddhist texts, 18th century. British Library, Or 14068, f. 7", "hyperlink": "http://www.bl.uk/manuscripts/FullDisplay.aspx?ref=Or_14068"}}, {"type": "text", "data": "<p>The rather dramatic 18th-century illustration above shows a hunter on the left, pointing toward where the Brahmin Alambayana can find the naga prince. Alambayana is on the right, carrying a magic jewel from the naga world. The hunter\u2019s wife is standing behind bushes, trying to hide from the men. Her left hand holding her ear, she seems to be eavesdropping on the two men. </p><p>She does not want her husband to get involved with the Brahmin, for her utmost concern is the well-being of her family. The painter may have decided to include the hunter\u2019s wife in the scene - holding a machete prominently in her right hand - in recognition of her potential to prevent the capture and humiliation of Bhuridatta.   <br><br>Another Jataka tells of Prince Janaka, who was born in exile after his father was killed by his brother. When grown up, he undertakes a sea voyage to his homeland, but suffers a shipwreck. He struggles to stay alive in the ocean for seven days until he decides to follow the Eight Precepts. Then, the goddess Manimekhala, guardian of the seas, comes to rescue and carry him to his late father\u2019s kingdom Mithila. In the meantime, his uncle - his father\u2019s murderer dies - and the vacant throne will be given to the man who marries the sharp-minded Princess Sivali. Janaka passes many tests and finally wins the throne and Sivali\u2019s heart.</p>"}, {"type": "image", "data": {"url": "//d1u4oo4rb13yy8.cloudfront.net/aksollwhec-1468312451.png", "subtext": "Janaka Jataka in a Thai folding book, dated 1841. British Library, Or 15925, f. 7 ", "hyperlink": "http://www.bl.uk/manuscripts/FullDisplay.aspx?ref=Or_15925"}}, {"type": "text", "data": "<p>In the manuscript above, the lively illumination on the right depicts the disastrous event when Prince Janaka\u2019s ship is sinking, with giant fish ready to swallow the seamen. Prince Janaka can be seen on  the left with the goddess Manimekhala by his side. She is adorned with a red aura that is usually an attribute of the future Buddha or Buddhist saints, or sometimes kings who actively support Buddhism. She is reaching out to Janaka to rescue him from the dangerous waters after Janaka has vowed to follow the Eight Precepts.  <br><br><strong>Further reading:</strong><br><br>Ginsburg, H. 1989. <em>Thai manuscript painting</em>. London: The British Library.<br>Ginsburg, H. 2000. <em>Thai art and culture. Historic manuscripts from Western collections</em>. London: The British Library.<br>Napat Sirisambhand and Alec Gordon. 2001.  <em>Seeking Thai gender history: Using historical murals as a source of evidence</em>. IIAS Newsletter 24: 23.<br>Thongchai Rakpathum. 1983. <em>Rattanakosin painting</em>. Bangkok: Krom Silapakorn.</p>"}, {"type": "text", "data": "<i>This article first appeared on the British Library's Asian and African Studies </i><i><a class=\"link-external\" href=\"http://britishlibrary.typepad.co.uk/asian-and-african/2016/07/female-figures-in-thai-illustrations-of-buddhas-birth-tales-j%C4%81taka.html?utm_source=feedburner&amp;utm_medium=email&amp;utm_campaign=Feed%3A+asian-and-african+%28Asia+and+Africa%29\" rel=\"nofollow\" target=\"_blank\">blog</a>.</i>"}];
];
// var initBlock = [];

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
    if (toolbarBoundary.top - 39 < window.scrollY - toolbarBoundary.height) {
      if (this.toolbarNode.style.left === '0px') {
        return;
      }
      this.editor.style.paddingTop = toolbarBoundary.height + 'px';
      this.toolbarNode.style.position = 'fixed';
      this.toolbarNode.style.width = toolbarBoundary.width + 'px';
      this.toolbarNode.style.top =  '39px';
      this.toolbarNode.style.left =  toolbarBoundary.left +  'px';
      this.toolbarNode.style.right =  '0px';
    } else {
      // if (this.editor.style.paddingTop !== '') {
      //   return;
      // }
      console.log(window.scrollY, toolbarBoundary);
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
