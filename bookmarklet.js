javascript:
(function() {
  'use strict';

  const STUDENT_NAME = 'SeraphimEvil';
  const MENTOR_NAME = 'aalexeev239';
  const HOORAY_REACTION = 'HOORAY';

  const commentToCheckBlock = document.createElement('div');
  const checkBlockTitle = document.createElement('h2');
  const checkBlockList = document.createElement('ul');
  let checkBlockItem;

  const commentContainers = document.querySelectorAll('.js-comment-container');
  const commentContainersList = Array.prototype.slice.call(commentContainers);

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
  checkBlockTitle.style.fontSize = '14px';
  checkBlockTitle.style.textAlign = 'center';
  checkBlockList.style.paddingLeft = '20px';

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

  const makeTheLighting = (element, index) => {
    element.style.backgroundColor = 'rgba(0, 255, 0, 0.3)';
    createCommentsBlockListElements(element, index);
  };

  const createCommentsBlock = () => {
    document.body.appendChild(commentToCheckBlock);
    commentToCheckBlock.appendChild(checkBlockTitle);
    commentToCheckBlock.appendChild(checkBlockList);

    checkBlockTitle.innerHTML = 'Список комментариев к проверке:';
  };

  const createCommentsBlockListElements =  (element, index) => {
    checkBlockItem = document.createElement('li');

    checkBlockList.appendChild(checkBlockItem);

    checkBlockItem.style.cursor = 'pointer';

    checkBlockItem.innerHTML = index;
    // checkBlockItem.setAttribute('data-item', index);

    const commentItemPosition = element.offsetParent.offsetTop + element.offsetTop + 200;
    // const commentItemPosition = getOffsetTop(element);

    // console.log(element)
    // console.log(commentItemPosition)

    checkBlockItem.addEventListener('click', function(event) {
      this.style.backgroundColor = '#f0f0f0';
      window.scrollTo(0, commentItemPosition);
    });
  };

  // function getOffsetTop( elem ) {
  //   let offsetTop = 0;

  //   do {
  //     if ( !isNaN( elem.offsetTop ) )
  //     {
  //         offsetTop += elem.offsetTop;
  //     }
  //   } while( elem = elem.offsetParent );
  //   return offsetTop;
  // };


  createCommentsBlock();

  commentContainersList
    .filter(element => element.classList.contains('outdated-comment'))
    .forEach(element => element.classList.remove('outdated-comment'));

  const commentContainersToHighlight = commentContainersList
    .filter(checkMentorHooray);

  commentContainersToHighlight
    .forEach(makeTheLighting);
})();