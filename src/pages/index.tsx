/* eslint-disable import/no-named-as-default */
import Head from 'next/head';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import TimeLine from '../components/TimeLine';
import Projects from '../components/Projects';
import { HomeContainer } from '../styles/HomeStyles';
import Footer from '../components/Footer';

export function Home() {
  return (
    <HomeContainer>
      <Head>
        <title>Home | Meu portfólio</title>
        <meta
          name="description"
          content="Aluno do curso de bacharelado em Ciência da Computação, PUC Minas, unidade de Poços de Caldas."
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Aluno do curso de bacharelado em Ciência da Computação, PUC Minas, unidade de Poços de Caldas."
        />
      </Head>

      <Header />

      <main className="container">
        <HomeHero />
        <TimeLine />
        <Projects />
      </main>

      <Footer />
    </HomeContainer>
  );
}

export default Home;
