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
