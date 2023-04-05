/**
 * Боковой виджет
 */

const AssideWidget = ({ image, title, text, onClick }) => {
	
	/**
	 * Необходимо передать свойства image, title, text и onClick функцию нажатия на виджет
	 */
	
		return (
		<div className="widget" onClick={onClick}>
			{image ? <img src={image} alt='aside widget' /> : null}
			<h3 className='widget-header'>
				{title}
			</h3>
			<p>{text}</p>
		</div>
		)
	}
	
	export default AssideWidget;