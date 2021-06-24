import React from 'react';

import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => (
	<div className='collection-preview'>
		<h2 className='title'>{title.toUpperCase()}</h2>
		<div className='preview'>
			{items
				.filter((item, idx) => idx < 4)
				.map(({ id, ...other }) => <CollectionItem key={id} {...other} />)}
		</div>
	</div>
);

export default CollectionPreview;
