export default function Main(props) {

    const { list } = props;

    console.log(list);

    return (
    
        list.map(elem => <button key={elem.id}>{elem.title}</button>)

        
    )
}