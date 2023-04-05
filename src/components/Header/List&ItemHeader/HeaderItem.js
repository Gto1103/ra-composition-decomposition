/**
 * Заголовок каждого отдела
 */

const HeaderItem = (props) => {

	const { name, link, title, img, value, change, onClick } = props;

	/**
	 * Содержит свойства name, link, title, и функцию onClick, которые являются обязательными
	 * img, value и change передаются по необходимости
	 */
	
		return(
			<li className={name + '-item'}>
				<a href={link} className={title} onClick={onClick}>
					{ img ? <img src={img} alt='img' /> : null}
					<span>{title}</span>
					{ value? <span>{value}</span>: null}
					{ change ? <span>{change}</span> : null}
				</a>
			</li>
		)
	}
	
	export default HeaderItem;