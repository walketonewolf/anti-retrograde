function scrollToTop(event) {
  // Остановить обработку клика по ссылке
  event.preventDefault();
  
  // Выполнить прокрутку до верхней точки страницы
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Добавить плавность прокрутке
  });
}
const chapterLinks = document.querySelectorAll('.chapter_reflection_center');

chapterLinks.forEach(link => {
  link.addEventListener('click', scrollToTop);
});

function scrollToTop() {
  if (event) {
    event.preventDefault();
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
} //проверка для существования объекта event перед его использованием

window.onload = function() {
  document.querySelector('.fut_center').classList.add('zoom');
}


//Этот скрипт отвечает за прокручивание страницы к блоку с текстом, когда пользователь нажимает на одну из кнопок.

const buttons = document.querySelectorAll('.buts'); //Эта строка объявляет переменную buttons и присваивает ей массив всех элементов на странице, у которых есть класс buts.
const contents = document.querySelectorAll('.heading_сontent_js'); //Здесь объявляется переменная contents и присваивается ей массив всех элементов на странице, у которых есть класс heading_сontent_js.

buttons.forEach((button) => {  //Эта часть кода добавляет обработчик событий на каждую кнопку в массиве buttons.  
  button.addEventListener('click', () => {
    const index = Array.from(buttons).indexOf(button);
    const targetContent = contents[Math.floor(index / 6)]; //
    targetContent.scrollIntoView({ behavior: 'smooth' }); // скрипт вызывает метод scrollIntoView() для найденного блока с содержимым, чтобы прокрутить страницу к этому блоку с использованием плавной анимации (с помощью опции behavior: 'smooth').
  });
});


