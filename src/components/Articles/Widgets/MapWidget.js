/**
 * Виджет карты
 */

const MapWidget = ({ title, text, onClick }) => {
	
	/**
	 * Необходимо передать свойства title, text и onClick функцию нажатия на виджет
	 */
	
		return (
		<div className="widget" onClick={onClick}>
			<h3 className='widget-header'>{title}</h3>
				<p>{text}</p>
		</div>
		)
	}
	
	export default MapWidget;