import React from 'react';
import Image from 'next/image';
import { Fragment } from 'react';
import Layout from '../../components/layout';
import styles from '../../styles/detail.module.css';

const Project = ({data}) => {
    console.log(data);
    //deconstruct all of the variables from teh api request
    const {Project, position, summary, infoProject, langUsed, brandPres, designImages, mainPage, importantImage, resultInteractionsVid, resultMobileVideo, resultVid3, withVideos} = data;
  return (
    <Layout name={Project}>
        <main className={styles.mainCont}>
            <div className={styles.mainInfo}>
                <p className={styles.projectName}>{Project}</p>
                <div className={styles.sumCont}>
                    <p className={styles.position}>{position}</p>
                    <p className={styles.summary}>{summary}</p>
                </div>
            </div>
            <div className={styles.brandPres}>
                <Image priority layout='responsive' width="100%" height="100%" src={brandPres.url} alt={brandPres.alternativeText}/>
            </div>
            <div className={styles.preInfo}>
                <div className={styles.userRes}>
                    <p className={styles.infoText}>{infoProject}</p>
                </div>
                <div className={styles.langCont}>
                    <p className={styles.langText}>{langUsed}</p>
                </div>
            </div>
            <div className={styles.desImgCont}>
                {designImages.map(img => 
                    <div className={styles.imgContainer} key={img.id}>
                        <Image layout='responsive' width="100%" height="60%" src={img.url} alt={img.alternativeText} />
                    </div>)}
            </div>
            <div className={styles.landPage}>
                <Image layout='responsive' width="100%" height="45%" src={mainPage.url} alt={mainPage.alternativeText}/>
            </div>
            <div className={styles.landPage}>
                <Image layout='responsive' width="100%" height="45%" src={importantImage.url} alt={importantImage.alternativeText}/>
            </div>
            {withVideos
                ?   <Fragment>
                        <div className={styles.vidCont}>
                            <video width="100%" autoPlay loop muted>
                                <source src={resultMobileVideo.url} type="video/mp4"/>
                            </video>
                        </div>
                        <div className={styles.vidCont}>
                            <video width="100%" autoPlay loop muted>
                                <source src={resultInteractionsVid.url} type="video/mp4"/>
                            </video>
                        </div>
                        <div className={styles.vidCont}>
                            <video width="100%" autoPlay loop muted>
                                <source src={resultVid3.url} type="video/mp4"/>
                            </video>
                        </div>
                    </Fragment>
                :   null
            }
        </main>
    </Layout>
  )
}
export async function getStaticPaths() {
    const url = 'http://localhost:1337/details'
    const resp = await fetch(url);
    const entries = await resp.json();

    const paths = entries.map(entrada => ({
        params: {url: entrada.url}
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params: {url}}) {
    const urlProject = `${process.env.API_URL}/details?url=${url}`;
    const resp = await fetch(urlProject);
    const data = await resp.json();

    return {
        props: {
            data: data[0]
        }
    }
}

export default Project;