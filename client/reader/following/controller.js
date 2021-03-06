/**
 * External dependencies
 */
import React from 'react';
import i18n from 'i18n-calypso';

/**
 * Internal dependencies
 */
import route from 'lib/route';
import userSettings from 'lib/user-settings';
import { trackPageLoad, setPageTitle } from 'reader/controller-helper';
import { renderWithReduxStore } from 'lib/react-helpers';

const analyticsPageTitle = 'Reader';

export default {
	followingEdit( context ) {
		var FollowingEdit = require( 'reader/following-edit' ),
			basePath = route.sectionify( context.path ),
			fullAnalyticsPageTitle = analyticsPageTitle + ' > Manage Followed Sites',
			mcKey = 'following_edit',
			search = context.query.s;

		setPageTitle( context, i18n.translate( 'Manage Followed Sites' ) );

		trackPageLoad( basePath, fullAnalyticsPageTitle, mcKey );

		renderWithReduxStore(
			React.createElement( FollowingEdit, {
				key: 'following-edit',
				initialFollowUrl: context.query.follow,
				search: search,
				context: context,
				userSettings: userSettings
			} ),
			document.getElementById( 'primary' ),
			context.store
		);
	}
};
