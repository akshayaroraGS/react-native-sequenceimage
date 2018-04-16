import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

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

	componentDidMount() {
		clearInterval(this.interval);
		this.interval = null;
		this.animate();
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
			this.setState({ image: images[newCurrent], currentPosition: newCurrent });
		}, duration / images.length);
	}

	render() {
		return <Image {...this.props} source={this.state.image} />;
	}
}
