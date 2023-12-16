import React from 'react';
import { Container, TexContainer, InfosContainer, CodeItem } from './styles';

/* eslint-disable react/jsx-no-comment-textnodes */
function HomeHero() {
  return (
    <Container>
      <img
        src="https://media.licdn.com/dms/image/D4D03AQGRKg_rIrHYbg/profile-displayphoto-shrink_800_800/0/1695232530474?e=1707955200&v=beta&t=Q-Pxfu08pFo2jC3h_K6NnSBRlywXChOvjZfIX_PNb7E"
        alt="Foto de Yury Regis"
        style={{ borderRadius: '50%' }}
      />
      <div>
        <TexContainer>
          <h1>PUC Minas</h1>
          <h2>Ciência da Computação</h2>
        </TexContainer>
        <InfosContainer>
          <CodeItem>
            <span className="comment">// Dados do Aluno </span>
            <span className="purple">Student</span> {'\u007B'}
            <div>
              Nome: <span className="blue">Yury Regis</span>
            </div>
            <div>
              Periodo: <span className="blue">8º</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem>
            <span className="comment">// Dados da disciplina </span>
            <span className="purple">Class</span> {'\u007B'}
            <div>
              Nome: <span className="blue">Mentoring</span>
            </div>
            <div>
              Professor: <span className="blue">João Carlos (Boca)</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
