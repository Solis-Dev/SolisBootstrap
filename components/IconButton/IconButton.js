export default function IconButton(props) {
    let style = `btn-${props.size} btn-${props.variant} shadow bg-gradient`;

    return (
        <button class={style}>
            <i class={`fas fa-${props.icon}`}></i> {props.text}
        </button>
    );
}