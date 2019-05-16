import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Tooltip from 'react-png-tooltip'

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
            <label htmlFor="E-Commerce_checkbox"><div className="spacer"></div>
              E-Commerce
              <Tooltip shouldDisableHover={true}>
                <div>
                  <p>I am a test tooltip for E-Commerce</p>
                  <a href="https://www.hoxton-digital.com" target="_blank">I am a test link</a>
                </div>
              </Tooltip>
            </label>
          </div>
          <div className="checkbox">
            <input type="checkbox" value="CMS" id="CMS_checkbox" checked={this.state.cms} onChange={() => this.toggleCheckbox('cms')}/>
            <label htmlFor="CMS_checkbox"><div className="spacer"></div>CMS</label>
            <Tooltip shouldDisableHover={true}>
              <div>
                <p>I am a test tooltip for CMS</p>
                <a href="https://www.hoxton-digital.com" target="_blank">I am a test link</a>
              </div>
            </Tooltip>
          </div>
          <div className="checkbox">
            <input type="checkbox" value="Blog" id="Blog_checkbox" checked={this.state.blog} onChange={() => this.toggleCheckbox('blog')}/>
            <label htmlFor="Blog_checkbox"><div className="spacer"></div>Blog</label>
            <Tooltip shouldDisableHover={true}>
              <div>
                <p>I am a test tooltip for blogs</p>
                <a href="https://www.hoxton-digital.com" target="_blank">I am a test link</a>
              </div>
            </Tooltip>
          </div>
          <div className="checkbox">
            <input type="checkbox" value="Events" id="Events_checkbox" checked={this.state.events} onChange={() => this.toggleCheckbox('events')}/>
            <label htmlFor="Events_checkbox"><div className="spacer"></div>Events</label>
            <Tooltip shouldDisableHover={true}>
              <div>
                <p>I am a test tooltip for events</p>
                <a href="https://www.hoxton-digital.com" target="_blank">I am a test link</a>
              </div>
            </Tooltip>
          </div>
          <div className="checkbox">
            <input type="checkbox" value="FAQs" id="FAQs_checkbox" checked={this.state.faqs} onChange={() => this.toggleCheckbox('faqs')}/>
            <label htmlFor="FAQs_checkbox"><div className="spacer"></div>FAQs</label>
            <Tooltip shouldDisableHover={true}>
              <div>
                <p>I am a test tooltip for FAQs</p>
                <a href="https://www.hoxton-digital.com" target="_blank">I am a test link</a>
              </div>
            </Tooltip>
          </div>
          <div className="checkbox">
            <input type="checkbox" value="Portfolio" id="Portfolio_checkbox" checked={this.state.portfolio} onChange={() => this.toggleCheckbox('portfolio')}/>
            <label htmlFor="Portfolio_checkbox"><div className="spacer"></div>Portfolio</label>
            <Tooltip shouldDisableHover={true}>
              <div>
                <p>I am a test tooltip for portfolios</p>
                <a href="https://www.hoxton-digital.com" target="_blank">I am a test link</a>
              </div>
            </Tooltip>
          </div>
          <div className="checkbox">
            <input type="checkbox" value="Careers" id="Careers_checkbox" checked={this.state.careers} onChange={() => this.toggleCheckbox('careers')}/>
            <label htmlFor="Careers_checkbox"><div className="spacer"></div>Careers</label>
            <Tooltip shouldDisableHover={true}>
              <div>
                <p>I am a test tooltip for careers</p>
                <a href="https://www.hoxton-digital.com" target="_blank">I am a test link</a>
              </div>
            </Tooltip>
          </div>
        </form>
      )
    } else if (this.props.questionProp == 2) {
      return(
        <form action="">
          <div className="checkbox">
            <input type="checkbox" value="Mailing" id="Mailing_checkbox" checked={this.state.mailingList} onChange={() => this.toggleCheckbox('mailingList')}/>
            <label htmlFor="Mailing_checkbox"><div className="spacer"></div>Mailing List Signup</label>
          </div>
          <div className="checkbox">
            <input type="checkbox" value="Map" id="Map_checkbox" checked={this.state.map} onChange={() => this.toggleCheckbox('map')}/>
            <label htmlFor="Map_checkbox"><div className="spacer"></div>Map</label>
          </div>
          <div className="checkbox">
            <input type="checkbox" value="Map locations" id="Dynamic_map_checkbox" checked={this.state.mapLocations} onChange={() => this.toggleCheckbox('mapLocations')}/>
            <label htmlFor="Dynamic_map_checkbox"><div className="spacer"></div>Dynamic Map</label>
          </div>
          <div className="checkbox">
            <input type="checkbox" value="Photo Gallery" id="Gallery_checkbox" checked={this.state.gallery} onChange={() => this.toggleCheckbox('gallery')}/>
            <label htmlFor="Gallery_checkbox"><div className="spacer"></div>Photo Gallery</label>
          </div>
          <div className="checkbox">
            <input type="checkbox" value="Image/Video Carousel" id="Carousel_checkbox" checked={this.state.carousel} onChange={() => this.toggleCheckbox('carousel')}/>
            <label htmlFor="Carousel_checkbox"><div className="spacer"></div>Image/Video Carousel</label>
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
          <div className="checkbox">
            <input type="checkbox" id="Designs_yes_checkbox" value="Yes" />
            <label htmlFor="Designs_yes_checkbox"><div className="spacer"></div>Yes</label>
          </div>
          <div className="checkbox">
            <input type="checkbox" id="Designs_no_checkbox" value="No" />
            <label htmlFor="Designs_no_checkbox"><div className="spacer"></div>No</label>
          </div>
          <br/>
          <label htmlFor="">How many pages do you plan having professionally designed on your website?</label>
          <input type="number" name="pages" min="0" max="50" value={this.state.designPages} onChange={(e) => this.updateValue('designPages', e.currentTarget.value)}/>
        </form>
      )
    } else if (this.props.questionProp == 5) {
      return(
        <form action="">
          <div className="checkbox">
            <input type="checkbox" id="Content_yes_checkbox" value="Yes" />
            <label htmlFor="Content_yes_checkbox"><div className="spacer"></div>Yes</label>
          </div>
          <div className="checkbox">
            <input type="checkbox" id="Content_no_checkbox" value="No" />
            <label htmlFor="Content_no_checkbox"><div className="spacer"></div>No</label>
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
        <h1 className="generator-question">Get Started</h1>
      )
    } else if (this.state.stage == 1) {
      return(
        <h1 className="generator-question">Which services will your website require?</h1>
      )
    } else if (this.state.stage == 2) {
      return(
        <h1 className="generator-question">Which features will your website require?</h1>
      )
    } else if (this.state.stage == 3) {
      return(
        <h1 className="generator-question">Will you site require extra pages beyond those selected previously? If so, how many?</h1>
      )
    } else if (this.state.stage == 4) {
      return(
        <h1 className="generator-question">Do you have designs for all pages on your site already?</h1>
      )
    } else if (this.state.stage == 5) {
      return(
        <h1 className="generator-question">Do you have content for all pages your site already?</h1>
      )
    } else if (this.state.stage == 6) {
      return(
        <h1 className="generator-question">On a scale of 1-5 how important is ranking your website on the first page of Google </h1>
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
          <p className="generator-para">This is the question we get asked more than any other and it's kind of like asking a builder how much a house will cost without giving them any blueprints. However, if you could tell a builder how many rooms the house will have, what materials it will be made from and whether it will have any special features then they could probably give you a rough estimate. That's the idea here as well. If you tell us a few things about the website you want to build we will give you an estimate of how much it will cost. </p>
          <p className="generator-para">If you are in the market for a mobile app or something a bit more complex than the average website, then you are probably better off talking to us directly here. This tool is designed to give a ballpark figure for projects, it is to help you with budgeting and discovery, it does not provide a hard estimate, if you want to get an exact figure then we would be happy to meet up for a chat about specifics.  </p>
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

