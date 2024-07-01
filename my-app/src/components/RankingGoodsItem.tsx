import React from 'react';
import styled from '@emotion/styled';
import { GoodsItemProps } from './GoodsItem';

interface RankingGoodsItemProps extends GoodsItemProps {
	rankingIndex: number;
}

const GoodsItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 160px;
`;

const ImageWrapper = styled.div`
	width: 100%;
	padding-top: 100%;
	position: relative;
`;

const Image = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
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

const Badge = styled.div<{ rankingIndex: number }>`
	position: absolute;
	top: 8px;
	left: 8px;
	background-color: ${(props) => (props.rankingIndex <= 3 ? '#ff4081' : '#bdbdbd')};
	color: white;
	border-radius: 5px;
	width: 22px;
	height: 22px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 14px;
	font-weight: bold;
	z-index: 1;
`;

const RankingGoodsItem: React.FC<RankingGoodsItemProps> = ({ imageSrc, subtitle, title, amount, rankingIndex }) => (
	<GoodsItemContainer style={{ position: 'relative' }}>
		<Badge rankingIndex={rankingIndex}>{rankingIndex}</Badge>
		<ImageWrapper>
			<Image src={imageSrc} alt={title} />
		</ImageWrapper>
		<Subtitle>{subtitle}</Subtitle>
		<Title>{title}</Title>
		<Amount>{amount}</Amount>
	</GoodsItemContainer>
);

export { RankingGoodsItem };
export type { RankingGoodsItemProps };
