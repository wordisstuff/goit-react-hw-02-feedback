import { Container } from "./Statistics.styled"
import { Color } from "components/color/colorStatistic";
 
export const Statistics = ({ countGood, countNeutral, countBad, countTotalFeedback, countPositiveFeedbackPercentage }) => {
    return <Container>
        <h2>statistics</h2>
        <ul><span></span>
            <li>good: <span>{countGood}</span></li>
            <li>neutral: <span>{countNeutral}</span></li>
            <li >bad: <span>{countBad}</span></li>
        </ul>
        <div>
            <ul>
                <li>total: <span>{countTotalFeedback()}</span></li>
                <li >positive feedback: <span
                    style={{ color: `${Color(countPositiveFeedbackPercentage())}` }}
                >%{countPositiveFeedbackPercentage()}</span></li>
            </ul>
        </div>

    </Container >
};