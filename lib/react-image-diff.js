import React, { Component, PropTypes } from 'react';
import objectAssign from 'object-assign';
require('context-blender');

import bgImage from './bg.png';

function fetchContext(url) {
  return new Promise((resolve, reject) => {
    var img = document.createElement('img');
    img.onload = (e) => {
      let {height, width} = e.target;

      var canvas = document.createElement('canvas')
      canvas.height = height;
      canvas.width = width;
      var ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      resolve(ctx);
    }
    img.src = url;
  });
}

function diffImages(beforeUrl, afterUrl) {
  return Promise.all([
    fetchContext(beforeUrl),
    fetchContext(afterUrl)
  ]).then(([beforeCtx, afterCtx]) => {
    afterCtx.blendOnto(beforeCtx, 'difference');
    return beforeCtx;
  });
}

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

    if (this.props.type === 'difference') {
      diffImages(this.props.before, this.props.after)
        .then((beforeCtx) => {
          this.setState({
            ctx: beforeCtx
          });
        });
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      height: nextProps.height || this.state.height,
      width: nextProps.width || this.state.width
    });

    if (nextProps.type !== 'difference') {
      this.setState({
        ctx: null
      });
    } else {
      diffImages(nextProps.before, nextProps.after)
        .then((beforeCtx) => {
          this.setState({
            ctx: beforeCtx
          });
        });
    }
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
        {this.props.type === 'difference' ? this.renderDifference() : null}
        {this.props.type === 'fade' ? this.renderFade() : null}
        {this.props.type === 'swipe' ? this.renderSwipe() : null}
      </div>
    );
  }

  renderDifference() {
    return (
      <div className='ImageDiff_inner--difference'>
        <img
          ref='difference'
          src={this.state && this.state.ctx ? this.state.ctx.canvas.toDataURL() : null}
          height={this.props.height}
          width={this.props.width}
        />
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
