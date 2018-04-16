# React-Native SequenceImage Component : react-native-SequenceImage

![version](https://img.shields.io/badge/version-0.0.2-green.svg)

### Preface

Are you struggling with placeholder images in react native and seeking some solution to put placeholder until your image is not downloaded from internet, you are on a right repository.

### Features

* For Render Sequence Images for loader like frame animation.
* ease to implement and use.

### Installation

* Run this command `$ npm install react-native-sequenceimage --save`

### Implementation

* import in js file as `import SequenceImage from 'react-native-SequenceImage';` [see example](https://github.com/akshayaroraGS/react-native-SequenceImage/blob/master/demo/index.ios.js)

```JavaScript
import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import SequenceImage from 'react-native-sequenceimage';

export default class App extends Component {
	render() {
		const imagesArr = [
			require('./images/img_0.png'),
			require('./images/img_1.png'),
			require('./images/img_2.png'),
			require('./images/img_3.png'),
			require('./images/img_4.png'),
			require('./images/img_5.png'),
			require('./images/img_6.png'),
			require('./images/img_7.png'),
			require('./images/img_8.png'),
			require('./images/img_9.png'),
			require('./images/img_10.png'),
			require('./images/img_11.png'),
			require('./images/img_12.png'),
			require('./images/img_13.png'),
			require('./images/img_14.png'),
			require('./images/img_15.png'),
			require('./images/img_16.png')
		];
		return (
			<View style={styles.container}>
				<SequenceImage images={imagesArr} duration={2000} repeatMode={'default'} />
				<Text>Hello World</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff'
	}
});

AppRegistry.registerComponent('sequenceImage', () => App);
```

### Pass this Two props for Visible PlaceHolder

* this.props.images

### Available props

1.  all image props
2.  images: PropTypes.arrayOf(PropTypes.number).isRequired,
3.  duration: PropTypes.number,
4.  repeatCount: PropTypes.number,
5.  repeatMode: PropTypes.oneOf(['reverse', 'default'])

### Feedbacks

* I love to hear your valuable feedbacks, suggestions & issues. Please raise a issue on the repo or email me (as subject: 'SequenceImage#issue &lt;topic&gt;') @ `akshayarora.gs@gmail.com`.

❤️ Voila! Happy coding...
