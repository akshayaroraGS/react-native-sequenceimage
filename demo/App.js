import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import SequenceImage from '../SequenceImage';

export default class App extends Component {
	render() {
		const imagesArr = [require('./images/pm_loader_00.png')];
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
