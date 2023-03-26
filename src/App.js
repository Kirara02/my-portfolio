import './App.css';
import ReactGA from 'react-ga';
import $ from 'jquery'
import { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Particle from './components/Particle';
import Contact from './components/Contact';
import Resume from './components/Resume';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData(){
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({
          resumeData : data
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    })
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Particle/>
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Contact data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />

      </div>
    )
  }
}

export default App;
