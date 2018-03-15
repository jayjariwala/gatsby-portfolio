var React = require('react');
var Masonry = require('react-masonry-component');
 
var masonryOptions = {
    transitionDuration: 0
};
 
var style = {
    backgroundColor: 'white'
};
 
var Projects = React.createClass({
    handleClick: function() { },
    render: function () {
				const foo = 'abc,xyz,lmn'.split(",");
				console.log("This props >>>");
        console.log(this.props.projects);
        return (
            <Masonry
              className={'my-gallery-class'}
              style={style}
              onClick={this.handleClick}
            >
            <div className="card">
              <img src="http://placehold.it/350x150" />
              <div className="card__container">
                <h3 className="card__title">Clock</h3> 
                <div className="tags">
                  { foo.map((element) => ( 
                    <span>html</span>
                  ))}
                  </div>
                  <div className="button-wrapper">
                    <button className="button button--black button--small">Source Code</button>
                    <button className="button button--green button--small">View</button>
                  </div>
                </div>
            </div>
            </Masonry>
        );
    }
});
 
module.exports = Projects;

