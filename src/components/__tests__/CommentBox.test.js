import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
	wrapped = mount(<CommentBox />);
});

afterEach(() => {
	wrapped.unmount();
});
describe('Testing CommentBox Component', () => {
	it('has a text area and a button', () => {
		expect(wrapped.find('textarea').length).toEqual(1);
		expect(wrapped.find('button').length).toEqual(1);
	});

	describe('the text area', () => {
		beforeEach(() => {
			wrapped.find('textarea').simulate('change', { target: { value: 'new comment' } });
			wrapped.update();
		});
		it('has a textarea that user can type in', () => {
			expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
		});

		it('has the textarea emptied after submission', () => {
			wrapped.find('form').simulate('submit');
			wrapped.update();
			expect(wrapped.find('textarea').prop('value')).toEqual('');
		});
	});
});
