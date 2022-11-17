import './App.scss';


function App() {
  return (
    <div className="wrapper">
     <header className='header-container'>
      <ul>
      <li className='header top'>Главная</li>
      <li className='header top'>Новости</li>
      <li className='header top'>Размещение и тарифы</li>
      <li className='header top'><img width="8" height="10"src="/img/map.svg" alt="На карте" className='map'/>Объявления на карте</li>
      <li className='header top'>Контакты</li>
      <li className='header top'>Закладки<img width="16" height="16" src="/img/favourite.png" alt="Закладки" className='favourite'/></li>
      <li className='header top entry'>Вход и регистрация</li>
      </ul>

     </header>
      
     </div>
  );
}

export default App;
