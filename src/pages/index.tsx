import Header from '../components/Header'
import HomeHero from '../components/HomeHero'
import TimeLine from '../components/TimeLine'
import Projects from '../components/Projects'
import { HomeContainer } from '../styles/HomeStyles'


export function Home() {
  return (
    <HomeContainer>
      <Header />
      <main className='container'>
        <HomeHero />
        <TimeLine />
        <Projects />
      </main>
    </HomeContainer>
  );
}

export default Home