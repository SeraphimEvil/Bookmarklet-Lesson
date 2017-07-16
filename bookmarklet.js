'use strict';

javascript:
(function() {
	var closedComment = document.querySelectorAll('.js-comment-container.outdated-comment');
	const studentName = 'SeraphimEvil';
	const mentorName = 'aalexeev239';

	for (var i = closedComment.length - 1; i>=0; i--) {
		closedComment[i].classList.remove('outdated-comment');
	};
});