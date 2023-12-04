//피자 사진 겹치게 만드는방법
const leftPizaa = document.querySelector('.left_pizza');
const rightPizaa = document.querySelector('.right_pizza');
const selectPizza = document.querySelectorAll('select');
const select1Pizza = document.querySelector('.select_1');
const select2Pizza = document.querySelector('.select_2');
console.log(select1Pizza.options.selectedIndex);
console.log(select1Pizza);

const selects = document.querySelectorAll('.select_pizza>select');
//select1Pizza.option[].selected
let array = ['20200311_M9Q50gtd.jpg','20200311_Qtn75KSM.jpg','20200311_TI57KvOH.jpg']

// 사진 하나로 합친 방법
selects.forEach(function(selected){
    selected.addEventListener('change',function(){
        let num = selected.options.selectedIndex;
        if(selected == select1Pizza){
            leftPizaa.innerHTML = `<img src="./img/${array[num]}" alt="">`
        }else  if(leftPizaa.children.length == 0){
            alert('첫번째 피자부터 선택하세요');

        }else if(selected == select2Pizza){
            rightPizaa.innerHTML = `<img src="./img/${array[num]}" alt="">`
        }
    })
}
    )

// 사이즈 선택 버튼 


//버튼 누르면 한쪽은 빨간색 한쪽은 하얀색 바뀌는방법


const sizeCheck = document.querySelector('.btn_size');
//console.log(sizeCheck.firstElementChild); 자식찾는법
//console.log(sizeCheck.lastElementChild); 자식찾는법
const sizeChoice = document.querySelectorAll('.btn_size>div');
sizeCheck.addEventListener('click',function(e){
    let tar = e.target;
    sizeChoice.forEach(function(sizeChoice){
        sizeChoice.classList.remove('active');
        if(tar == sizeChoice){
            tar.classList.add('active');
        }

}
)
})



// const sizeCheck = document.querySelector('.btn_size');
// //console.log(sizeCheck.firstElementChild); 자식찾는법
// //console.log(sizeCheck.lastElementChild); 자식찾는법
// const sizeChoice = document.querySelectorAll('.btn_size>div');


// sizeCheck.addEventListener('click',function(e){
//     console.log(e.target)
//     if(e.target == sizeCheck.firstElementChild){
//         sizeCheck.firstElementChild.classList.add('active');
//         sizeCheck.lastElementChild.classList.remove('active');   
//     }else if(e.target == sizeCheck.lastElementChild){
//         sizeCheck.firstElementChild.classList.remove('active');
//         sizeCheck.lastElementChild.classList.add('active');
//     }
// }
// )

//////// 증감 버튼 만들기

// const btns = document.querySelectorAll('.btn');
// const minusBtns = document.querySelectorAll('.minus_btn');
// const plusBtns = document.querySelectorAll('.plus_btn');

// minusBtns.forEach(function(minusBtn){
//     minusBtn.addEventListener('click',minusFunc)
// }
// )
// plusBtns.forEach(function(plusBtn){
//     plusBtn.addEventListener('click',plusFunc)
// }
// )

// btns.forEach(function(btn, i){
//     btn.addEventListener('click',function(e){
//         console.log(e.target);
//         let t = e.target;
//         if(t == minusBtns[i]){
//             minusFunc(t)
//         }
//     })
// })
// function minusFunc(t){
//     console.log(e.currentTarget.nextElementSibling.value); // nextElementSibling 다음에 오는 태그 찾는방법
//     //  //  minusBtn.nextElementSibling.value--; 마이너스 해주는법 --붙임
//      const next = t.nextElementSibling;
//      if(next.value > 0){
//         next.value--;
//      }
//     }
// function plusFunc(e){
//     const prev = e.currentTarget.previousElementSibling;
//     if(prev.value < 10){
//         prev.value++;

//     }

// }
const btns = document.querySelectorAll('.btn');
const minusBtns = document.querySelectorAll('.minus_btn');
const plusBtns = document.querySelectorAll('.plus_btn');

btns.forEach(function(btn, i){
    btn.addEventListener('click',function(e){
        console.log(e.target);
        let t = e.target;
        if(t == minusBtns[i]){
            minusFunc(t)
            }else if(t == plusBtns[i]){
                plusFunc(t)
            }
    })
});
function minusFunc(t){
    const next = t.nextElementSibling;
    if(next.value > 0){
        next.value--;
    }
}
function plusFunc(t){
    const prev = t.previousElementSibling;//이전 자식을 불러옴
    if(prev.value < 10)
    prev.value++;
}