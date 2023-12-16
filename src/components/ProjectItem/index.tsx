/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { Container } from './styles';

interface Props {
  classes: string;
  title: string;
  href: string;
}

export function ProjectItem({ classes, title, href }: Props) {
  return (
    <Container imgUrl="">
      <section>
        <div className="overlay" />

        <div className="text">
          <h1>{classes}</h1>
          <h2>{title}</h2>
        </div>
      </section>

      <button type="button">
        <Link href={href}>
          <a>ver mais</a>
        </Link>
      </button>
    </Container>
  );
}

export default ProjectItem;
