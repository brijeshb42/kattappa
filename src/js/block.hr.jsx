(function(window) {
  var APP = window.Katappa || {};

  var HR = React.createClass({

    render: function() {
      return (
        <hr className="kataphr" />
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
  window.Katappa = APP;

})(window);
