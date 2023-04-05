import WeatherWidget from "./Widgets/WeatherWidget";
import VisitedWidget from "./Widgets/VisitedWidget";
import MapWidget from "./Widgets/MapWidget";
import TVprogramWidget from "./Widgets/TVprogramWidget";
import EtherWidget from "./Widgets/EtherWidget";

/**
 * Основной блок статей.
 */

const Articles = (props) => {

	const { weather, visited, map, tvprogram, ether } = props

/**
 * Но наверное лучше создать каждый виджет отдельно
 *  и поместить в папку Widgets
 */

	return (
		<div className="articles-wrapper">
			<WeatherWidget {...weather} className="weather">
			</WeatherWidget>
			<VisitedWidget {...visited} className="visited">
			</VisitedWidget>
			<MapWidget {...map} className="map">
			</MapWidget>
			<TVprogramWidget {...tvprogram} className="tvprogram">
			</TVprogramWidget>
			<EtherWidget {...ether} className="ether">
			</EtherWidget>
		</div>

	)
}
export default Articles;