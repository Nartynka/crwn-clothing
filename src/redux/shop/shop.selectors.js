import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
	[ selectShop ],
	shop => shop.collections
);

//Object.keys => get all the keys (e.g."hats") from collections object
//map over them which return a new array of collections 
export const selectCollectionsForPreview = createSelector(
	[ selectShopCollections ],
	collections => Object.keys(collections).map(key=>collections[key])
);

export const selectCollection = memoize(collectionUrlParam =>
	createSelector(
		[ selectShopCollections ],
		collections => collections[collectionUrlParam]
	)
);
