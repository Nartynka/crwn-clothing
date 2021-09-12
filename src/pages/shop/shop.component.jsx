import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionComponent from '../collection/collection.component';

const ShopPage = ({match}) => (
	<div className='shop-page'>
		<Route exact path={match.path} component={CollectionsOverview} />
		<Route path={`${match.path}/:collectionId`} component={CollectionComponent} />
	</div>
);

export default ShopPage;
