import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({children, name}) => {
  return (
    <div>
        <Head>
            <title>moma - {name}</title>
            <meta name="description" content="Portafolio Sr.Tembo" />
        </Head>
        <Header/>
        {children}
    </div>
  )
}

export default Layout;