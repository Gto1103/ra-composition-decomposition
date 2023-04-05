/**
 * Основной виджет для сайта используется повсеместно
 */

const Widget = (props) => {
	
/**
 * image является не обязательным свойством, туда передаётся объект image содержащий свойтва source и alt
 * Также необходимо передать свойства header и onClick - функция нажатия на виджет
 * В children передаем основную структуру виджета
 */

	const { image, header, onClick, children} = props;

	return (
	<div className="widget" onClick={onClick}>
		{image ? <img src={image.src} alt={image.alt} /> : null}
		<h5 className='widget-header'>
			{header}
		</h5>
		{children}
	</div>
	)
}

export default Widget;