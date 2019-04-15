import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Projects from '../components/Projects'

class ProjectPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      options: [],
      cards: [],
    }
    this.changeOption = this.changeOption.bind(this)
  }

  componentWillMount() {
    const cards = this.props.data.allMarkdownRemark.edges
    const options = new Set()
    cards.forEach(card => {
      const techString = card.node.frontmatter.technology
      const techArray = techString.split(',')
      techArray.forEach(tech => {
        options.add(tech)
      })
    })

    this.setState({
      options: Array.from(options),
      cards: this.props.data.allMarkdownRemark.edges,
    })
  }

  changeOption(e) {
    const selectedTech = e.target.value
    if (selectedTech === 'all') {
      this.setState({
        cards: this.props.data.allMarkdownRemark.edges,
      })
    } else {
      const allCards = this.props.data.allMarkdownRemark.edges
      const filteredCards = allCards.filter(card => {
        const tech = card.node.frontmatter.technology.split(',')
        return tech.includes(selectedTech)
      })
      this.setState({
        cards: filteredCards,
      })
    }
  }

  render() {
    const data = this.props.data
    const cards = data.allMarkdownRemark.edges
    console.log(cards)
    return (
      <div>
        <Helmet
          title="Jay Jariwala | Projects"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <div className="content">
          <h1 className="content__heading">Projects</h1>
          <em>Technology:</em>
          <select
            name="technologies"
            onChange={this.changeOption}
            className="content__dropdown"
          >
            <option key="all" value="all">
              All
            </option>
            {this.state.options.map(each => {
              return (
                <option key={each} value={each}>
                  {each}
                </option>
              )
            })}
          </select>
          <Projects projects={this.state.cards} />
        </div>
      </div>
    )
  }
}

export default ProjectPage

export const query = graphql`
  query projectsQuery {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "project" } } }) {
      edges {
        node {
          id
          frontmatter {
            title
            thumbnail
            technology
            type
            github
            website
          }
          html
        }
      }
    }
  }
`
