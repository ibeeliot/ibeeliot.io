import PropTypes from 'prop-types';
import React from 'react';
import './Slide.css';

const Wrapper = props => {
  return (
    <div
      className={props.className}
      style={Object.assign({}, props.style, {
        height: props.height,
        touchAction: 'none',
        overflow: 'hidden'
      })}
    >
      {props.children}
    </div>
  );
};
class Slide extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    height: PropTypes.string
  };

  static defaultProps = {
    height: '100%',
    className: ''
  };

  render() {
    return (
      <Wrapper
        {...this.props}
        style={Object.assign({}, this.props.style, {
          height: this.props.height,
          touchAction: 'none',
          overflow: 'hidden'
        })}
      >
        {this.props.children}
      </Wrapper>
    );
  }
}

module.exports = Slide;
