import { Component } from "react";
import { Container } from "./Section.styled";



class Section extends Component {
    state = {}
    render() {
        return (
            <Container>
                <h1 onClick={this.props.reset}>{this.props.title}</h1>
                {this.props.children}
            </Container>
        );
    }
}

export default Section;