import { Typeahead } from 'react-bootstrap-typeahead';
import { actorMovieDTO } from '../Actors/actors.model'

export default function TypeAheadActors(props: typeAheadActorsProps) {

    const actors: actorMovieDTO[] = [
        { id: 1, name: 'Peter', character: '', picture: 'https://static.wikia.nocookie.net/spidermanps4/images/d/d9/IMG_4563.PNG/revision/latest?cb=20230721010243' },
        { id: 2, name: 'mary', character: '', picture: 'https://static.wikia.nocookie.net/spidermanps4/images/6/69/MJWatson.png/revision/latest?cb=20231008131919' },
        { id: 3, name: 'miles', character: '', picture: 'https://static.wikia.nocookie.net/spidermanps4/images/3/3c/IMG_4562.PNG/revision/latest?cb=20230721011632' },
    ]
    return (
        <div className='mb-3'>
            <label>{props.displayName}</label>
            <Typeahead
                id="typeahead"
                onChange={actor => { console.log(actor) }}
                options={actors}
                labelKey="name" //labelKey={actor => actor.name}
                filterBy={['name']}
                placeholder='Write the name of the actor.'
                minLength={1}

            />
        </div>
    )
}
interface typeAheadActorsProps {
    displayName: string;
    actors: actorMovieDTO[];
}