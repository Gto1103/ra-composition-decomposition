import './App.css';
import Header from './components/Header/Header';
import SearchBlock from './components/SearchBlock/SearchBlock';
import Articles from './components/Articles/Articles';
import AdvBanner from './components/AdvBanner/AdvBanner';

/**
 * Импорт данных для работы компонентов
 */ 

import header from './data/header';
import search from './data/search';
import advert from './data/advert';
import articles from './data/articles';


function App() {
  return (
    <div className = "App">
      <Header header={header} className="header">
      </Header>
		<SearchBlock search={search} className="search-block">
		</SearchBlock>
		<AdvBanner advert={advert} className="adv-banner">
		</AdvBanner>
		<Articles articles={articles} classname="articles">
		</Articles>
    </div>
  );
}

export default App;
