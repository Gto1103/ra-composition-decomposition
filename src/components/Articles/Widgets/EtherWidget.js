/**
 * Виджет эфира
 */

const EtherWidget = ({ title, programs, onClick }) => {
	
	/**
	 * Необходимо передать свойства title и onClick функцию нажатия на виджет
	 * programs содержит массив ссылок, заголовков и текст сайтов (link, img, nowTV, nextTV)
	 * Для идентификатора key используется индекс массива, в реальном проекте необходимо изменить на id
	 */
	
		return (
		<div className="widget" onClick={onClick}>
			<h3 className='widget-header'>{title}</h3>
			<ul className="widget-tvprogram">
				{programs && programs.map((item, idx) => (
					<li key={idx}>
						<a href={item.link}>
							{item.img ? <img src={item.img} alt='weather widget' /> : null}
							<p>{item.nowTV}</p>
							<p>{item.nextTV}</p>
						</a>
					</li>
					))}
			</ul>
		</div>
		)
	}
	
	export default EtherWidget;