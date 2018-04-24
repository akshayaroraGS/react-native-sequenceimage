import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Platform } from 'react-native';

const isAndroid = Platform.OS === 'android';

export default class SequenceImage extends React.Component {
	static propTypes = {
		images: PropTypes.arrayOf(PropTypes.number).isRequired,
		duration: PropTypes.number,
		repeatCount: PropTypes.number,
		repeatMode: PropTypes.oneOf(['reverse', 'default'])
	};

	static defaultProps = {
		repeatCount: -1,
		repeatMode: 'default',
		duration: 1000
	};

	state = {
		currentPosition: 0,
		image: this.props.images[0]
	};

	constructor(props) {
		super(props);
		if (isAndroid) {
			this.view = [];
			this.firstLoadFlag = true;
			this.props.images.map(data => {
				this.view.push(
					React.createElement(Image, {
						key: data,
						source: data,
						position: 'absolute',
						style: {
							height: 0,
							width: 0,
							flex: 0
						}
					})
				);
			});
		}
	}

	componentDidMount() {
		requestAnimationFrame(() => {
			clearInterval(this.interval);
			this.interval = null;
			this.animate();
		});
	}

	componentWillUnmount() {
		clearInterval(this.interval);
		this.interval = null;
	}

	animate() {
		const { images, duration, repeatMode } = this.props;
		this.interval = setInterval(() => {
			let newCurrent = this.state.currentPosition;
			if (repeatMode === 'reverse') {
				if (newCurrent === images.length - 1) {
					this.isReverseMode = true;
				} else if (newCurrent === 0) {
					this.isReverseMode = false;
				}
			} else if (newCurrent === images.length - 1) {
				newCurrent = 0;
			}
			this.isReverseMode ? newCurrent-- : newCurrent++;
			this.firstLoadFlag = false;
			this.setState({ image: images[parseInt(newCurrent)], currentPosition: parseInt(newCurrent) });
		}, duration / images.length);
	}

	render() {
		return (
			<View style={{ justifyContent: 'center', alignItems: 'center' }}>
				{isAndroid && this.firstLoadFlag && this.view}
				<Image {...this.props} source={this.state.image} />
			</View>
		);
	}
}
