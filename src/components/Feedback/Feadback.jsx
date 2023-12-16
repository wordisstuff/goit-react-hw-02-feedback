
import { Container } from "./Feadback.styled"


export const Feadback = ({ showeStatistics, countGood, countNeutral, countBad, reset }) => {

    return <Container>
        <h1 onClick={reset}>please leave feedback</h1>
        <div onClick={showeStatistics}>
            <button onClick={countGood}>good</button>
            <button onClick={countNeutral} >neutral</button>
            <button onClick={countBad}>bad</button>
        </div>
    </Container>
};