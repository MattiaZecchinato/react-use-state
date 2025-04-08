import { useState } from 'react'

// function displayBox
import displayBox from '../utils/displayBox';

export default function Main(props) {

    const { list } = props;

    console.log(list);

    const [currentBox, setBox] = useState(0);

    const [title, description] = displayBox(currentBox, list);

    return (
        <div className="main-box">

            {list.map(elem => 
                <button key={elem.id} onClick={() => setBox(elem.id)}>
                    {elem.title}
                </button>
            )}

            <div className="description-box">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>

        </div>
    )
}