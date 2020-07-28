import React from 'react';
import Menu from '../../components/Menu'
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import dadosIniciais from '../../data/dados_iniciais'

function Home() {
  return (
    <div>
      <Menu />

      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end?"}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

    </div>
  );
}

export default Home;
