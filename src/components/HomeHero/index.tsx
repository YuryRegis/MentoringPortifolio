import { ReactNode } from 'react'
import { Container, 
    TexContainer,
    InfosContainer,
    CodeItem
 } from './styles'
import picture from '../../assets/profile.png'


function HomeHero() {
    return(
        <Container>
            <img src={picture} alt='Foto de Yury Regis'/>
            <div>
                <TexContainer>
                    <h1>PUC Minas</h1>
                    <h2>Ciência da Computação</h2>
                </TexContainer>
                <InfosContainer>
                    <CodeItem>
                        <span className='comment'>// Dados do Aluno </span>
                        <span className='purple'>Student</span> {'\u007B'}
                        <div>
                            Nome: <span className='blue'>Yury Regis</span>
                        </div>
                        <div>
                            Periodo: <span className='blue'>4º</span>
                        </div>
                        {'\u007D'}
                    </CodeItem>
                    <CodeItem>
                        <span className='comment'>// Dados da disciplina </span>
                        <span className='purple'>Class</span> {'\u007B'}
                        <div>
                            Nome: <span className='blue'>Mentoring</span>
                        </div>
                        <div>
                            Professor: <span className='blue'>João Carlos (Boca)</span>
                        </div>
                        {'\u007D'}
                    </CodeItem>
                </InfosContainer>
            </div>
        </Container>
    )
}

export default HomeHero