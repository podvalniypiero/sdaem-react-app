import React from 'react';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';



function App() {
  return (
    <div className="wrapper">
     <Header/>
    {/* <Footer/> */}


    <footer>


    <div className='footer-container'>

      <div className='logo-container'>
    <img width="" height=""src="/img/logo.png" alt="SDAEM.BY" className='logo'/>
    <p className='logo-translate'>СДАЁМ БАЙ</p>
    <p className='info'>
        ИП Шушкевич Андрей Викторович
        УНП 192602485 Минским горисполкомом 10.02.2016
        220068, РБ, г. Минск, ул. Осипенко, 21, кв.23
        +375 29 621 48 33, sdaem@sdaem.by
        Режим работы: 08:00-22:00
    </p>
    </div>

    <div className='info-container'>
      {/* <div className='info-container-left'> */}
    <p className='info-bold'>Коттеджи и усадьбы</p>
    <p className='info-bold'>Бани и сауны</p>
    <p className='info-bold'>Авто на прокат</p>
    {/* </div> */}
    <p className='info-bold'>Квартиры</p>
    <p className='info-list'>Квартиры в Минске</p>
    <p className='info-list'>Квартиры в Гомеле</p>
    <p className='info-list'>Квартиры в Бресте</p>
    <p className='info-list'>Квартиры в Витебске</p>
    <p className='info-list'>Квартиры в Гродно</p>
    <p className='info-list'>Квартиры в Могилеве</p>
  
    <p className='info-nav'>Новости</p>
    <p className='info-nav'>Размещение и тарифы</p>
    <p className='info-nav'>Объявления на карте</p>
    <p className='info-nav'>Контакты</p>
    </div>

    <div className='social-list'>
    <div className='social-list-item'>
      <p>Мы в соцсетях</p> 
        <img src='/img/inst.jpg' alt='inst'  />
        <img src='/img/vk.jpg' alt='vk'  />
        <img src='/img/fb.jpg' alt='fb'  />

      </div>
    </div>
    <div className='payment-list'>
      <img src='/img/visa.jpg' alt='visa'/>
      <img src='/img/webpay.jpg' alt='webpay'/>
      <img src='/img/verified-by-visa.jpg' alt='verified-by-visa'/>
      <img src='/img/mastercard.jpg' alt='mastercard'/>
      <img src='/img/securecode.jpg' alt='secure code mastercard'/>
      <img src='/img/belkart.jpg' alt='belkart'/>

    </div>


    </div>


    </footer>
     </div>
  );
}

export default App;
