var React = require('react');

var WeatherMessage= React.createClass({

  render :function(){
    var {temp,location}=this.props;
    return(
      <div>
        <h4 className="text-center">the temperature of {location} is {temp}</h4>
      </div>
    );

  }
});

module.exports = WeatherMessage;
