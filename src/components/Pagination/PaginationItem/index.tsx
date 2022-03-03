import styles from './paginationItem.module.scss'

interface PaginationItemProps {
    isCurrent?: boolean;
    number: number;
    onPageChange: (page: number) => void;
}

export function PaginationItem({ isCurrent = false, number, onPageChange }: PaginationItemProps) {
    if (isCurrent) {
        return (
            <button className={styles.button} disabled>{number}</button>
        )
    }

    return (
        <button className={styles.button} onClick={() => onPageChange(number)}>{number}</button>
    )

}