
import styles from './Header.module.scss';
import { Route, Link } from 'react-router-dom';


function Header(){
  return(
<header>
      <div className={styles['header-container-top']}>

      <ul className={styles['header-top']}>
        <li>Главная</li>
        <li>Новости</li>
        <li>Размещение и тарифы</li>
        <li><img width="8" height="10"src="/img/map.svg" alt="На карте" className={styles.map}/>Объявления на карте</li>
        <li>Контакты</li>
        <li>Закладки<img width="16" height="16" src="/img/favourite.png" alt="Закладки" className={styles.favourite}/></li>
        <li className={styles.entry}>Вход и регистрация</li>
      </ul>
      </div>

      <div className={styles['header-container-bottom']}>
        <ul className={styles['header-bottom']}>
          <li><img width="" height=""src="/img/logo.png" alt="SDAEM.BY" className={styles.logo}/></li>
          <li><img width="8" height="10"src="/img/map.svg" alt="На карте" className={styles.map}/>Квартиры на сутки</li>
          <li>Коттеджи и усадьбы</li>
          <li>Бани и Сауны</li>
          <li>Авто напрокат</li>
          <li><button className={styles['header-button']}>+ Разместить объявление</button></li>
        </ul>
      </div>

     </header>
  )
}

export default Header;