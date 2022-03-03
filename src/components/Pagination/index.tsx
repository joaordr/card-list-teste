import { PaginationItem } from "./PaginationItem";

import styles from './pagination.module.scss'

interface PaginationProps {
    totalCountRegisters: number;
    registersPerPage?: number;
    currentPage?: number;
    onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
    return [...new Array(to - from)].map((_, index) => {
        return from + index + 1;
    }).filter(page => page > 0);
}

export function Pagination({ totalCountRegisters, registersPerPage, currentPage = 1, onPageChange }: PaginationProps) {
    const lastPage = Math.ceil(totalCountRegisters / registersPerPage);
    const previousPages = currentPage > 1 ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1) : [];
    const nextPages = currentPage < lastPage ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage)) : [];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <strong>{(currentPage * registersPerPage) + 1 - registersPerPage}</strong> - <strong>{(currentPage * registersPerPage) <= totalCountRegisters ? currentPage * registersPerPage : totalCountRegisters}</strong> de <strong>{totalCountRegisters}</strong>
            </div>

            <div className={styles.content}>
                {currentPage > (1 + siblingsCount) && (
                    <>
                        <PaginationItem number={1} onPageChange={onPageChange} />
                        {currentPage > (2 + siblingsCount) && <p>...</p>}
                    </>

                )}

                {previousPages.length > 0 && previousPages.map(page => {
                    return <PaginationItem key={page} number={page} onPageChange={onPageChange} />
                })}

                <PaginationItem number={currentPage} isCurrent onPageChange={onPageChange} />

                {nextPages.length > 0 && nextPages.map(page => {
                    return <PaginationItem key={page} number={page} onPageChange={onPageChange} />
                })}

                {currentPage + siblingsCount < lastPage && (
                    <>
                        {(currentPage + 1 + siblingsCount) < lastPage && <p>...</p>}
                        <PaginationItem number={lastPage} onPageChange={onPageChange} />
                    </>
                )}
            </div>


        </div>
    )
}