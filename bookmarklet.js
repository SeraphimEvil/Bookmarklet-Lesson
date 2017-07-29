javascript:
(function() {
  'use strict';

  const STUDENT_NAME = 'SeraphimEvil';
  const MENTOR_NAME = 'aalexeev239';
  const HOORAY_REACTION = 'HOORAY';

  const commentContainers = document.querySelectorAll('.js-comment-container');
  const commentContainersList = Array.prototype.slice.call(commentContainers);

  const checkMentorHooray = (commentContainerElement) => {
    const lastCommentContainer = commentContainerElement.lastElementChild;
    if (lastCommentContainer.classList.contains('js-inline-comments-container')) {
      const lastCommentBlock = lastCommentContainer.querySelector('.js-comments-holder');
      const lastComment = lastCommentBlock.lastElementChild;
      const hoorayEmotionElement = lastComment.querySelector('.js-reactions-container g-emoji[alias="tada"]');

      if (!hoorayEmotionElement) {
        return true;
      };

      const hoorayBtnElement = hoorayEmotionElement.parentElement;
      const btnElementLabel = hoorayBtnElement.getAttribute('aria-label');

      return btnElementLabel.indexOf(MENTOR_NAME) === -1;
    };
  };

  const makeCommentsList = (element, index) => {
    element.id = index;
    element.style.backgroundColor = 'rgba(0, 255, 0, 0.3)';

    const checkBlockItem = document.createElement('li');
    const checkBlockLink = document.createElement('a');

    checkBlockList.appendChild(checkBlockItem);
    checkBlockItem.appendChild(checkBlockLink);
    checkBlockLink.innerHTML = element;
    checkBlockLink.setAttribute('href', '#' + index);
  }

  const commentToCheckBlock = document.createElement('div');
  commentToCheckBlock.classList.add('check-list');
  commentToCheckBlock.style.position = 'fixed';
  commentToCheckBlock.style.width = '300px';
  commentToCheckBlock.style.minHeight = '150px';
  commentToCheckBlock.style.top = '60px';
  commentToCheckBlock.style.right = '20px';
  commentToCheckBlock.style.backgroundColor = '#fff';
  commentToCheckBlock.style.zIndex = '999';
  commentToCheckBlock.style.borderRadius = '5px';
  commentToCheckBlock.style.border = '5px solid #333';
  commentToCheckBlock.style.boxSizing = 'border-box';
  commentToCheckBlock.style.padding = '10px';

  const pageBody = document.body;
  pageBody.appendChild(commentToCheckBlock);

  const chekBlockTitle = document.createElement('h2');
  commentToCheckBlock.appendChild(chekBlockTitle);
  chekBlockTitle.innerHTML = 'Список комментариев к проверке:';
  chekBlockTitle.style.fontSize = '14px';
  chekBlockTitle.style.textAlign = 'center';

  const checkBlockList = document.createElement('ol');
  commentToCheckBlock.appendChild(checkBlockList);
  checkBlockList.classList.add('checkbox-list');
  checkBlockList.style.paddingLeft = '20px';


  commentContainersList
    .filter(element => element.classList.contains('outdated-comment'))
    .forEach(element => element.classList.remove('outdated-comment'));

  const commentContainersToHighlight = commentContainersList
    .filter(checkMentorHooray);

  commentContainersToHighlight
    .forEach(makeCommentsList);
})();