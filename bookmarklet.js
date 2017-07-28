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
    .filter(element => element.querySelector('.js-reactions-container button.reaction-summary-item'))
    // .filter(element => element.querySelector('.js-reactions-container button.reaction-summary-item').hasAttribute('value', 'HOORAY'))
    // .filter(function(element) {
    //   element.querySelector('.js-reactions-container button.reaction-summary-item').hasAttribute('value', 'HOORAY')
    // })
    .forEach(function(element) {
      let reactionBtns = element.querySelector
    })

  console.log(reactedCommentsList)

  // console.log('Массив после фильтрации вернул мне: ' + reactedCommentsList)
    // .forEach(function(element) {
    //   const btnReactions = element.querySelectorAll('.js-reactions-container button.reaction-summary-item');
    //   const btnReactionsList = Array.prototype.slice.call(btnReactions);

    //   const hoorayReactionBtn = btnReactionsList
    //     // .filter(element => element.hasAttribute('value', 'HOORAY'))
    //     .filter(function(elemnt) {
    //       console.log(element)
    //       let checkMentor = element.getAttribute('aria-label');
    //       let checkReaction = element.getAttribute('value');

    //       if (checkReaction.indexOf(HOORAY_REACTION) >= 0 && checkMentor.indexOf(MENTOR_NAME) >= 0) {
    //         return true;
    //       } 
    //     })
    //     .forEach(function(element) {
    //       let checkMentor = element.getAttribute('aria-label');
    //       let checkReaction = element.getAttribute('value');

    //       console.log(checkMentor);
    //       console.log(checkReaction)
    //     });

      // let checkMentor = btnReaction.getAttribute('aria-label');
      // let checkReaction = btnReaction.getAttribute('value');

      // if (checkReaction.indexOf(HOORAY_REACTION) >= 0 && checkMentor.indexOf(MENTOR_NAME) >= 0) {
      //   return false;
      // } else {
      //   element.lastElementChild.querySelector('.review-comment:last-child').style.backgroundColor = 'rgba(0, 255, 0, 0.3)';
      // }
    });
})();