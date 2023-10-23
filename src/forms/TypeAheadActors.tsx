import { Typeahead } from 'react-bootstrap-typeahead';
import { actorMovieDTO } from '../Actors/actors.model';
import { ReactElement } from 'react';

export default function TypeAheadActors(props: typeAheadActorsProps) {

    const actors: actorMovieDTO[] = [
        { id: 1, name: 'Peter', character: '', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Andrew_Garfield_in_2023_%28cropped%29.jpg/220px-Andrew_Garfield_in_2023_%28cropped%29.jpg' },
        { id: 2, name: 'mary', character: '', picture: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/18/Kirsten_Dunst_as_Mary_Jane_Watson.jpg/220px-Kirsten_Dunst_as_Mary_Jane_Watson.jpg' },
        { id: 3, name: 'miles', character: '', picture: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/First_image_of_miles_morales_spider_man.jpg/220px-First_image_of_miles_morales_spider_man.jpg' },
    ]

    const selected: actorMovieDTO[] = []; //default state that is displayed after an actor was selected

    return (
        <div className='mb-3'>
            <label>{props.displayName}</label>
            <Typeahead
                id="typeahead"
                onChange={option => {
                    const actors = option as actorMovieDTO[];
                    if (props.actors.findIndex(x => x.id === actors[0].id) === -1) { //make sure that we dont call onAdd if the actor is already selected
                        props.onAdd([...props.actors, actors[0]])
                    }

                    console.log(actors);
                }}
                options={actors}
                labelKey="name" //labelKey={(option) => {const actor = option as actorMovieDTO; return actor.name}} //
                filterBy={['name']}
                placeholder='Write the name of the actor.'
                minLength={1}
                flip={true}
                selected={selected}
                renderMenuItemChildren={(option) => {
                    const actor = option as actorMovieDTO;
                    return (
                        <>
                            <img alt="actor" src={actor.picture} style={{
                                height: '64px',
                                marginRight: '10px',
                                width: '64px',
                            }} />
                            <span>{actor.name}</span>
                        </>
                    );
                }}

            />

            <ul className='list-group'>
                {props.actors.map(actor =>
                    <li key={actor.id} className='list-group-item list-group-item-action'>
                        {props.listUI(actor)}
                        <span className='badge badge-primary badge-pill pointer text-dark'
                            style={{ marginLeft: '0.5rem' }}
                            onClick={() => props.onRemove(actor)}
                        >X</span>
                    </li>)}
            </ul>
        </div >
    )
}

interface typeAheadActorsProps {
    displayName: string;
    actors: actorMovieDTO[];
    onAdd(actors: actorMovieDTO[]): void;
    onRemove(actor: actorMovieDTO): void;
    listUI(actor: actorMovieDTO): ReactElement;
}