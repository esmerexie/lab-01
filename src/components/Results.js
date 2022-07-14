import { Component } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Results extends Component {
  constructor(){
    super();
    this.state = {favorite: 0};
  }

  handleClick = (e) => {
    this.setState({favorite: this.state.favorite + 1});
  }


    render(){
        return(
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={this.props.currentBeast.image_url} width={300} height={300}/>
              <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>This is a scary beast</Card.Text>
                <Card.Text>Favorite: {this.state.favorite}</Card.Text>
                <Button variant="primary" onClick= {this.handleClick}>Like this Image</Button>
              </Card.Body>
            </Card>
        )
    }
}

export default Results;