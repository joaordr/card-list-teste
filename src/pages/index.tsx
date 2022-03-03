import { useEffect, useState } from 'react';
import Card from '../components/Card'
import { Pagination } from '../components/Pagination';
import styles from '../styles/Home.module.scss'

let allCards = [];
let paginationCards = [];
let totalCountRegisters = 0;

const registersPerPage = 5;

export default function Home() {
  const [page, setPage] = useState(1);
  const [cards, setCards] = useState([]);

  function splitArray(base, max) {
    var result = [[]];
    var group = 0;

    for (var indice = 0; indice < base.length; indice++) {
      if (result[group] === undefined) {
        result[group] = [];
      }

      result[group].push(base[indice]);

      if ((indice + 1) % max === 0) {
        group = group + 1;
      }
    }

    return result;
  }

  useEffect(() => {
    setCards(paginationCards[page - 1]);
  }, [page])

  useEffect(() => {
    for (let i = 0; i < 38; i++) {
      allCards.push(i + 1);
    }

    totalCountRegisters = allCards.length;
    paginationCards = splitArray(allCards, registersPerPage);

    setCards(paginationCards[0]);
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {cards.map(card => {
          return <Card key={card} card={card} />
        })}
        <Pagination onPageChange={setPage} totalCountRegisters={totalCountRegisters} registersPerPage={registersPerPage} currentPage={page} ></Pagination>
      </div>
    </div>
  )
}
