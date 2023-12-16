import { ItemContainer } from './styles';

interface Props {
  year: string;
  classes: Array<string>;
}

export function SemesterItem({ year, classes }: Props) {
  return (
    <ItemContainer key={year}>
      <div>
        <h1>{year}</h1>
        <ul>
          {classes.map(className => (
            <li key={className}>{className}</li>
          ))}
        </ul>
      </div>
    </ItemContainer>
  );
}

export default SemesterItem;
