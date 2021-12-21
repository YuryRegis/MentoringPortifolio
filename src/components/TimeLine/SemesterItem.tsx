import {ItemContainer} from './styles'

interface Props {
    year: string;
    classes: Array<string>;
}

export function SemesterItem({year, classes}: Props) {
    return (
        <ItemContainer>
            <div>
                <h1>{year}</h1>
                <ul>
                    {classes.map( className => <li>{className}</li>)}
                </ul>
            </div>
        </ItemContainer>
    )
}

export default SemesterItem