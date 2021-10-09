
import ListEmployee from './components/ListEmployee.jsx';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AddEmployee from './components/AddEmployee';
function App() {
  return (
    <div>
      <Router>
        <div className="container-fluid">
          <Header />
          <div className="container-fluid">
            <Switch>
              <Route path="/" exact component={ListEmployee}></Route>
              <Route path="/employees" component={ListEmployee}></Route>
              <Route path="/add-employee" component={AddEmployee}></Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </div>

  );
}

export default App;
