(function(window) {
  var APP = window.Kattappa || {};

  var HR = React.createClass({

    render: function() {
      return (
        <hr className="katap-hr" />
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
  window.Kattappa = APP;

})(window);
