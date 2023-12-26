import { Component } from "react";
import { Container } from "./Notification.styled";



class Notification extends Component {
    render() {
        return (<Container>
            <p>{this.props.message}</p>
        </Container>);
    }
}

export default Notification;