import React from "react";
import { connect } from "react-redux";

class CasesPage extends React.Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return <div>Cases</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps)(CasesPage);
