import React from 'react'
import Image from 'next/image'
import styles from './Work.module.css'

interface WorkInterface {
    props: {
        name: string,
        cover: string,
        link: string,
        description: string,
        details: Array<{ picture: string, alt: string, link: string }>
    }
}

const FlipCard = ({ props }: WorkInterface) => {
    function imageLoader({ src }: any) {
        return src
    }
    return (
        <div className={styles['flip-card'] + " w-1/2"}>
            <div className={styles['flip-card-inner']}>
                <div className={styles['flip-card-front']} >
                    <div className={styles['img-card']}>

                    </div>
                    {/* <Image loader={imageLoader} src={obama} alt="Picture of the author" /> */}
                </div>
                <div className={styles['flip-card-back']}>
                    <h1>{props.name}</h1>
                </div>
            </div>
        </div>
    )
};

export default FlipCard