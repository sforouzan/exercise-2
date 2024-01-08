import styles from './Button.module.css'

export default function Button({
    title="default",
    color
}) {
    return(
        <button style={{backgroundColor: color}}>{title}</button>
    )
}