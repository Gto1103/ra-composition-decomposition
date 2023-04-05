import AssideWidget from "./AssideWidget/AssideWidget";
import HeaderList from "./List&ItemHeader/HeaderList";

/**
 * Основной блок "шапки" сайта
 */

const Header = (props) => {

	const { newsHeader, news, currency, assideWidget } = props;

/**
 * Свойства image и widgetHeader передаются для блока Widget
 * Свойство newsHeader, массив объектов для каждого заголовка
 * Свойство news, массив объектов для каждой новости
 * Свойство currency, массив объектов для валют
 * Для идентификатора key используется индекс массива, в реальном проекте необходимо изменить на id
 */

	return (
		<>
		<HeaderList newsHeader={newsHeader} className="news-header">
		</HeaderList>
		<HeaderList news={news} className='news-block'>
		</HeaderList>
		<HeaderList currency={currency} className='currency-list'>
		</HeaderList>
		<AssideWidget header={assideWidget} className='widget-in-header'>
		</AssideWidget>
		</>
	)
}
export default Header;