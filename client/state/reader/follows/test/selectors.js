/**
 * External dependencies
 */
import { expect } from 'chai';

/**
 * Internal dependencies
 */
import {
	getFollowCount
} from '../selectors';

describe( 'selectors', () => {
	describe( '#getFollowCount()', () => {
		it( 'should return zero if nothing has been followed', () => {
			const count = getFollowCount( {
				reader: {
					follows: {
						items: []
					}
				}
			} );

			expect( count ).to.eq( 0 );
		} );

		it( 'should return the count if something has been followed', () => {
			const count = getFollowCount( {
				reader: {
					follows: {
						items: [ 'http://discover.wordpress.com' ]
					}
				}
			} );

			expect( count ).to.eq( 1 );
		} );
	} );
} );
