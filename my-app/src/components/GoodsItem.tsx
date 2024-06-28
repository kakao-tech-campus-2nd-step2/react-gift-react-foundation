import React from 'react';
import styled from '@emotion/styled';

interface GoodsItemProps {
	imageSrc: string;
	subtitle: string;
	title: string;
	amount: string;
}

const GoodsItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 120px;
`;

const Image = styled.img`
	width: 100%;
	height: 120px;
	object-fit: cover;
	border-radius: 4px;
`;

const Subtitle = styled.div`
	font-size: 12px;
	color: #757575;
	margin-top: 8px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	width: 100%;
`;

const Title = styled.div`
	font-size: 15px;
	margin-top: 4px;
	overflow: hidden;
	text-overflow: ellipsis;
	width: 100%;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
`;

const Amount = styled.div`
	font-size: 20px;
	font-weight: bold;
	margin-top: 10px;
	width: 100%;
`;

const GoodsItem: React.FC<GoodsItemProps> = ({ imageSrc, subtitle, title, amount }) => (
	<GoodsItemContainer>
		<Image src={imageSrc} alt={title} />
		<Subtitle>{subtitle}</Subtitle>
		<Title>{title}</Title>
		<Amount>{amount}</Amount>
	</GoodsItemContainer>
);

export { GoodsItem };
export type { GoodsItemProps };
