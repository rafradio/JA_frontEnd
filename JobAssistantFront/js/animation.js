function reqEmailForm() {
    this.reqButton = document.querySelector('.button_landing');
    this.regForm = document.querySelector('.request_modal_wrap');
    this.closeBtn = document.querySelector('.close_btn');
    this.initSettings();
}

reqEmailForm.prototype.initSettings = function() {
    
    this.reqButton.addEventListener('click', () => {
        console.log("Hello world");
        this.regForm.classList.add("request_modal_wrap_on");
    });

    this.closeBtn.addEventListener('click', () => {this.regForm.classList.remove("request_modal_wrap_on");});
}

const myReqForm = new reqEmailForm();