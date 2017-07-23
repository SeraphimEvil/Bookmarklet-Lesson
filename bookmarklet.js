javascript:
(function() {
  'use strict';

  const STUDENT_NAME = 'SeraphimEvil';
  const MENTOR_NAME = 'aalexeev239';
  // const MENTOR_NAME = 'lizzzzzy';

  const COMMENT_CONTAINERS = document.querySelectorAll('.js-comment-container'); // ищем все комментарии, получаем NodeList...  

  const COMMENT_CONTAINERS_LIST = Array.prototype.slice.call(COMMENT_CONTAINERS); // приводим NodeList к Array

  const CLOSED_COMMENT_CONTAINERS_LIST = []; // массив, в котором будем хранить список закрытых комментариев

  // цикл в котором помещаем все элементы с классом закрытого комментария в отдельный массив
  for (let i = 0; i < COMMENT_CONTAINERS_LIST.length; i++) {
    if (COMMENT_CONTAINERS_LIST[i].classList.contains('outdated-comment')) {
      CLOSED_COMMENT_CONTAINERS_LIST.push(COMMENT_CONTAINERS_LIST[i]);
    }
  };

  // открываем все закрытые комментарии
  for (let i = 0; i < CLOSED_COMMENT_CONTAINERS_LIST.length; i++) {
    CLOSED_COMMENT_CONTAINERS_LIST[i].classList.remove('outdated-comment'); 
  };
})();