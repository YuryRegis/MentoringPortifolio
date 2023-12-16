/* eslint-disable import/no-named-as-default */
import SectionTitle from '../SectionTitle';
import ProjectItem from './ProjectItem';
import { Container } from './styles';
import data from './data';

export function Projects() {
  return (
    <Container>
      <SectionTitle title="Projetos" description="Em destaque" />
      <section>
        {data.map(item => (
          <ProjectItem
            key={item.title}
            title={item.title}
            name={item.name}
            slug={item.slug}
            img={item.img}
          />
        ))}
      </section>
    </Container>
  );
}

export default Projects;
