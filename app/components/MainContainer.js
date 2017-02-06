import React from 'react';
import styles from '../styles';

class MainContainer extends React.Component {
  render() {
    return (
      <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
        {this.props.children}
      </div>
    )
  }
}

export default MainContainer;
