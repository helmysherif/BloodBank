import React , {Component}from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import Container from './Containers/Container/Container';
class App extends Component {
  render(){
    return (
      <div className="App">
        <Layout>
          <Container />
        </Layout>
      </div>
    );
  }
}
export default App;