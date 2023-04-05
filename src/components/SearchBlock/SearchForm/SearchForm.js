import { useState } from 'react';

/**
 * Форма поиска
 */

const SearchForm = ({ name, searchHelp, onSubmit }) => {

	/**
 * Содержит свойство name, searchHelp и функцию onSubmit отправки формы
 * Свойства value, onChange у input можно обработать и использовать
 * (например выводить в label предварительные результаты и т.д.)
 */

	const [form, setForm] = useState({
		name: '',
	})

	const handleSubmit = (evt) => {
		evt.preventDefault();
		// onSubmit(evt);
		setForm({
			name: ''
		});
	}

	const handleChange = (evt) => {
		const { name, value } = evt.target;
		setForm(prevForm => ({...prevForm, [name]: value}))
	}

	return (
		<div className="search-form-wrapper">
			<form name={name} className={name + '-search-form'} onSubmit={handleSubmit}>
				<input name={name} type="text" value={form.search} onChange={handleChange} required>
				</input>
				<button type="submit">
					Найти
				</button>
				<label htmlFor={name}>{searchHelp}</label>
			</form>	
		</div>
	)
}

export default SearchForm;