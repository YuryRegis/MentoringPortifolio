/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { ProjectContainer } from './styles';

interface Props {
  title: string;
  name: string;
  slug: string;
  img: string;
}

export default function ProjectItem({ title, name, slug, img }: Props) {
  return (
    <ProjectContainer imgUrl={img} data-aos="fade-up">
      <section>
        <div className="overlay" />
        <div className="text">
          <h1># {title}</h1>
          <h2>- {name}</h2>
        </div>
      </section>
      <button type="button">
        <Link href={slug}>
          <a>
            Ver mais <AiOutlineRightCircle />
          </a>
        </Link>
      </button>
    </ProjectContainer>
  );
}
