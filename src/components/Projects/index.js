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
        return (
            <Masonry
                className={'my-gallery-class'}
                style={style}
                onClick={this.handleClick}
            >
            <div className="card">
                <img src="http://placehold.it/350x350" />
                <div className="card__container">
                  <h4>Clock</h4> 
                  <div className="tags">
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                  </div>
                </div>
              </div>

               <div className="card">
                <img src="http://placehold.it/350x350" />
                <div className="card__container">
                  <h4>Clock</h4> 
                  <div className="tags">
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                  </div>
                </div>
              </div>

               <div className="card">
                <img src="http://placehold.it/350x350" />
                <div className="card__container">
                  <h4>Clock</h4> 
                  <div className="tags">
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                  </div>
                </div>
              </div>

               <div className="card">
                <img src="http://placehold.it/350x350" />
                <div className="card__container">
                  <h4>Clock</h4> 
                  <div className="tags">
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                  </div>
                </div>
              </div>


               <div className="card">
                <img src="http://placehold.it/350x350" />
                <div className="card__container">
                  <h4>Clock</h4> 
                  <div className="tags">
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                  </div>
                </div>
              </div>


               <div className="card">
                <img src="http://placehold.it/350x350" />
                <div className="card__container">
                  <h4>Clock</h4> 
                  <div className="tags">
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                    <span className="tags__tag">html</span>
                  </div>
                </div>
              </div>
            </Masonry>
        );
    }
});
 
module.exports = Projects;