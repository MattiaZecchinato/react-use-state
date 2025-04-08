import { useState } from 'react'

// function displayBox
import displayBox from '../utils/displayBox';

export default function Main(props) {

    const { list } = props;

    console.log(list);

    const [currentBox, setBox] = useState(1);

    return (
        <>

            {list.map(elem => <button key={elem.id} onClick={() => {setBox(elem.id)}}>{elem.title}</button>)}

            <div>{displayBox(currentBox, list)}</div>

        </>
    )
}