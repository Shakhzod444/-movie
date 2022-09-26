/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

let a = document.querySelectorAll('.promo__adv img')

a.forEach(img => {
    function rem() {
        img.remove()
    }
    rem()
})


let b  = document.querySelector('.promo__genre')

b.innerHTML = 'драма'


let c  = document.querySelector('.promo__bg')
c.style.backgroundImage = `url('./img/bg.jpg')`


let text = document.querySelector('.promo__interactive-list')
movieDB.movies.sort()
// let del = document.querySelector('.delete')




function reload(arr, place) {
    let count = 0
    place.innerHTML = ''
    
    for(let item of arr){
        let new_item = document.createElement('li') 
        new_item.classList.add('promo__interactive-item')
        let del = document.createElement('div')
        del.classList.add('delete')
        count++ 
        
        place.append(new_item)
        new_item.append(count,'.' , item ,  del  )
      
        del.onclick = () => {
            new_item.remove(item)   
           
            // new_item.remove()
        }
        

    }

}
reload(movieDB.movies , text  )