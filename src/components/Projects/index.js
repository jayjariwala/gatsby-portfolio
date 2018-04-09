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
				const data = this.props.projects.allMarkdownRemark.edges;
				console.log(data);
        return (
            <Masonry
              className={'my-gallery-class'}
              style={style}
              onClick={this.handleClick}
            >
				{
					data.map((card , index) => (	
						<div className="card" key={index}>
							<img src={card.node.frontmatter.thumbnail} />
							<div className="card__container">
								<h3 className="card__title">{card.node.frontmatter.title}</h3> 
								<div className="tags">
									{card.node.frontmatter.technology.split(",").map( (tech, index) => (
									<span className="tags__tag" key={index} >{tech}</span>
									))}
								</div>
								<div className="button-wrapper">
									<a href={card.node.frontmatter.website} target="__blank">
									<button className="button button--green button--small">Website</button>
									</a>
									<a href={card.node.frontmatter.github} target="__blank">
									<button className="button button--black button--small">Source Code</button>
									</a>
								</div>
							</div>
            			</div>
					))
				}
            </Masonry>
        );
    }
});
 
module.exports = Projects;

