function TextAnimation() {
    this.topTextBlocksLeft = document.querySelectorAll('.left');
    this.topTextBlocksRight = document.querySelectorAll('.right');
    this.textMain = document.querySelectorAll('.main_info');
}

TextAnimation.prototype.initSettings = function() {
    window.onload = () => {this.textAnimation();}
}

TextAnimation.prototype.textAnimation = function() {
    
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

TextAnimation.prototype.animateObserver = function(item, className) {
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


const textAnimation = new TextAnimation();

export {textAnimation};