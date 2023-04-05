import HeaderList from "../../Header/List&ItemHeader/HeaderList";

/**
 * Шапка блока поиска с категориями
 */

const SearchHeader = ({searchHeader}) => {

	/**
 * Содержит свойство searchHeader, массив объектов для каждого заголовка
 */

	return (
		<div className="search-header">
			<HeaderList searchHeader={searchHeader}>
			</HeaderList>	
		</div>
	)
}
export default SearchHeader;