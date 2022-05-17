export default function Button(props) {
    let style = `btn-${props.size} btn-${props.variant} shadow bg-gradient`;

    return (
        <button class={style}>{props.text}</button>
    );
}