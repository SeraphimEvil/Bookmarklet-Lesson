javascript:
(function() {
	'use strict';

	var closedComment = document.querySelectorAll('.js-comment-container.outdated-comment');
	const studentName = 'SeraphimEvil';
	const mentorName = 'lizzzzzy';

	for (var i = closedComment.length - 1; i>=0; i--) {
		var commentAuthor = document.querySelector('.review-comment a.author').innerHTML;

		closedComment[i].classList.remove('outdated-comment');

		if (commentAuthor == studentName) {
			console.log('Комментарий студента');
		} else if (commentAuthor == mentorName) {
			console.log('Комментарий наставника')
		} else {
			console.log('Нет комментария')
		}
	};
})();