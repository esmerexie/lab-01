import { Component } from "react";

class Main extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <main>
                <img src={this.props.img} height={200} width={200}/>
               <h2>Title: {this.props.title}</h2>
               <p>Website Url: {this.props.website}</p>
               <p>Description: {this.props.description}</p>
            </main>
        )
    }
}

export default Main;