import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Question extends React.Component {
  constructor(props) {
    super(props)
  }

  renderQuestion() {
    if (this.props.questionProp == 0) {
      return (
        <h3>Get Started</h3>
      )
    } else if (this.props.questionProp == 1) {
      return (
        <form action="">
          <label htmlFor="">Does you website need any of the following?</label>
          <br/>
          <div className="checkbox-flex">
            <input type="checkbox" value="E-commerce" />
            <p className="no-margin">E-commerce</p>
            <p className="no-margin"> - What is this? </p>
          </div>
          <div className="checkbox-flex">
            <input type="checkbox" value="CMS" />
            <p className="no-margin">Content Management System</p>
            <p className="no-margin"> - What is this? </p>
          </div>
          <div className="checkbox-flex">
            <input type="checkbox" value="Blog" />
            <p className="no-margin">Blog</p>
            <p className="no-margin"> - What is this? </p>
          </div>
          <div className="checkbox-flex">
            <input type="checkbox" value="Events" />
            <p className="no-margin">Events</p>
            <p className="no-margin"> - What is this? </p>
          </div>
          <div className="checkbox-flex">
            <input type="checkbox" value="Specials" />
            <p className="no-margin">Specials</p>
            <p className="no-margin"> - What is this? </p>
          </div>
          <div className="checkbox-flex">
            <input type="checkbox" value="FAQs" />
            <p className="no-margin">FAQs</p>
            <p className="no-margin"> - What is this? </p>
          </div>
          <div className="checkbox-flex">
            <input type="checkbox" value="Portfolio" />
            <p className="no-margin">Portfolio</p>
            <p className="no-margin"> - What is this? </p>
          </div>
          <div className="checkbox-flex">
            <input type="checkbox" value="Careers" />
            <p className="no-margin">Careers/Jobs</p>
            <p className="no-margin"> - What is this? </p>
          </div>
        </form>
      )
    } else if (this.props.questionProp == 2) {
      return(
        <form action="">
          <label htmlFor="">What types of additional functionality do you need on your site?</label>
          <br/>
          <div className="checkbox-flex">
            <input type="checkbox" value="Mailing" />
            <p className="no-margin">Mailing List Signup</p>
            <p className="no-margin"> - What is this? </p>
          </div>
          <div className="checkbox-flex">
            <input type="checkbox" value="Map" />
            <p className="no-margin">Map</p>
            <p className="no-margin"> - What is this? </p>
          </div>
          <div className="checkbox-flex">
            <input type="checkbox" value="Map locations" />
            <p className="no-margin">Map with multiple locations</p>
            <p className="no-margin"> - What is this? </p>
          </div>
          <div className="checkbox-flex">
            <input type="checkbox" value="Photo Gallery" />
            <p className="no-margin">Photo Gallery</p>
            <p className="no-margin"> - What is this? </p>
          </div>
          <div className="checkbox-flex">
            <input type="checkbox" value="Image/Video Carousel" />
            <p className="no-margin">Image/Video Carousel</p>
            <p className="no-margin"> - What is this? </p>
          </div>
        </form>
      )
    }
  }

  render() {
    return(
      <div>
        {this.renderQuestion()}
      </div>
    )
  }
}

class BackButton extends React.Component {
    constructor(props) {
      super(props)
    }

  render() {
    return(
      <div>
        <p onClick={this.props.handleClick}>Previous</p>
      </div>
    )
  }
}

class NextButton extends React.Component {
    constructor(props) {
      super(props)
    }

  render() {
    return(
      <div>
        <p onClick={this.props.handleClick}>Next</p>
      </div>
    )
  }
}

class Generator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stage: 0
    }
  }

  renderTitle() {
    console.log('called')
    if (this.state.stage == 0) {
      return(
        <h1>Which services will your website require?</h1>
      )
    } else if (this.state.stage == 1) {
      return(
        <h1>Which services will your website require?</h1>
      )
    } else if (this.state.stage == 2) {
      return(
        <h1>Which features will your website require?</h1>
      )
    }
  }

  previousStage() {
    this.setState({stage: this.state.stage - 1})
  }

  nextStage() {
    this.setState({stage: this.state.stage + 1})
  }

  render() {
    console.log(this.state.stage)
    return(
      <div>
        {this.renderTitle()}
        <Question questionProp={this.state.stage} />
        <BackButton handleClick={this.previousStage.bind(this)}/>
        <NextButton handleClick={this.nextStage.bind(this)}/>
      </div>
    )
  }
}

export default Generator

