// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
    const btnText="Subscribe"
    
  changeState = () => {
      this.setState(prevState=>{
        return {btnText==="Subscribe"?<button type="button">Subscribed</button>:<button type="button">Subscribe</button>}
      })
     
  }

  render() {
    const {isSubscribed} = this.state
    return (
      <div className="bg">
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        {this.changeState()}
      </div>
    )
  }
}

export default Welcome
