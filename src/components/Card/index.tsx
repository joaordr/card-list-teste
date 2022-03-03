import styles from './card.module.scss'

export default function Card({ card }) {
    return (
        <div className={styles.container}>
            <h1>Card {card}</h1>
        </div>
    )
}