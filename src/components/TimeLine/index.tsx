/* eslint-disable import/no-named-as-default */
import React from 'react';
import SectionTitle from '../SectionTitle';
import SemesterItem from './SemesterItem';
import { Container } from './styles';

function TimeLine() {
  return (
    <Container>
      <SectionTitle title="Bacharelado" description="Linha do tempo" />
      <section>
        <SemesterItem
          year="2020/1"
          classes={['TCLF', 'AEDII', 'AEDII Lab.', 'LPHS', 'TAI', 'Seminarios']}
        />
        <SemesterItem
          year="2020/2"
          classes={[
            'AOC',
            'AOC Laboratório',
            'Redes de Comp.',
            'PDM',
            'Ling. de Prog.',
            'Modelagem 3D',
            'Seminarios II'
          ]}
        />
        <SemesterItem
          year="2021/1"
          classes={[
            'AOCII',
            'AOCII Lab.',
            'Banco de Dados',
            'G. Redes Sociais',
            'S. Operacionais',
            'Inteligência Artificial',
            'Seminarios III'
          ]}
        />
        <SemesterItem
          year="2021/2"
          classes={[
            'Filosofia',
            'Compiladores',
            'Mentoring',
            'Robôs, S e A',
            'Segurança e Criptografia',
            'Seminarios IV'
          ]}
        />
      </section>
      <section>
        <SemesterItem
          year="2022/1"
          classes={[
            'Filosofia',
            'TAI II',
            'Desenvolvimento Mobile',
            'D. Science e Big Data',
          ]}
        />
        <SemesterItem
          year="2022/2"
          classes={[
            'Ensino Religioso',
            'TAI III',
            'Gestão de Startups',
            'Gerencia de Redes',
            'Eng. de Software I',
          ]}
        />
        <SemesterItem
          year="2023/1"
          classes={[
            'Filosofia',
            'Estágio Obrigatório',
            'Eng. de Software II',
            'Visão Computacional'
          ]}
        />
        <SemesterItem
          year="2023/2"
          classes={[
            'Complexidade de Alg.',
            'Internet das Coisas',
            'Mentoring II',
            'Processamento Paralelo',
            'Prod. de Video Mobile',
            'Lab de Redes Comp',
            'Desenvolvimento WEB'
          ]}
        />
        <SemesterItem
          year="2024/1"
          classes={[
            'Sistemas Distribuidos',
            'Cidades Inteligentes',
            'TCC (TD)',
            'Mentoring III',
            'Optativa IV'
          ]}
        />
      </section>
    </Container>
  );
}

export default TimeLine;
