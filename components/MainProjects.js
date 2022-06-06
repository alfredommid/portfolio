import React from 'react';
import styles from '../styles/MainProjects.module.css';
import Link from 'next/link';
import Image from 'next/image'

const MainProjects = (entrada) => {
    //getting the array from props to a constant.
    const arrayEntry = entrada.info;
    //Every dB entry has a boolean to determine the position it will be displayed, this funtion will determine it.
    const DetLayout = (entr) => {
        const { layout, position, Project, summary, rigthImg, leftImg, id, url} = entr.entr
        switch (layout) {
            case true:
                return  <Link href={`/details/${url}`} passHref>
                            <article className={styles.contProjectPar}>
                                <div className={styles.imgPar1}>
                                    <Image layout="fill" objectFit='contain' src={leftImg.url} alt={leftImg.alternativeText}/>
                                </div>
                                <div className={styles.imgPar2}>
                                    <Image layout="fill" objectFit='contain' src={rigthImg.url} alt={rigthImg.alternativeText}/>
                                </div>
                                
                                    <div className={styles.textPar}>
                                        <p className={styles.project}>{Project}</p>
                                        <p className={styles.position}>{position}</p>
                                        <p className={styles.summary}>{summary}</p>
                                    </div>
                            </article>
                        </Link>
                break;
            case false:
                return  <Link href={`/details/${url}`} passHref>
                            <article className={styles.contProjectNon}>
                                <div className={styles.imgNon1}>
                                    <Image layout="fill" objectFit='cover' src={leftImg.url} alt={leftImg.alternativeText}/>
                                </div>
                                <div className={styles.imgNon2}>
                                    <Image layout="fill" objectFit='contain' src={rigthImg.url} alt={rigthImg.alternativeText}/>
                                </div>
                                <div className={styles.textNon}>
                                    <p className={styles.project}>{Project}</p>
                                    <p className={styles.position}>{position}</p>
                                    <p className={styles.summary}>{summary}</p>
                                </div>
                            </article>
                        </Link>
                break;
        
            default:
                <h1>No sé qué está pasando</h1>
        }
    }
    return ( 
        <DetLayout entr={arrayEntry}/>
     );
}
 
export default MainProjects;