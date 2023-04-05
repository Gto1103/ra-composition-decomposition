/**
 * Виджет посещаемое
 */

const VisitedWidget = ({ title, websaits, onClick }) => {
	
	/**
	 * Необходимо передать свойства title и onClick функцию нажатия на виджет
	 * websaits содержит массив ссылок, заголовков и текст сайтов (link, title, text)
	 * Для идентификатора key используется индекс массива, в реальном проекте необходимо изменить на id
	 */
	
		return (
		<div className="widget" onClick={onClick}>
			<h3 className='widget-header'>{title}</h3>
			<ul className="widget-websites">
				{websaits && websaits.map((item, idx) => (
					<li key={idx}>
						<a href={item.link}>
							<h5>{item.title}</h5>
							<p>{item.text}</p>
						</a>
					</li>
					))}
			</ul>
		</div>
		)
	}
	
	export default VisitedWidget;