var React = require('react');

/*
var About = React.createClass({
  render:function(){
    return(
<h3>About Compnent</h3>

    );
  }
}) */

var About =(props) => {
  return(
    <div>
    <h1 className="text-center page-title">About</h1>
      <p> Welcome to the About page.Cool App</p>
      <p>Here are some of the tools </p>
      <ul>

<li>
<a href="https://facebook.github.io/react">This was the JS framework used</a>
</li>
<li>
<a href="http://openweathermap.org">Open Weather Map</a> to search by city name
</li>
      </ul>

    </div>


  );
}
module.exports = About;
