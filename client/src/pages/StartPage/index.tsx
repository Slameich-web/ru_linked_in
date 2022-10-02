import './startPage.scss';
import Header from './components/Header';
import { Body } from './components/Body';
import { Footer } from './components/Footer';
import { Helmet } from 'react-helmet';
export const StartPage = () => {
  return (
    <div className="main">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ru LinkedIn</title>
        <link rel="icon" href="/icon.png" />
      </Helmet>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};
