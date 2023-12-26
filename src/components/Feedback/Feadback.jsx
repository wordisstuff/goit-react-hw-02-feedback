
import { Container } from "./Feadback.styled"


export const Feadback = ({ options, onLeaveFeedback, reset }) => {
    return <Container>
        <h1 onClick={reset}>please leave feedback</h1>
        <div>
            {Object.keys(options).map(key => <button key={key} onClick={() => onLeaveFeedback(key)}>{key}</button>)}
        </div>

    </Container>
};