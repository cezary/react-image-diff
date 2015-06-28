import React, { Component, PropTypes } from 'react';
import objectAssign from 'object-assign';
import bgImage from './bg.png';

export default class ImageDiff extends Component {
  constructor() {
    super();
    this.handleImgLoad = this.handleImgLoad.bind(this);
  }

  componentWillMount() {
    this.setState({
      height: this.props.height,
      width: this.props.width
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      height: nextProps.height || this.state.height,
      width: nextProps.width || this.state.width
    });
  }

  handleImgLoad(ref) {
    return () => {
      if (!this.props.height && !this.props.width) {
        let {height, width} = React.findDOMNode(this.refs[ref]);
        this.setState({
          height, width
        });
      }
    }
  }

  render() {
    return (
      <div className='ImageDiff' style={{display: 'inline-block', height: this.state.height, width: this.state.width}}>
        {this.props.type === 'fade' ? this.renderFade() : this.renderSwipe()}
      </div>
    );
  }

  renderFade() {
    let style = {
      backgroundImage: `url(${bgImage})`,
      height: this.state.height,
      margin: 0,
      position: 'absolute',
      width: this.state.width
    };

    let beforeStyle = objectAssign({
      border: '1px solid #f77'
    }, style);

    let afterStyle = objectAssign({
      border: '1px solid #63c363',
      opacity: this.props.value
    }, style);

    return (
      <div className='ImageDiff__inner--fade' style={style}>
        <div className='ImageDiff__before' style={beforeStyle}>
          <img
            ref='before'
            src={this.props.before}
            height={this.props.height}
            width={this.props.width}
            onLoad={this.handleImgLoad('before')}
          />
        </div>
        <div className='ImageDiff__after' style={afterStyle}>
          <img
            ref='after'
            src={this.props.after}
            height={this.props.height}
            width={this.props.width}
            onLoad={this.handleImgLoad('after')}
          />
        </div>
      </div>
    );
  }

  renderSwipe() {
    let style = {
      backgroundImage: `url(${bgImage})`,
      height: this.state.height,
      margin: 0,
      position: 'absolute',
      width: this.state.width
    };

    let beforeStyle = objectAssign({
      border: '1px solid #f77'
    }, style);

    let afterStyle = objectAssign({
      border: '1px solid #63c363',
      right: 0
    }, style);

    let swiperStyle = {
      borderLeft: '1px solid #999',
      height: this.state.height + 2,
      margin: 0,
      overflow: 'hidden',
      position: 'absolute',
      right: -2,
      width: this.state.width * (1 - this.props.value)
    };

    return (
      <div className='ImageDiff__inner--swipe' style={style}>
        <div className='ImageDiff__before' style={beforeStyle}>
          <img
            ref='before'
            src={this.props.before}
            height={this.props.height}
            width={this.props.width}
            onLoad={this.handleImgLoad('before')}
          />
        </div>
        <div className='ImageDiff--swiper' style={swiperStyle}>
          <div className='ImageDiff__after' style={afterStyle}>
            <img
              ref='after'
              src={this.props.after}
              height={this.props.height}
              width={this.props.width}
              onLoad={this.handleImgLoad('after')}
            />
          </div>
        </div>
      </div>
    );
  }
}

ImageDiff.propTypes = {
  after: React.PropTypes.string.isRequired,
  before: React.PropTypes.string.isRequired,
  height: React.PropTypes.number,
  value: React.PropTypes.number,
  width: React.PropTypes.number
};

ImageDiff.defaultProps = {
  value: 1
}
