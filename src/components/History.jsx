import React from "react";
import { connect } from "react-redux";
import {del} from '../actions/actions'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


class History extends React.Component {

    removeIt = (e) => {
        console.log(e)
        this.props.del(e);
      }

  render() {
    return (
      <div>
        <div class="ui three column grid">
          <div class="center aligned column">
            <i class="arrow left icon" />
            <Link to="/">История</Link>
          </div>
          <div class="column">
            {this.props.localArr.map(el => {
              return (
                <div class="ui grid">
                  <div className="ten wide column">
                    <img src={el.smallPic} />
                    <span onClick={()=>this.removeIt(el.title)} ><i class="archive icon"></i></span>

                  </div>
                  <div className="six wide column">
                    <h5>{el.title}</h5>
                    {el.date}
                  </div>
                </div>
              );
            })}
          </div>
          <div class="column" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    localArr: state.arrPictures
  };
};

const mapDispatchToProps = dispatch => {
    return {
      del: (title) => dispatch(del(title))
    };
  };



export default connect(mapStateToProps, mapDispatchToProps)(History);