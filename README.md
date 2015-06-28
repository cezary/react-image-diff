# react-image-diff

Compares images, inspired by Github's [image diff view modes](https://github.com/blog/817-behold-image-view-modes).

## Installation

```
npm install react-image-diff
```

## Demo

http://cezary.github.io/react-image-diff/

## Example

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

## License

MIT
