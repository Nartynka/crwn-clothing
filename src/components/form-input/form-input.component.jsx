import React from 'react';

import './form-input.styles.scss'

const FormInput = ({ handleChange, label, ...other }) => (
	<div className='group'>
		<input onChange={handleChange} className='form-input' {...other} />
		{label ? (
			<label className={`${other.value.length ? 'shrink' : ''} form-label`}>
				{label}
			</label>
		) : null}
	</div>
);

export default FormInput;
