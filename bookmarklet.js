javascript:
(function() {
  'use strict';

  const STUDENT_NAME = 'SeraphimEvil';
  const MENTOR_NAME = 'aalexeev239';

  const commentContainers = document.querySelectorAll('.js-comment-container'); // ищем все комментарии, получаем NodeList...  

  const commentContainersList = Array.prototype.slice.call(commentContainers); // приводим NodeList к Array

  const closedCommentContainersList = commentContainersList
    .filter(element => element.classList.contains('outdated-comment'))
    .forEach(element => element.classList.remove('outdated-comment'));

  const reactedCommentsList = commentContainersList 
    .filter(function(element) {
      let reactComment = element.lastElementChild.querySelector('.review-comment:last-child .comment-reactions-options button');
      return reactComment;
    })
    .forEach(function(element) {
      element.lastElementChild.querySelector('.review-comment:last-child').style.backgroundColor = 'rgba(0, 255, 0, 0.3)';
    });
})();