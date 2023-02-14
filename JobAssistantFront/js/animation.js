function requestEmailForm() {
    this.reqButton = document.querySelector('.button_landing');
    this.regForm = document.querySelector('.request_modal_wrap');
    this.closeBtn = document.querySelector('.close_btn');
    this.inputText = document.querySelectorAll('.form-field__input');
    this.activeLine = document.querySelectorAll('.active_line');
    this.submitButton = document.querySelector('.form_button');
    this.initSettings();
}

requestEmailForm.prototype.initSettings = function() {
    
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

const myReqForm = new requestEmailForm();