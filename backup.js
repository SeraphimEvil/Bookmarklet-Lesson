javascript:
(function() {
  'use strict';

  const STUDENT_NAME = 'SeraphimEvil';
  const MENTOR_NAME = 'aalexeev239';
  const HOORAY_REACTION = 'HOORAY';

  const commentContainers = document.querySelectorAll('.js-comment-container');
  const commentContainersList = Array.prototype.slice.call(commentContainers);

  const closedCommentContainersList = commentContainersList
    .filter(element => element.classList.contains('outdated-comment'))
    .forEach(element => element.classList.remove('outdated-comment'));

  const reactedCommentsList = commentContainersList 
    .filter(element => element.querySelector('.js-reactions-container .comment-reactions-options button'))
    .forEach(function(element) {
      let btnReaction = element.querySelector('.js-reactions-container .comment-reactions-options button:last-child');
      let checkMentor = btnReaction.getAttribute('aria-label');
      let checkReaction = btnReaction.getAttribute('value');

      if (checkReaction.indexOf(HOORAY_REACTION) >= 0 && checkMentor.indexOf(MENTOR_NAME) >= 0) {
        return false;
      } else {
        element.lastElementChild.querySelector('.review-comment:last-child').style.backgroundColor = 'rgba(0, 255, 0, 0.3)';
      }
    });
})();