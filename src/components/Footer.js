
import styles from './Footer.module.scss';



function Footer(){
  return(
    <footer>
    <div className={styles['footer-container']}>
    <div className={styles['footer-container-main']}>
    <div className={styles['info-container']}>

      <div className={styles['logo-container']}>
    <img width="" height=""src="/img/logo.png" alt="SDAEM.BY" className={styles['logo']}/>
    <p className={styles['logo-translate']}>СДАЁМ БАЙ</p>
    <p className={styles['info']}>
        ИП Шушкевич Андрей Викторович
        УНП 192602485 Минским горисполкомом 10.02.2016
        220068, РБ, г. Минск, ул. Осипенко, 21, кв.23
        +375 29 621 48 33, sdaem@sdaem.by
        Режим работы: 08:00-22:00
    </p>
    </div>

    <ul className={styles['colOne']}>
    
    <li className={styles['info-bold']}>Коттеджи и усадьбы</li>
    <li className={styles['info-bold']}>Бани и сауны</li>
    <li className={styles['info-bold']}>Авто на прокат</li>
    </ul>
 
    <ul className={styles['colTwo']}>
    <li className={styles['info-bold']}>Квартиры</li>
    <li className={styles['info-list']}>Квартиры в Минске</li>
    <li className={styles['info-list']}>Квартиры в Гомеле</li>
    <li className={styles['info-list']}>Квартиры в Бресте</li>
    </ul>

    <ul className={styles['colThree']}>
    <li className={styles['info-list one']}>Квартиры в Витебске</li>
    <li className={styles['info-list']}>Квартиры в Гродно</li>
    <li className={styles['info-list']}>Квартиры в Могилеве</li>
    </ul>

    <ul className={styles['colFour']}>
    <li className={styles['info-nav']}>Новости</li>
    <li className={styles['info-nav']}>Размещение и тарифы</li>
    <li className={styles['info-nav']}>Объявления на карте</li>
    <li className={styles['info-nav']}>Контакты</li>
    </ul>
    </div>
    
    </div>
    <div className={styles['footer-link']}>
    <div className={styles['social-list']}>

    <div className={styles['social-list-item']}>
      <p>Мы в соцсетях </p> 
        <img src='/img/inst.jpg' alt='inst'  />
        <img src='/img/vk.jpg' alt='vk'  />
        <img src='/img/fb.jpg' alt='fb'  />

      </div>
    
    <div className={styles['payment-list']}>
      <img src='/img/visa.jpg' alt='visa'/>
      <img src='/img/webpay.jpg' alt='webpay'/>
      <img src='/img/verified-by-visa.jpg' alt='verified-by-visa'/>
      <img src='/img/mastercard.jpg' alt='mastercard'/>
      <img src='/img/securecode.jpg' alt='secure code mastercard'/>
      <img src='/img/belkart.jpg' alt='belkart'/>

    </div>
    </div>
    </div>
    </div>

    </footer>
  )
}

export default Footer;