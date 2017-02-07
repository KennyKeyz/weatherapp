var React = require('react');
var NavComponent= require('NavComponent');

/*
var Main = React.createClass({
  render :function(){
    return(
      <div>
        <NavComponent />

        {this.props.children}



      </div>



    );
  }

});*/

var Main =(props) => {

  return(
    <div>
      <NavComponent />
      <div className="row">
        <div className="columns medium-6 large-4 small-centered">
          {props.children}
        </div>
      </div>

          </div>

  );
}
module.exports = Main;
