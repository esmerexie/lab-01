import { Component } from "react";
import list from '../data.json';
import BeastList from '../components/BeastList';
import Results from '../components/Results';

class Main extends Component {
    constructor(){
        super()
        this.state = {
            currentBeast: { image_url: null},
            beastList: list,
            votes: 0
        }
    }

  selectCurrentBeast = (beast) => {
    this.setState({ currentBeast: beast });
  }

    render() {
        console.log(this.state.currentBeast);
        return (
    <div id="main">
        <Results currentBeast={this.state.currentBeast}/>
        <BeastList beasts={this.state.beastList} selectBeast={this.selectCurrentBeast}/>
    </div>
        )
    }
}

export default Main;