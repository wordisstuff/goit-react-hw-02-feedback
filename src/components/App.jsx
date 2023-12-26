
import { Component } from "react"
import { Feadback } from "./Feedback/Feadback"
import { Statistics } from "./Feedback/Statistics"
import Notification from "./Notification/Notification"


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  reset = () => {
    return window.location.reload()
  }

  countFeedback = (key) => {
    this.setState((prev) => {
      return { [key]: prev[key] + 1 }
    })
  }

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad
  }

  countPositiveFeedbackPercentage = () => {
    return Math.floor(this.state.good * 100 / this.countTotalFeedback())
  }

  render() {
    return (
      <>
        <Feadback
          options={this.state}
          onLeaveFeedback={this.countFeedback}
          reset={this.reset}

        />
        {this.countTotalFeedback() > 0 ? (<Statistics
          countGood={this.state.good}
          countNeutral={this.state.neutral}
          countBad={this.state.bad}
          countTotalFeedback={this.countTotalFeedback}
          countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
        />)
          : (<Notification message="There is no feedback"></Notification>
          )
        }
      </>
    )
  }
}
