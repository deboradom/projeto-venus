window.onload = function(){
    var header = document.getElementsByTagName('header')[0];
    var thirdSection = document.getElementById('third');

    var client = window.document.documentElement.clientHeight;
    var height = client ? client : window.innerHeight;

    var startYOffset;

    this.addEventListener('scroll', function(){
        if(window.pageYOffset > height/2){
            thirdSection.classList.add('top');
        } else {
            thirdSection.classList.remove('top');
        }
    })
};