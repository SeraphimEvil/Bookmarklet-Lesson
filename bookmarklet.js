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


  commentContainersList
    .filter(element => element.classList.contains('outdated-comment'))
    .forEach(element => element.classList.remove('outdated-comment'));

  const commentContainersToHighlight = commentContainersList
    .filter(checkMentorHooray);

  // commentContainersToHighlight
  //   .forEach(element => {
  //     element.style.backgroundColor = 'rgba(0, 255, 0, 0.3)';
  //     // let checkBlockItem = element;
  //     // checkBlockItem.innerHTML = "<li>" + element + "</li>";
  //     // console.log(checkBlockItem);
  //     let checkBlockItem = document.createElement('li');
  //     checkBlockList.appendChild(checkBlockItem);
  //   });





  // создам элемент 
  let commentToCheckBlock = document.createElement('div');
  // добавляем ему класс
  commentToCheckBlock.classList.add('check-list');
  // // добавляем ему немного свойств стилей
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

  // добавляем элемент в DOM
  let pageBody = document.body;
  pageBody.appendChild(commentToCheckBlock);

  // добавляем заголовок
  // создаем заголовок
  const chekBlockTitle = document.createElement('h2');
  commentToCheckBlock.appendChild(chekBlockTitle);
  chekBlockTitle.innerHTML = 'Список комментариев к проверке:';

  // добавляем стили для заголовка
  chekBlockTitle.style.fontSize = '14px';
  chekBlockTitle.style.textAlign = 'center';

  // создадим список
  const checkBlockList = document.createElement('ol');
  commentToCheckBlock.appendChild(checkBlockList);
  checkBlockList.classList.add('checkbox-list');
  checkBlockList.style.paddingLeft = '20px';



  // добавляю подсветку и отправляю в список
  commentContainersToHighlight
    .forEach(function(element, index) {
      element.id = index;
      element.style.backgroundColor = 'rgba(0, 255, 0, 0.3)';

      let checkBlockItem = document.createElement('li');
      let checkBlockLink = document.createElement('a');

      checkBlockList.appendChild(checkBlockItem);
      checkBlockItem.appendChild(checkBlockLink)
      checkBlockLink.innerHTML = element;
      checkBlockLink.setAttribute('href', '#' + index)
    });

})();