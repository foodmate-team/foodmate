import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './store/actions/index';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  clickHandler = () => {
    const {testAction, test} = this.props;


    if (test === 'alex') {
      testAction('alex1');
      return;
    }

    testAction('alex');
  };

  render () {
    const {test} = this.props;

    return (
      <Router>
        <div onClick={this.clickHandler}>
          some text
        </div>

        <Switch>
          <Route path="/test">
            <Test />
          </Route>
        </Switch>
      </Router>
    );
  }
}

function Test() {
  return <div>hey</div>;
}

const mapStateToProps = state => {
  return {
    test: state.test,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    testAction: (data) => dispatch(actionCreators.testAction(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);