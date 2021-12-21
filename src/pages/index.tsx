import Header from '../components/Header'
import HomeHero from '../components/HomeHero'
import TimeLine from '../components/TimeLine'
import { HomeContainer } from '../styles/HomeStyles'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <main className='container'>
        <HomeHero />
        <TimeLine />
      </main>
    </HomeContainer>
  );
}

export default Home