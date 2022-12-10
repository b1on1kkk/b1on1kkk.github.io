// просто тренька


// let year = 2020;

// let a = year - 500;
// console.log(a);

// p = document.querySelector('#text');
// p.innerHTML = 234;

// let styles = 'text-align: center; color: blue; font-style: italic;'

// p.style = styles;


// function block_appear(){
//     // let block = document.querySelector('#block_test');
//     // let styles = 'display: block; margin: 20px;'
//     // block.style = styles;
//     let a = addEventListener('click', function() {
//         this.classList.add('block_settings_after');
//     })
// }


// let btn = document.querySelector('#btn');
// let test = document.querySelector('#block_test')
// let text_color = document.querySelector('#text_inside_block')


// function change_char(){
//     test.classList.toggle('change_color_class');
//     text_color.classList.toggle('active_button');
// }

// btn.addEventListener('click', function() {
//     test.classList.toggle('change_color_class');
//     text_color.classList.toggle('active_button');
// })

// btn.addEventListener('click', change_char);



// let btn_show = document.querySelector('#show_button');
// let btn_hide = document.querySelector('#hide_button');

// let block = document.querySelector('#block_test');


// btn_show.addEventListener('click', function(){
//     block.classList.toggle('change_color_class')
//     // block.hidden = false;
//     // block.style.backgroundColor = 'yellow';
//     // block.style.borderRadius = '50px';
// });

// btn_hide.addEventListener('click', function(){
//     block.hidden = true;
// });


// let btn_show = document.querySelector('#show_button');
// let block = document.querySelector('#block_test');
// let styles = 'background-color: yellow; width: 400px; height: 500px';

// btn_show.addEventListener('click', function(){
//     block.classList.toggle('change_color_size_class');

//     btn_show.addEventListener('click', function(){
//         block.classList.toggle('change_color_size_class_1');
//     });
// });


// let par = document.querySelector('#par');
// numb = Math.round((Math.random() * 10));
// par.innerHTML = numb;

// let buttom = document.querySelector('#button_click');
// let uns = document.querySelector('#unswer');


// buttom.addEventListener('click', function(){
//     const a = document.querySelector('#item').value;

//     if(isNaN(a)){
//         alert('Enter numb!!!');
//     }
//     else if(a == numb){
//         uns.innerHTML = 'Yes, you are correct';
//     }
//     else{
//         uns.innerHTML = 'Sorry, but its not correct';
//     }
// });


// button = document.querySelector('#change_style');
// button_reChange = document.querySelector('#rechange_style');

// button.addEventListener('click', function(){
//     document.querySelector('link').href = 'style3.css';
// });

// button_reChange.addEventListener('click', function(){
//     document.querySelector('link').href = 'style2.css';
// });


// btn = document.querySelector('.push');

// btn.addEventListener('click', function(){
//     console.log(document.querySelector('.text-input').value);
// });

// `let select = document.querySelectorAll('#select_test option');

// let btn = document.querySelector('.push');

// btn.addEventListener('click', function(){
//     for(let i = 0; i < select.length; i++){
//         if(select[i].selected){
//             console.log(select[i].value);
//         }
//     }    
// });


// let block = document.querySelectorAll('.block');
// console.log(block);


// for(let i = 0; i < block.length; i++){
//     block[i].onclick = function(){

//         switch(block[i].innerHTML){
//             case '1':
//                 this.style.background = 'red';
//                 break;
//             case '2':
//                 this.style.background = 'pink';
//                 break;
//             case '3':
//                 this.style.background = 'yellow';
//                 break;
//             case '4':
//                 this.style.background = 'black';
//                 break;           
//         }

//     }
// }

// block.addEventListener('click', function(){

// });

// block.addEventListener('click', function(){
//     for(let i = 0; i < block.length; i++){
//         block[i] = clicked;
//     }
// });

// block.addEventListener('click', function(){
//     for(let i = 0; i < block.length; i++){
//         block[i] = clicked;
//     } 
// });

// function clicked(){
//     this.style.background = 'red';
// }


// function hide(number){
//     let hideBlock = document.querySelectorAll('.text');

//     for (let i = number; i < hideBlock.length; i++){
//         hideBlock[i].style.display = 'none';
//     } 
// }

// hide(1);


// let active_block = document.querySelectorAll('.test');

// for (let i = 0; i < active_block.length; i++){
//     active_block[i].onclick = showTabs;
// }

// // либо так
// // active_block.forEach(function (element){
// //     element.onclick = showTabs;
// // });

// function showTabs(){
//     hide(0);

//     let data = this.getAttribute('data');

//     document.querySelector(`.text[data = "${data}"]`).style.display = 'block';
// }



let btn = document.querySelector('.select');

btn.addEventListener('click', function(){
    person_data_init();
});

function person_data_init(){
    let person_surname; let person_name;
    person_name = document.querySelector('.name_inf').value;
    person_surname = document.querySelector('.surname_inf').value;
    checking_must_init_inf(person_name, person_surname);
}

function checking_must_init_inf(name, surname){
    if (name && surname){
        alert('Thanks for registration!');
        write_inf(name, surname);
    }
    else{
        alert('Enter all places!!!');
    }
}

function write_inf(name, surname){
    let inf_blob = new Blob(
        ['User_name: ', name, 
        ' User_surname: ', surname],
        {type: 'text/plain'})


    let link = document.createElement('a');
    link.setAttribute('href', URL.createObjectURL(inf_blob));
    link.setAttribute('download', 'person_inf_file');
    link.click();
}




