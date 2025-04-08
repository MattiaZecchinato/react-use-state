export default function displayBox(idBox, list) {

    const currentBox = list.find(elem => elem.id === idBox);

    const { description, title } = currentBox;

    return [title, description];
}