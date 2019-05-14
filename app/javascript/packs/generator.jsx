import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Question extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      price: 0,
      needToRecalc: false,
      eCommerce: false,
      cms: false,
      blog: false,
      events: false,
      faqs: false,
      portfolio: false,
      careers: false,
      mailingList: false,
      map: false,
      mapLocations: false,
      gallery: false,
      carousel: false,
      extraPages: 0,
      designPages: 0,
      contentPages: 0,
      seo: 0
    }
  }

  componentDidUpdate() {
    if (this.state.needToRecalc) {
      this.calcPrice()
    }
  }

  onSubmit() {
    console.log('test')
  }

  toggleCheckbox(prop) {
    let toToggle = { needToRecalc: true }
    toToggle[prop] = !this.state[prop]
    this.setState(toToggle)
  }

  updateValue(prop, value) {
    let toUpdate = { needToRecalc: true }
    toUpdate[prop] = value
    this.setState(toUpdate)
  }

  calcPrice() {
    const priceList = {
      eCommerce: 5000,
      cms: 2000,
      blog: 20000,
      events: 500,
      faqs: 500,
      portfolio: 2000,
      careers: 3000,
      mailingList: 300,
      map: 500,
      mapLocations: 300,
      gallery: 600,
      carousel: 600,
      extraPages: 400,
      designPages: 200,
      contentPages: 300,
      seo: 150
    }
    let price = 0
    const keys = Object.keys(this.state)
    keys.forEach(key => {
      if (this.state[key]) {
        if (typeof this.state[key] === 'string') {
          price += priceList[key] * Number(this.state[key])
        } else {
          price += priceList[key] || 0
        }
      }
    })
    this.setState({ price, needToRecalc: false })
    console.log(price)
  }

  renderQuestion() {
    if (this.props.questionProp == 0) {
      return (
        <h3>Get Started</h3>
      )
    } else if (this.props.questionProp == 1) {
      return (
        <form action="">
          <div className="checkbox">
            <input type="checkbox" value="E-commerce" id="E-Commerce_checkbox" checked={this.state.eCommerce} onChange={() => this.toggleCheckbox('eCommerce')}/>
            <label htmlFor="E-Commerce_checkbox"><div className="spacer"></div>E-Commerce</label>
          </div>
          <div className="checkbox">
            <input type="checkbox" value="CMS" id="CMS_checkbox" checked={this.state.cms} onChange={() => this.toggleCheckbox('cms')}/>
            <label htmlFor="CMS_checkbox"><div className="spacer"></div>CMS</label>
          </div>
          <div className="checkbox">
            <input type="checkbox" value="Blog" id="Blog_checkbox" checked={this.state.blog} onChange={() => this.toggleCheckbox('blog')}/>
            <label htmlFor="Blog_checkbox"><div className="spacer"></div>Blog</label>
          </div>
          <div className="checkbox">
            <input type="checkbox" value="Events" id="Events_checkbox" checked={this.state.events} onChange={() => this.toggleCheckbox('events')}/>
            <label htmlFor="Events_checkbox"><div className="spacer"></div>Events</label>
          </div>
          <div className="checkbox">
            <input type="checkbox" value="FAQs" id="FAQs_checkbox" checked={this.state.faqs} onChange={() => this.toggleCheckbox('faqs')}/>
            <label htmlFor="FAQs_checkbox"><div className="spacer"></div>FAQs</label>
          </div>
          <div className="checkbox">
            <input type="checkbox" value="Portfolio" id="Portfolio_checkbox" checked={this.state.portfolio} onChange={() => this.toggleCheckbox('portfolio')}/>
            <label htmlFor="Portfolio_checkbox"><div className="spacer"></div>Portfolio</label>
          </div>
          <div className="checkbox">
            <input type="checkbox" value="Careers" id="Careers_checkbox" checked={this.state.careers} onChange={() => this.toggleCheckbox('careers')}/>
            <label htmlFor="Careers_checkbox"><div className="spacer"></div>Careers</label>
          </div>
        </form>
      )
    } else if (this.props.questionProp == 2) {
      return(
        <form action="">
          <div className="checkbox-flex checkbox">
            <input type="checkbox" value="Mailing" checked={this.state.mailingList} onChange={() => this.toggleCheckbox('mailingList')}/>
            <p className="no-margin">Mailing List Signup </p>
            <p className="no-margin"> - What is this? </p>
          </div>
          <div className="checkbox-flex">
            <input type="checkbox" value="Map" checked={this.state.map} onChange={() => this.toggleCheckbox('map')}/>
            <p className="no-margin">Map </p>
            <p className="no-margin"> - What is this? </p>
          </div>
          <div className="checkbox-flex">
            <input type="checkbox" value="Map locations" checked={this.state.mapLocations} onChange={() => this.toggleCheckbox('mapLocations')}/>
            <p className="no-margin">Map with multiple locations </p>
            <p className="no-margin"> - What is this? </p>
          </div>
          <div className="checkbox-flex">
            <input type="checkbox" value="Photo Gallery" checked={this.state.gallery} onChange={() => this.toggleCheckbox('gallery')}/>
            <p className="no-margin">Photo Gallery </p>
            <p className="no-margin"> - What is this? </p>
          </div>
          <div className="checkbox-flex">
            <input type="checkbox" value="Image/Video Carousel" checked={this.state.carousel} onChange={() => this.toggleCheckbox('carousel')}/>
            <p className="no-margin">Image/Video Carousel </p>
            <p className="no-margin"> - What is this? </p>
          </div>
        </form>
      )
    } else if (this.props.questionProp == 3) {
      return(
        <form action="" onSubmit={this.onSubmit.bind(this)}>
          <input type="number" name="pages" min="0" max="50" value={this.state.extraPages} onChange={(e) => this.updateValue('extraPages', e.currentTarget.value)}/>
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
          <input type="number" name="pages" min="0" max="50" value={this.state.designPages} onChange={(e) => this.updateValue('designPages', e.currentTarget.value)}/>
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
          <input type="number" name="pages" min="1" max="50" value={this.state.contentPages} onChange={(e) => this.updateValue('contentPages', e.currentTarget.value)}/>
        </form>
      )
    } else if (this.props.questionProp == 6) {
      return(
        <form action="">
          <select value={this.state.contentPages} onChange={(e) => this.updateValue('contentPages', e.currentTarget.value)}>
            <option value="1">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </form>
      )
    } else if (this.props.questionProp == 7) {
      return (
        <div>
          <h3>This price is:</h3>
          <h2>£{this.state.price}</h2>
        </div>
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
        <div className="generator-button" onClick={this.props.handleClick}>
          <div className="generator-button-inner">
            <p>Previous</p>
          </div>
        </div>
      )
    } else {
      return(
        <div className="generator-button hidden" onClick={this.props.handleClick}>
          <div className="generator-button-inner">
            <p>Previous</p>
          </div>
        </div>
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
        <div className="generator-button" onClick={this.props.handleClick}>
          <div className="generator-button-inner">
            <p>Next</p>
          </div>
        </div>
      )
    } else {
      return(
        <div className="generator-button hidden" onClick={this.props.handleClick}>
          <div className="generator-button-inner">
            <p>Next</p>
          </div>
        </div>
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
      <div className="generator-container">
        <div>
          <h1 className="">Free Website Quote Generator</h1>
          <h3>How much does a website cost?</h3>
          <p>This is the question we get asked more than any other and it's kind of like asking a builder how much a house will cost without giving them any blueprints. However, if you could tell a builder how many rooms the house will have, what materials it will be made from and whether it will have any special features then they could probably give you a rough estimate. That's the idea here as well. If you tell us a few things about the website you want to build we will give you an estimate of how much it will cost. </p>
          <p>If you are in the market for a mobile app or something a bit more complex than the average website, then you are probably better off talking to us directly here. This tool is designed to give a ballpark figure for projects, it is to help you with budgeting and discovery, it does not provide a hard estimate, if you want to get an exact figure then we would be happy to meet up for a chat about specifics.  </p>
        </div>
        <div className="react-section">
          <div className="question-section">
            {this.renderTitle()}
            <Question questionProp={this.state.stage} />
          </div>
          <div className="buttons">
            <BackButton handleClick={this.previousStage.bind(this)} stageProp={this.state.stage}/>
            <NextButton handleClick={this.nextStage.bind(this)} stageProp={this.state.stage}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Generator

