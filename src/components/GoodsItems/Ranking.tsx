import React from 'react'

import { RankingGoodsItem } from '../../types/PropsType'
import Image from '../Image/Image'

const Ranking = ({
    rankingIndex,
    imageSrc,
    subtitle,
    title,
    amount
}: RankingGoodsItem) => {
    return(
        <div>
            {/* <Image
                ratio={'square'}
                radius={5}
                imageProps={{src: imageSrc}}
            /> */}
        </div>
    )
}

export default Ranking