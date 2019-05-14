import React from 'react';
import '../../setupTests';
import { shallow } from 'enzyme';
import CommentList from 'components/CommentList';
import CommentBox from 'components/CommentBox';
import App from 'components/App';
import ReactDOM from 'react-dom';
import '../../index';

jest.mock('react-dom');

test('Renders the application', () => {
	expect(ReactDOM.render).toBeCalled();
});

describe('Test the child components inside App.js', () => {
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
});
