import Header from '../components/Header'
import HomeHero from '../components/HomeHero'
import TimeLine from '../components/TimeLine'
import Projects from '../components/Projects'
import { HomeContainer } from '../styles/HomeStyles'
import Footer from '../components/Footer'


export function Home() {
  return (
    <HomeContainer>
      
      <Header />

      <main className='container'>
        <HomeHero />
        <TimeLine />
        <Projects />
      </main>

      <Footer />

    </HomeContainer>
  );
}

export default Home