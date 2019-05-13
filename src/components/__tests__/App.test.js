import React from 'react';
import '../../setupTests';
import { shallow } from 'enzyme';
import CommentList from 'components/CommentList';
import CommentBox from 'components/CommentBox';
import App from 'components/App';

let wrapped;

beforeEach(() => {
	wrapped = shallow(<App />);
});
it('shows a comment box', () => {
	expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
	expect(wrapped.find(CommentList).length).toEqual(1);
});
