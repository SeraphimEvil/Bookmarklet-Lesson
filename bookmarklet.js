javascript:
(function() {
  'use strict';

  const STUDENT_NAME = 'SeraphimEvil';
  const MENTOR_NAME = 'aalexeev239';
  const HOORAY_REACTION = 'HOORAY';

  let commentToCheckBlock;
  let checkBlockTitle;
  let checkBlockList;
  let checkBlockItem;
  let checkBlockLink;

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

  const commentToHighlight = (element, index) => {
    element.style.backgroundColor = 'rgba(0, 255, 0, 0.3)';
    createCommentsBlockListElements(index);
  };

  function createCommentsBlock() {
    commentToCheckBlock = document.createElement('div');
    checkBlockTitle = document.createElement('h2');
    checkBlockList = document.createElement('ol');

    document.body.appendChild(commentToCheckBlock);
    commentToCheckBlock.appendChild(checkBlockTitle);
    commentToCheckBlock.appendChild(checkBlockList);

    commentToCheckBlock.classList.add('check-list');
    checkBlockList.classList.add('checkbox-list');

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

    checkBlockTitle.innerHTML = 'Список комментариев к проверке:';
    checkBlockTitle.style.fontSize = '14px';
    checkBlockTitle.style.textAlign = 'center';

    checkBlockList.style.paddingLeft = '20px';
  };

  function createCommentsBlockListElements(index) {
    checkBlockItem = document.createElement('li');
    // checkBlockLink = document.createElement('a');

    checkBlockList.appendChild(checkBlockItem);
    // checkBlockItem.appendChild(checkBlockLink);

    checkBlockItem.style.cursor = 'pointer';

    checkBlockItem.innerHTML = index;
    checkBlockItem.setAttribute('data-item', index);

    // console.log(index)
    // console.log(index.pageYOffset);

    checkBlockItem.addEventListener('click', function(event) {
      console.log(index)
      // console.log(this);
      this.getAttribute('data-item');
      // console.log(this.getAttribute('data-item'));
    });
  };


  createCommentsBlock();

  commentContainersList
    .filter(element => element.classList.contains('outdated-comment'))
    .forEach(element => element.classList.remove('outdated-comment'));

  const commentContainersToHighlight = commentContainersList
    .filter(checkMentorHooray);

  commentContainersToHighlight
    .forEach(commentToHighlight);
})();