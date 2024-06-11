import React from 'react';
import { Village } from './Village';
import { faqList } from './faqList';
import styles from './Village.module.css'

const VillagePage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <h1>Список выселенных деревень</h1>
      </div>
      <Village faqList={faqList} />;
    </div>
  );
};
export default VillagePage;
