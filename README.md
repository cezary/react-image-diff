# react-image-diff

Compares images, inspired by Github's [image diff view modes](https://github.com/blog/817-behold-image-view-modes).

![](public/img/demo-fade.gif)
![](public/img/demo-swipe.gif)

## Installation

```
npm install react-image-diff
```

## Demo

http://cezary.github.io/react-image-diff/

## Usage

```javascript
import React from 'react';
import ImageDiff from 'react-image-diff';

class Component extends React.Component {
  render() {
    return (
      <ImageDiff before={this.props.original} after={this.props.altered} type="fade" value={.5} />
    );
  }
}
```

### Props

* after: string - url to after image
* before: string - url to before image
* height: number - height in pixels
* width: number - width in pixels
* type: string - type of image comparison (difference, fade, or swipe)
* value: number - decimal fraction used to compute transition between before and after images

## License

MIT
