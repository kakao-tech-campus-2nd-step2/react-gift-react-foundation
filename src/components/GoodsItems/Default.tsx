import React from 'react'

import { DefaultGoodsItem } from '../../types/PropsType'
import Image from '../Image/Image'

const Default = ({
    imageSrc,
    subtitle,
    title,
    amount
}: DefaultGoodsItem) => {
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

export default Default