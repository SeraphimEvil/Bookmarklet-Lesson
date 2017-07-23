javascript:
(function() {
  'use strict';

  const STUDENT_NAME = 'SeraphimEvil';
  const MENTOR_NAME = 'aalexeev239';
  // const MENTOR_NAME = 'lizzzzzy';

  const commentContainers = document.querySelectorAll('.js-comment-container'); // ищем все комментарии, получаем NodeList...  

  const commentContainersList = Array.prototype.slice.call(commentContainers); // приводим NodeList к Array

  const closedCommentContainersList = commentContainersList
    .filter(element => element.classList.contains('outdated-comment'))
    .forEach(element => element.classList.remove('outdated-comment'));
})();