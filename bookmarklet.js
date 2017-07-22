javascript:
(function() {
  'use strict';

  const STUDENT_NAME = 'SeraphimEvil';
  // const MENTOR_NAME = 'aalexeev239';
  const MENTOR_NAME = 'lizzzzzy';

  let allComment = document.querySelectorAll('.js-comment-container'); // ищем все комментарии, получаем NodeList...  

  let allCommentArr = Array.prototype.slice.call(allComment); // приводим NodeList к Array

  console.log(allCommentArr);

  for (let i = 0; i < allCommentArr.length; i++) {
    console.log(i);
    
  }

  // for (let i = closedComment.length - 1; i>=0; i--) {
  //   closedComment[i].classList.remove('outdated-comment'); // открываем все свернутые комментарии

  //   let commentAuthors = document.querySelectorAll('.review-comment a.author'); // смотрим внутри комментария кто автор

  //   for (var key in commentAuthors) {
  //     console.log(commentAuthors[key]);
  //   };
  // };
})();