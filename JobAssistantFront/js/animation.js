function requestEmailForm() {
    // this.topTextBlocksLeft = document.querySelectorAll('.left');
    // this.topTextBlocksRight = document.querySelectorAll('.right');
    // this.textMain = document.querySelectorAll('.main_info');
    this.reqButton = document.querySelector('.button_landing');

    this.regForm = document.querySelector('.request_modal_wrap');
    this.closeBtn = document.querySelector('.close_btn');
    this.inputText = document.querySelectorAll('.form-field__input');
    this.activeLine = document.querySelectorAll('.active_line');
    this.submitButton = document.querySelector('.form_button');
    // this.initSettings();
}

requestEmailForm.prototype.initSettings = function() {

    // console.log(this.topTextBlocks.length);
    // this.topTextBlocks[0].classList.add("top_text_animation");

    this.reqButton.addEventListener('click', () => {
        console.log("Hello world");
        this.regForm.classList.add("request_modal_wrap_on");
    });
    this.inputText.forEach((item, pos) => {
        item.addEventListener('focus', () => this.checking(pos));
        item.addEventListener('blur', () => this.checking(pos));
    });

    this.closeBtn.addEventListener('click', () => {this.regForm.classList.remove("request_modal_wrap_on");});
    this.submitButton.addEventListener('click', () => {this.saveData()});

    // window.onload = () => {this.textAnimation();}
}

requestEmailForm.prototype.checking = function(x) {
    this.activeLine[x].classList.toggle("form-field__active");
}

requestEmailForm.prototype.saveData = function() {
    let tempLink = document.createElement("a");
    let infoText = "name: " + this.inputText[0].value + "\n";
    infoText += "e-mail: " + this.inputText[1].value;
    let taBlob = new Blob([infoText], {type: 'text/plain'});
    tempLink.setAttribute('href', URL.createObjectURL(taBlob));
    tempLink.setAttribute('download', `user.txt`);
    tempLink.click();
    URL.revokeObjectURL(tempLink.href);
    this.regForm.classList.remove("request_modal_wrap_on");
}

requestEmailForm.prototype.textAnimation = function() {
    
    this.topTextBlocksLeft.forEach((item, pos) => {
        this.animateObserver(item, "animation_left");
    });
    this.topTextBlocksRight.forEach((item, pos) => {
        this.animateObserver(item, "animation_right");
    });
    this.textMain.forEach((item, pos) => {
        this.animateObserver(item, "animation_text");
    });
}

requestEmailForm.prototype.animateObserver = function(item, className) {
    let callback1 = (entries, observer) => {
        entries.forEach(
            (entry) => {
                if (entry.isIntersecting) {
                    item.classList.add(className);
                }
            }
        )};
    const observer = new IntersectionObserver(callback1);
    observer.observe(item);
}


const myReqForm = new requestEmailForm();

export {myReqForm};