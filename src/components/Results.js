import { Component } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Results extends Component {

    render(){
        return(
            <Card>
              <Card.Img variant="top" src={this.props.currentBeast.image_url} width={300} height={300}/>
              <Card.Body>
                <Card.Text>
                    This is a scary beast
                </Card.Text>
                <Button variant="primary">Like this Image</Button>
              </Card.Body>
            </Card>
        )
    }
}

export default Results;