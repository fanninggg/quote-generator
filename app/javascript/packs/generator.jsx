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
          <div className="checkbox-flex">
            <input type="checkbox" value="E-commerce" />
            <p className="no-margin">E-commerce </p>
            <p className="no-margin"> - What is this? </p>
          </div>
          <div className="checkbox-flex">
            <input type="checkbox" value="CMS" />
            <p className="no-margin">Content Management System </p>
            <p className="no-margin"> - What is this? </p>
          </div>
          <div className="checkbox-flex">
            <input type="checkbox" value="Blog" />
            <p className="no-margin">Blog </p>
            <p className="no-margin"> - What is this? </p>
          </div>
          <div className="checkbox-flex">
            <input type="checkbox" value="Events" />
            <p className="no-margin">Events </p>
            <p className="no-margin"> - What is this? </p>
          </div>
          <div className="checkbox-flex">
            <input type="checkbox" value="Specials" />
            <p className="no-margin">Specials </p>
            <p className="no-margin"> - What is this? </p>
          </div>
          <div className="checkbox-flex">
            <input type="checkbox" value="FAQs" />
            <p className="no-margin">FAQs </p>
            <p className="no-margin"> - What is this? </p>
          </div>
          <div className="checkbox-flex">
            <input type="checkbox" value="Portfolio" />
            <p className="no-margin">Portfolio </p>
            <p className="no-margin"> - What is this? </p>
          </div>
          <div className="checkbox-flex">
            <input type="checkbox" value="Careers" />
            <p className="no-margin">Careers/Jobs </p>
            <p className="no-margin"> - What is this? </p>
          </div>
        </form>
      )
    } else if (this.props.questionProp == 2) {
      return(
        <form action="">
          <div className="checkbox-flex">
            <input type="checkbox" value="Mailing" />
            <p className="no-margin">Mailing List Signup </p>
            <p className="no-margin"> - What is this? </p>
          </div>
          <div className="checkbox-flex">
            <input type="checkbox" value="Map" />
            <p className="no-margin">Map </p>
            <p className="no-margin"> - What is this? </p>
          </div>
          <div className="checkbox-flex">
            <input type="checkbox" value="Map locations" />
            <p className="no-margin">Map with multiple locations </p>
            <p className="no-margin"> - What is this? </p>
          </div>
          <div className="checkbox-flex">
            <input type="checkbox" value="Photo Gallery" />
            <p className="no-margin">Photo Gallery </p>
            <p className="no-margin"> - What is this? </p>
          </div>
          <div className="checkbox-flex">
            <input type="checkbox" value="Image/Video Carousel" />
            <p className="no-margin">Image/Video Carousel </p>
            <p className="no-margin"> - What is this? </p>
          </div>
        </form>
      )
    } else if (this.props.questionProp == 3) {
      return(
        <form action="">
          <input type="number" name="pages" min="1" max="50" />
        </form>
      )
    } else if (this.props.questionProp == 4) {
      return(
        <form action="">
          <div className="checkbox-flex">
            <input type="checkbox" value="Yes" />
            <p className="no-margin">Yes</p>
          </div>
          <div className="checkbox-flex">
            <input type="checkbox" value="No" />
            <p className="no-margin">No</p>
          </div>
          <br/>
          <label htmlFor="">How many pages do you plan having professionally designed on your website?</label>
          <input type="number" name="pages" min="1" max="50" />
        </form>
      )
    } else if (this.props.questionProp == 5) {
      return(
        <form action="">
          <div className="checkbox-flex">
            <input type="checkbox" value="Yes" />
            <p className="no-margin">Yes</p>
          </div>
          <div className="checkbox-flex">
            <input type="checkbox" value="No" />
            <p className="no-margin">No</p>
          </div>
          <br/>
          <label htmlFor="">For how many pages will a professional develop content?</label>
          <input type="number" name="pages" min="1" max="50" />
        </form>
      )
    } else if (this.props.questionProp == 6) {
      return(
        <form action="">
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
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

  renderBackButton() {
    if (this.props.stageProp > 0) {
      return(
        <p onClick={this.props.handleClick}>Previous</p>
      )
    }
  }

  render() {
    return(
      <div>
        {this.renderBackButton()}
      </div>
    )
  }
}

class NextButton extends React.Component {
  constructor(props) {
    super(props)
  }

  renderNextButton() {
    if (this.props.stageProp < 7) {
      return(
        <p onClick={this.props.handleClick}>Next</p>
      )
    }
  }

  render() {
    return(
      <div>
        {this.renderNextButton()}
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
    if (this.state.stage == 0) {
      return(
        <h1>Get Started</h1>
      )
    } else if (this.state.stage == 1) {
      return(
        <h1>Which services will your website require?</h1>
      )
    } else if (this.state.stage == 2) {
      return(
        <h1>Which features will your website require?</h1>
      )
    } else if (this.state.stage == 3) {
      return(
        <h1>How many extra pages does you site need? (Other than those needed for services and features)</h1>
      )
    } else if (this.state.stage == 4) {
      return(
        <h1>Do you have designs for all pages on your site already?</h1>
      )
    } else if (this.state.stage == 5) {
      return(
        <h1>Do you have content for all pages your site already?</h1>
      )
    } else if (this.state.stage == 6) {
      return(
        <h1>On a scale of 1-5 how important is ranking your website on the first page of Google </h1>
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
        <BackButton handleClick={this.previousStage.bind(this)} stageProp={this.state.stage}/>
        <NextButton handleClick={this.nextStage.bind(this)} stageProp={this.state.stage}/>
      </div>
    )
  }
}

export default Generator

