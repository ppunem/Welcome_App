// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: true}

  subscriptionButton = () => {
    const {isSubscribed} = this.state
    subscriptionButton=()=>{
        this.setState(prevState=>{
            if (isSubscribed===true){
                return (
                    {prevState.isSubscribed:false}
                    <button type="button">Subscribed</button>
                )
            }
            else{
                return (
                    {this.isSubscribed:true}
                    <button type="button">Subscribe</button>
                )
            }
        })
    }
  }

  render() {
    return (
      <div className="bg">
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        <button type="button" onClick={this.subscriptionButton}>
          Subscribe
        </button>
      </div>
    )
  }
}

export default Welcome
