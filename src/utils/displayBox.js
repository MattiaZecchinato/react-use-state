export default function displayBox(idBox, list) {

    const currentBox = list.find(elem => elem.id === idBox);

    if (!currentBox) {

        const errorDesctiption = 'No language selected';

        return [errorDesctiption];
    }

    const { description, title } = currentBox;

    return [title, description];
}