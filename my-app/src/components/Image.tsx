import React from 'react';
import styled from '@emotion/styled';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
	ratio?: 'square' | 'auto' | number;
	radius?: 'circle' | number;
}

const getRatio = (ratio: 'square' | 'auto' | number) => {
	if (ratio === 'square') {
		return '100%';
	}
	if (ratio === 'auto') {
		return '0'; // ratio가 auto인 경우 padding-top을 0으로 설정
	}
	return `${(1 / ratio) * 100}%`;
};

const getBorderRadius = (radius: 'circle' | number) => {
	if (radius === 'circle') {
		return '50%';
	}
	return `${radius}px`;
};

const ImageWrapper = styled.div<Pick<ImageProps, 'ratio' | 'radius'>>`
	position: relative;
	width: ${(props) => (props.ratio === 'auto' ? '100px' : '100%')};
	height: ${(props) => (props.ratio === 'auto' ? '100px' : '100%')};
	padding-top: ${(props) => (props.ratio !== 'auto' ? getRatio(props.ratio || 'auto') : '0')};
	overflow: hidden;
	display: inline-block;
`;

const StyledImg = styled.img<Pick<ImageProps, 'radius'>>`
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: ${(props) => (props.radius !== undefined ? getBorderRadius(props.radius) : '0')};
`;

const Image: React.FC<ImageProps> = ({ ratio = 'auto', radius, ...props }) => (
	<ImageWrapper ratio={ratio} radius={radius}>
		<StyledImg radius={radius} {...props} />
	</ImageWrapper>
);

export default Image;
