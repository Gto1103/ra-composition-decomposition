import SearchHeader from "./SearchHeader/SearchHeader";
import SearchLogo from "./SearchLogo/SearchLogo";
import SearchForm from "./SearchForm/SearchForm";

/**
 * Основной компонент блока поиска.
 */

const SearchBlock = (props) => {

	const {
		searchHeader,
		searchLogo,
		searchForm
	} = props;

/**
 * Содержит свойства searchHeader, searchLogo, searchForm для компонентов
 */

	return (
		<div className="search-block">
			<SearchHeader searchHeader={searchHeader} className="search-header">
			</SearchHeader>
			<SearchLogo searchlogo={searchLogo} className="search-logo">
			</SearchLogo>
			<SearchForm searchForm={searchForm}>
			</SearchForm>
		</div>
	)
}
export default SearchBlock;