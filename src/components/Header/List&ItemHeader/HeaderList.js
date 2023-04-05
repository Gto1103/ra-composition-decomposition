import HeaderItem from "./HeaderItem";

/**
 * Блок для отображения списков
 */

const HeaderList = ({ name, items }) => {

/**
 * Содержит свойство items, массив объектов для каждого заголовка
 * Свойство name определяет класс списка (заголовки, новости, валюта)
 * Для идентификатора key используется индекс массива, в реальном проекте необходимо изменить на id
 */

	return(
		<ul className={name + '-list'}>
			{items && items.map((item, idx)=> <HeaderItem key={idx} {...item}/>)}
		</ul>
	)
}

export default HeaderList;