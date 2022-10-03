import Header from './components/Header';
import { Body } from './components/Body';
import { Footer } from './components/Footer';
import './StartPage.scss';
export const StartPage = () => {
  return (
    <div className="main">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};
