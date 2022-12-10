window.addEventListener('DOMContentLoaded', () =>{
    btn = document.querySelector('.primary_block_hamburger .primary_block_hamburger_wrapper');
    mobile_block = document.querySelector('.mobile_block_nav');
    hamburger = document.querySelector('.primary_block_hamburger_wrapper');

    btn.addEventListener('click', function(){
        mobile_block.classList.toggle('mobile_block_nav_active');
        hamburger.classList.toggle('primary_block_hamburger_wrapper_active');
    });
});


// сделал чисто для разнообразия, иначе скучно :)
let flag_rand_color = document.getElementsByClassName("flag");
let numb = 0;

for (let i = 0; i < flag_rand_color.length; i++) {
    numb = Math.round(Math.random() * 10);

    switch(numb){
        case 1:
            flag_rand_color[i].style.backgroundColor = "#AA0000";
         break;

        case 2:
            flag_rand_color[i].style.backgroundColor = "yellow";
         break;

        case 3:
            flag_rand_color[i].style.backgroundColor = "orange";
         break;

        case 4:
            flag_rand_color[i].style.backgroundColor = "purple";
         break;

        case 5:
            flag_rand_color[i].style.backgroundColor = "pink";
         break;

        case 6:
            flag_rand_color[i].style.backgroundColor = "#f2cb30";
         break;

        case 7:
            flag_rand_color[i].style.backgroundColor = " #702963";
         break;

        case 8:
            flag_rand_color[i].style.backgroundColor = "orange";
         break;

        case 9:
            flag_rand_color[i].style.backgroundColor = "#0018a8";
         break;

        case 10:
            flag_rand_color[i].style.backgroundColor = "pink";
         break;
    }
}



let like_block_click = document.querySelectorAll('.like_picture');

const index_of_clicked_likes = new Array();

const liked_opacity_value = 1;
const normal_opacity_value = 0.5;

// это счеткик лайков от дурков, которые любят лайкать несколько раз, да, работает он копец как сложно, тут применил даже динамический массив, в котом я удаляю элемент по индексу, короче сложно, но, возможно, интересно. буду рад, если подскажете более легкий способ реализации данной задачи 
// но есть очень неплохой плюс такого решения - я пощупал массивы и некоторые его возможности (удаление элементов и добавление) 

for (let i = 0; i < like_block_click.length; i++){
    like_block_click[i].addEventListener('click', function() {

        if(!index_of_clicked_likes.includes(i)){
            increment_number_of_likes(i);
            color_like_change(i, 1)
        }
        else{
            dicrement_number_of_likes(i);
            color_like_change(i, 0.5);
        }

    });

}

function color_like_change(index, opacity_value){
    let opacity_like_picture = document.querySelectorAll('.like_picture img');
    opacity_like_picture[index].style.opacity = opacity_value;
}

function increment_number_of_likes(index){
    let number_of_likes = document.querySelectorAll('.number_of_likes');

    let number_of_conc_block = number_of_likes[index].innerHTML;
    number_of_conc_block = parseInt(number_of_conc_block);
    number_of_conc_block = number_of_conc_block + 1;

    number_of_likes[index].innerHTML = number_of_conc_block

    return index_of_clicked_likes.push(index);
}

function dicrement_number_of_likes(index){
    let number_of_likes = document.querySelectorAll('.number_of_likes');

    let number_of_conc_block = number_of_likes[index].innerHTML;
    number_of_conc_block = parseInt(number_of_conc_block);
    number_of_conc_block = number_of_conc_block - 1;

    number_of_likes[index].innerHTML = number_of_conc_block


    let indexNumber = index_of_clicked_likes.indexOf(index);

    if (indexNumber !== -1) {
        index_of_clicked_likes.splice(indexNumber, 1); 
    }
    
    return index_of_clicked_likes;
}