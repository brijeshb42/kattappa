(function(window) {
  var APP = window.LegoBlocks || {};

  var HR = React.createClass({

    render: function() {
      return (
        <hr className="legob-hr" />
      );
    }
  });

  APP.Blocks.HR = {
    Name: 'HR',
    React: HR,
    Icon: '',
    Empty: function() {
      return '';
    },
    Description: 'Break',
    isEmpty: function(content) {
      return true;
    }
  };
  window.LegoBlocks = APP;

})(window);
