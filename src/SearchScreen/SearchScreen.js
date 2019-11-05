import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './store/actions/index';


class SearchScreen extends Component {
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


const mapStateToProps = state => {

};

const mapDispatchToProps = dispatch => {

};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);