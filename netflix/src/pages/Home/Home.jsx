import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/Banner/Banner';
import Rowlists from '../../components/Rows/RowLists/Rowlists';

function Home() {
  return (
    <>
      <Header />
      <Banner/>
      <Rowlists/>
      <Footer />
    </>
  );
}

export default Home;