import {ReactNode} from 'react'
import SectionTitle from '../SectionTitle'
import SemesterItem from './SemesterItem'
import {Container} from './styles'


function TimeLine() {
    return (
        <Container>
            <SectionTitle title='Bacharelado' description='Linha do tempo'/>
            <section>
                <SemesterItem 
                    year='2020/1' 
                    classes={['TCLF', 'AEDII', 'AEDII Lab.', 'LPHS', 'TAI', 'Seminarios']}/>
                <SemesterItem 
                    year='2020/2' 
                    classes={['AOC','AOC Laboratório', 'Redes de Comp.', 'PDM', 'Ling. de Prog.', 'Modelagem 3D', 'Seminarios']}/>
                <SemesterItem 
                    year='2021/1' 
                    classes={['AOCII','AOCII Lab.', 'Banco de Dados', 'G. Redes Sociais', 'S. Operacionais', 'Inteligência Artificial', 'Seminarios']}/>
                <SemesterItem 
                    year='2021/2' 
                    classes={['Filosofia', 'Compiladores', 'Mentoring', '', 'Robôs, S e A', 'Segurança e Criptografia', 'Seminarios']}/>
            </section>
        </Container>
    )
}

export default TimeLine