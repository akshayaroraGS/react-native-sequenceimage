# React-Native SequenceImage Component : react-native-SequenceImage

![version](https://img.shields.io/badge/version-0.0.1-green.svg)

### Preface

Are you struggling with placeholder images in react native and seeking some solution to put placeholder until your image is not downloaded from internet, you are on a right repository.

### Features

* Until image is not loaded from the given URL, some placeholder required to show that empty space.
* No placeholder image pass, then behave like react-native `image`.
* ease to implement and use.

### Installation

* Run this command `$ npm install react-native-SequenceImage --save`

### Implementation

* import in js file as `import SequenceImage from 'react-native-SequenceImage';` [see example](https://github.com/akshayaroraGS/react-native-SequenceImage/blob/master/demo/index.ios.js)

```JavaScript
import React, { Component } from 'react';
import { View, StyleSheet, AppRegistry } from 'react-native';
import SequenceImage from 'react-native-SequenceImage';

export default class SequenceImageViewDemo extends Component {
	const arrImages = [require('./images/pm_loader_00.png'),
			require('./images/pm_loader_01.png'),
			require('./images/pm_loader_02.png'),
			require('./images/pm_loader_03.png')]
	render() {
		return (
			<View style={styles.container}>
				<SequenceImage
					style={{ height: 100, width: 100, alignSelf: 'center', justifyContent: 'center' }}
					images={arrImages}//ArrayOfImageUri
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	}
});

AppRegistry.registerComponent('sequenceImage', () => SequenceImageViewDemo);
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
