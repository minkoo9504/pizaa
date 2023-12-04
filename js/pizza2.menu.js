const navMoreBtn = document.querySelector('.btn_more');
const subNav = document.querySelector('.sub_nav');
navMoreBtn.addEventListener('click',function(){
    subNav.classList.toggle('active');
})






// 메뉴 tab 클릭 시 바뀜

const tabMenus = document.querySelectorAll('.tab_menu');
const tabName = document.querySelector('#tab_name');
const menuNav = document.querySelector('.menu_nav');
const contents = document.querySelectorAll('.menu_section');

menuNav.addEventListener('click',function(e){
   // e.currentTarget 자기 자신
  let id =  e.target.dataset.id;
  console.log(id)
  contents.forEach(function(content){
    content.classList.remove('active2')
  });
  let secId = document.getElementById(id);
  console.log(secId)
  secId.classList.add('active2');
  let menuText = e.target.dataset.text
  tabName.innerHTML = menuText
});

// 하프앤하프 텝 누를시 푸터 삭제하기

const harfAnd = document.querySelector('.harfandharf');
const footEr = document.querySelector('.footer');

harfAnd.addEventListener('click',function(){
  footEr.style.display = 'none'
  
})




//피자 왼쪽 오른쪽 다르게 사진 적용

const leftPizaa = document.querySelector('.left_pizza');
const rightPizaa = document.querySelector('.right_pizza');
const selectPizza = document.querySelectorAll('.select_pizza>select');
const select1Pizza = document.querySelector('.select_pizza1');
const select2Pizza = document.querySelector('.select_pizza2')
let array =['','RPZ169.png','RPZ223.png','RPZ223B.png','RPZ223Y.png','RPZ224.png','RPZ169U.png','RPZ169Z.png','RPZ169Y.png'
,'RPZ169B.png','RPZ003.png','RPZ003U.png','RPZ111.png','RPZ003Z.png'];
console.log(select1Pizza)
selectPizza.forEach(function(selected){
  selected.addEventListener('change',function(){
    let num = selected.options.selectedIndex;
    if(selected == select1Pizza){
      console.log(num)
      leftPizaa.innerHTML =  `<img src="./img_harf/${array[num]}" alt="">`
    }else if(leftPizaa.children.length == 0){
      alert('첫번째 피자부터 선택하세요');
    }else if(selected == select2Pizza){
      rightPizaa.innerHTML =  `<img src="./img_harf/${array[num]}" alt="">`
    }
  })

}
)
//증강 버튼
const btns = document.querySelectorAll('.select_volume');
const minusBtns = document.querySelectorAll('.minus_btn');
const plusBtns = document.querySelectorAll('.plus_btn');

btns.forEach(function(btn,i){
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
  const prev = t.previousElementSibling;
  if(prev.value < 10)
  prev.value++;
}

//사이드디시 증강 버튼


const btns1 = document.querySelectorAll('.sidedish_btn');
const minusBtns1 = document.querySelectorAll('.minus_btn1');
const plusBtns1 = document.querySelectorAll('.plus_btn1');

btns1.forEach(function(btn,i){
  btn.addEventListener('click',function(e){
    console.log(e.target);
    let t = e.target;
    if(t == minusBtns1[i]){
      minusFunc1(t)
    }else if(t == plusBtns1[i]){
      plusFunc1(t)
    }
  })

});
function minusFunc1(t){
  const next1 = t.nextElementSibling;
  if(next1.value > 0){
    next1.value--;
  }
}
function plusFunc1(t){
  const prev1 = t.previousElementSibling;
  if(prev1.value < 10)
  prev1.value++;
}
//음료&기타 증강 버튼


const btns2 = document.querySelectorAll('.drink_btn');
const minusBtns2 = document.querySelectorAll('.minus_btn2');
const plusBtns2 = document.querySelectorAll('.plus_btn2');

btns2.forEach(function(btn,i){
  btn.addEventListener('click',function(e){
    console.log(e.target);
    let t = e.target;
    if(t == minusBtns2[i]){
      minusFunc2(t)
    }else if(t == plusBtns2[i]){
      plusFunc2(t)
    }
  })

});
function minusFunc2(t){
  const next2 = t.nextElementSibling;
  if(next2.value > 0){
    next2.value--;
  }
}
function plusFunc2(t){
  const prev2 = t.previousElementSibling;
  if(prev2.value < 10)
  prev2.value++;
}

//// 토핑 클릭

const toppingBtn = document.querySelector('.check_btn');
const topIng1 = document.querySelector('.toping1');

console.log(topIng1);

toppingBtn.addEventListener('click',function(){
  
  topIng1.classList.toggle('active2');
})




//빨간 선택 적용

const sizeCheck = document.querySelector('.size_box');
const sizeChoice = document.querySelector('.size_box>div');

sizeCheck.addEventListener('click',function(e){
  if(e.target == sizeCheck.firstElementChild){
    sizeCheck.firstElementChild.classList.add('active3');
    sizeCheck.lastElementChild.classList.remove('active3');
  }else if(e.target == sizeCheck.lastElementChild ){
    sizeCheck.firstElementChild.classList.remove('active3');
    sizeCheck.lastElementChild.classList.add('active3');

  }
}
)

//아이유 삭제하기

const iuFloat = document.querySelector('.floating')
const disable = document.querySelector('.disable')

disable.addEventListener('click', function(){
  iuFloat.style.display = 'none'
})


