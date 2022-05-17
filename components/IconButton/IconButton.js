export default function IconButton(props) {
    let style = `btn-${props.variant} shadow bg-gradient`;

    if(props.size){
        style += `btn-${size}`;
    } else {
        style += 'btn';
    }

    let icon = `fas fa-${props.icon}`;

    return (
        `<button class=${style}><i class=${icon}></i> ${props.text}</button>`
    );
}