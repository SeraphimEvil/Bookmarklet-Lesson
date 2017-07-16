'use strict';

javascript:
(function openComments() {
	var closedComment = document.querySelectorAll('.js-comment-container.outdated-comment');

	for (var i = closedComment.length - 1; i>=0; i--) {
		closedComment[i].classList.remove('outdated-comment');
	};
});


// javascript:(function() {var closedComment = document.querySelectorAll('.js-comment-container.outdated-comment');for (var i = closedComment.length - 1; i>=0; i--) {closedComment[i].classList.remove('outdated-comment');};})();

