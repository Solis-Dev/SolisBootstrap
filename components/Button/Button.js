export default function Button(props) {
    let style = `btn-${props.variant} shadow bg-gradient`;

    if(props.size){
        style += `btn-${size}`;
    } else {
        style += 'btn';
    }

    return (
        `<button class=${style}>${props.text}</button>`
    );
}