import React, { Component, PropTypes } from 'react';

const bgImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUAQMAAAC3R49OAAAABlBMVEX5+fn///8pDrwNAAAAFElEQVQI12NgsP/AQAz+f4CBGAwAJIIdTTn0+w0AAAAASUVORK5CYII=';

class ImageDiff extends Component {
  constructor() {
    super();
    this.handleImgLoad = this.handleImgLoad.bind(this);
    this.getScaledDimensions = this.getScaledDimensions.bind(this);

    this.state = {
      naturalWidthBefore: null,
      naturalHeightBefore: null,
      naturalWidthAfter: null,
      naturalHeightAfter: null,
    };
  }

  handleImgLoad(e, type) {
    const { naturalHeight, naturalWidth } = e.target;
    this.setState({
      [`naturalHeight${type}`]: naturalHeight,
      [`naturalWidth${type}`]: naturalWidth,
    });
  }

  getScaledDimensions() {
    const getDimensions = (maxHeight, maxWidth, naturalHeight, naturalWidth) => {
      const heightRatio = typeof maxHeight !== 'undefined' ? (naturalHeight / maxHeight) : 1;
      const widthRatio = typeof maxWidth !== 'undefined' ? (naturalWidth / maxWidth) : 1;

      // Use max to prevent scaling up the image
      let divisor = Math.max(1, widthRatio);
      if (widthRatio < heightRatio) {
        // fit to height
        divisor = Math.max(1, heightRatio);
      }

      return {
        width: naturalWidth / divisor,
        height: naturalHeight / divisor,
      };
    };

    const {
      naturalWidthBefore,
      naturalHeightBefore,
      naturalWidthAfter,
      naturalHeightAfter,
    } = this.state;
    const {
      width: maxHeight,
      height: maxWidth,
    } = this.props;

    let height = 0;
    let width = 0;
    let heightBefore = 0;
    let widthBefore = 0;
    let heightAfter = 0;
    let widthAfter = 0;

    if (naturalHeightBefore && naturalHeightAfter) {
      ({
        height: heightBefore,
        width: widthBefore,
      } = getDimensions(maxHeight, maxWidth, naturalHeightBefore, naturalWidthBefore));
      ({
        height: heightAfter,
        width: widthAfter,
      } = getDimensions(maxHeight, maxWidth, naturalHeightAfter, naturalWidthAfter));
      height = Math.max(heightBefore, heightAfter);
      width = Math.max(widthBefore, widthAfter);
    }

    return {
      height,
      width,
      heightBefore,
      widthBefore,
      heightAfter,
      widthAfter,
    };
  }

  render() {
    const {
      height,
      width,
    } = this.getScaledDimensions();
    return (
      <div
        className='ImageDiff'
        style={{
          display: 'inline-block',
          height,
          width,
        }}
      >
        {this.props.type === 'difference' ? this.renderDifference(height, width) : null}
        {this.props.type === 'fade' ? this.renderFade(height, width) : null}
        {this.props.type === 'swipe' ? this.renderSwipe(height, width) : null}
      </div>
    );
  }

  renderDifference(height, width) {
    const style = {
      position: 'relative'
    };
    const beforeStyle = {
      position: 'absolute',
      top: 0,
      left: 0
    };
    const afterStyle = {
      ...beforeStyle
    }

    return (
      <div className='ImageDiff_inner--difference' style={style}>
        <div className='ImageDiff__before' style={beforeStyle}>
          <img
            src={this.props.before}
            style={{
              maxHeight: height,
              maxWidth: width,
            }}
            onLoad={e => this.handleImgLoad(e, 'Before')}
          />
        </div>
        <div className='ImageDiff__after' style={afterStyle}>
          <img
            src={this.props.after}
            style={{
              maxHeight: height,
              maxWidth: width,
              mixBlendMode: 'difference',
            }}
            onLoad={e => this.handleImgLoad(e, 'After')}
          />
        </div>
      </div>
    );
  }

  renderFade = (height, width) => {
    let style = {
      backgroundImage: `url(${bgImage})`,
      height: height,
      margin: 0,
      position: 'absolute',
      width: width
    };

    let beforeStyle = {
      border: '1px solid #f77',
      ...style
    };

    let afterStyle = {
      border: '1px solid #63c363',
      opacity: 1 - this.props.value,
      ...style
    };

    return (
      <div className='ImageDiff__inner--fade' style={style}>
        <div className='ImageDiff__before' style={beforeStyle}>
          <img
            src={this.props.before}
            style={{
              maxHeight: height,
              maxWidth: width,
            }}
            onLoad={e => this.handleImgLoad(e, 'Before')}
          />
        </div>
        <div className='ImageDiff__after' style={afterStyle}>
          <img
            src={this.props.after}
            style={{
              maxHeight: height,
              maxWidth: width,
            }}
            onLoad={e => this.handleImgLoad(e, 'After')}
          />
        </div>
      </div>
    );
  }

  renderSwipe(height, width) {
    let style = {
      backgroundImage: `url(${bgImage})`,
      height: height,
      margin: 0,
      position: 'absolute',
      width: width
    };

    let beforeStyle = {
      border: '1px solid #f77',
      ...style
    };

    let afterStyle = {
      border: '1px solid #63c363',
      right: 0,
      ...style
    };

    let swiperStyle = {
      borderLeft: '1px solid #999',
      height: height + 2,
      margin: 0,
      overflow: 'hidden',
      position: 'absolute',
      right: -2,
      width: width * (1 - this.props.value)
    };

    return (
      <div className='ImageDiff__inner--swipe' style={style}>
        <div className='ImageDiff__before' style={beforeStyle}>
          <img
            src={this.props.before}
            style={{
              maxHeight: height,
              maxWidth: width,
            }}
            onLoad={e => this.handleImgLoad(e, 'Before')}
          />
        </div>
        <div className='ImageDiff--swiper' style={swiperStyle}>
          <div className='ImageDiff__after' style={afterStyle}>
            <img
              src={this.props.after}
              style={{
                maxHeight: height,
                maxWidth: width,
              }}
              onLoad={e => this.handleImgLoad(e, 'After')}
            />
          </div>
        </div>
      </div>
    );
  }
}

ImageDiff.propTypes = {
  after: PropTypes.string.isRequired,
  before: PropTypes.string.isRequired,
  height: PropTypes.number,
  type: PropTypes.string.isRequired,
  value: PropTypes.number,
  width: PropTypes.number
};

ImageDiff.defaultProps = {
  value: 1
}

module.exports = ImageDiff;
