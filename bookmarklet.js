javascript:
(function() {
  'use strict';

  const STUDENT_NAME = 'SeraphimEvil';
  const MENTOR_NAME = 'aalexeev239';
  const HOORAY_REACTION = 'HOORAY';

  const commentContainers = document.querySelectorAll('.js-comment-container');
  const commentContainersList = Array.prototype.slice.call(commentContainers);

  const checkMentorHooray = (commentContainerElement) => {
    const lastComment = commentContainerElement.lastElementChild;
    const hoorayEmotionElement = lastComment.querySelector('.js-reactions-container g-emoji[alias="tada"]');

    if (!hoorayEmotionElement) {
      return true;
    };

    const hoorayBtnElement = hoorayEmotionElement.parentElement;
    const btnElementLabel = hoorayBtnElement.getAttribute('aria-label');

    return btnElementLabel.indexOf(MENTOR_NAME) === -1;
  };
  

  commentContainersList
    .filter(element => element.classList.contains('outdated-comment'))
    .forEach(element => element.classList.remove('outdated-comment'));

  const commentContainersToHighlight = commentContainersList
    .filter(checkMentorHooray);

  commentContainersToHighlight
    .forEach(element => element.style.backgroundColor = 'rgba(0, 255, 0, 0.3)');
})();