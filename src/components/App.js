import React from 'react';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

function App() {
	return (
		<div className="App">
			Hi there !
			<CommentBox />
			<CommentList />
		</div>
	);
}

export default App;

/**
 * Enzyme API is divided into 
 * - Static: renders the given component and return plain HTML
 * - Shallow: renders just the given component and none of its children
 * - Full DOM: renders the component and all of its children, it lets us modify it afterward.
 */
