import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {text: 'Subscribe'}

  clickBtn = () => {
    const {text} = this.state
    if (text === 'Subscribe') {
      return (text: 'Subscribed')
    }
    return (text: 'Subscribe')
  }

  render() {
    const {text} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <button className="btn" type="button" onClick={this.clickBtn}>
          {text}
        </button>
      </div>
    )
  }
}

export default Welcome
