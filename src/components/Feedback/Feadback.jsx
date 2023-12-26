
import { Container } from "./Feadback.styled"


export const Feadback = ({ options, onLeaveFeedback }) => {
    return <Container>
        <div>
            {Object.keys(options).map(key => <button key={key} onClick={() => onLeaveFeedback(key)}>{key}</button>)}
        </div>
    </Container>
};