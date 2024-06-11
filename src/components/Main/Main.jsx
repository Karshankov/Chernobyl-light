import React, { Suspense } from 'react';
import Loading from '../UI/Loading';
import Card from './card';
import styles from './styles.module.css'

const Main = () => {
  return (
    <div className={styles.main}>
      <Suspense fallback={<Loading />}>
        <div className={styles.name}>
        </div>
        <div className={styles.container}>
          <Card Title='Список выселенных деревень' Image='../../../../public/buhgalter.jpg' Text='Наши приколисты' NavLink='/village' />
          <Card Title='История Чернобыля' Image='../../../../public/buhgalter.jpg' Text='Ихние приколисты' NavLink='/history' />
          <Card Title='Тестовые задания' Image='../../../../public/buhgalter.jpg' Text='Нашние приколисты' NavLink='/ChernobylTests' />
          <Card Title='Документальные источники' Image='../../../../public/buhgalter.jpg' Text='Семнадцать приколистов' NavLink='/documents' />
          <Card Title='Как изменился Чернобыль' Image='../../../../public/buhgalter.jpg' Text='Семнадцать приколистов' NavLink='/photoalbum' />
          <Card Title='Ликвидаторы' Image='../../../../public/buhgalter.jpg' Text='Семнадцать приколистов' NavLink='/blog' />
        </div>
      </Suspense>
    </div>
  );
};

export default Main;
