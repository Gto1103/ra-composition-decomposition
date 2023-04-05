/**
 * Виджет погоды
 */

const WeatherWidget = ({ image, title, nowTemp, futureTemp, nowTime, futureTime, onClick }) => {
	
	/**
	 * Необходимо передать свойства image, title, nowTemp, futureTemp, nowTime, futureTime
	 *  и onClick функцию нажатия на виджет
	 */
	
		return (
		<div className="widget" onClick={onClick}>
			
			<h3 className='widget-header'>{title}</h3>
				{image ? <img src={image} alt='weather widget' /> : null}
				<p>{nowTemp}</p>
			<div className="widget-temprature">
				<span>{nowTime + ' ' + nowTemp}</span>
				<span>{futureTime + ' ' + futureTemp}</span>
			</div>
		</div>
		)
	}
	
	export default WeatherWidget;