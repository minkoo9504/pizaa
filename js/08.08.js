//질문 눌렀을때 나오고 닫히는 자바스크립

let accs = document.querySelectorAll('.qus');
let appPanels = document.querySelectorAll('.asw');

accs.forEach(function(acc){
    acc.addEventListener('click',function(){
        var panel = this.nextElementSibling;
        let accsAc = document.querySelector('.qus.active');
        for(appPanel of appPanels){
            if(appPanel.style.maxHeight){
                appPanel.style.maxHeight = null;
                accsAc.classList.remove('active');
                panel.classList.remove('act');
            }
        };
        if(this == accsAc){
            this.classList.remove('active');
            panel.classList.remove('act');
            panel.style.maxHeight = null;
        }else if(this == acc){
            this.classList.add('active');
            panel.classList.add('act');
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    })
})






//민영버전

// let acc = document.querySelectorAll(".ser_qus");
// let asws = document.querySelectorAll('.ser_asw');

// acc.forEach(function(accs) {
//   accs.addEventListener('click', function() {
//     var panel = this.nextElementSibling;

//     this.classList.toggle("active");
    
//     if (this.classList.contains("active")) {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     } else {
//       panel.style.maxHeight = null;
//     }

//     acc.forEach(function(otheraccs) {
//       if (otheraccs !== accs) {
//         otheraccs.classList.remove("active");
//         otheraccs.nextElementSibling.style.maxHeight = null;
//       }
//     });
//   });
// });