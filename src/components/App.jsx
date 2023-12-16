
import { Component } from "react"
import { Feadback } from "./Feedback/Feadback"
import { Statistics } from "./Feedback/Statistics"


export class App extends Component {
  state = {
    isShowStatistics: false,
    good: 0,
    neutral: 0,
    bad: 0

  }
  reset = () => {
    return window.location.reload()
  }
  showeStatistics = () => {
    this.setState({ isShowStatistics: true })
  }
  countGood = () => {
    return this.setState((prev) => {
      return {
        good: prev.good + 1
      }
    })
  }
  countNeutral = () => {
    return this.setState((prev) => {
      return { neutral: prev.neutral + 1 }
    })
  }
  countBad = () => {
    return this.setState((prev) => {
      return { bad: prev.bad + 1 }
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
          showeStatistics={this.showeStatistics}
          countGood={this.countGood}
          countNeutral={this.countNeutral}
          countBad={this.countBad}
          reset={this.reset}

        />
        {this.state.isShowStatistics && <Statistics
          countGood={this.state.good}
          countNeutral={this.state.neutral}
          countBad={this.state.bad}
          countTotalFeedback={this.countTotalFeedback}
          countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
        />}
      </>
    )
  }
}
