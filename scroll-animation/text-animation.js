class TextAnimation {
    constructor(el) {
        this.el = el instanceof HTMLElement ? el : this.el = document.querySelector(el);
        this.chars = this.el.innerHTML.trim().split("");
        this.el.innerHTML = this._splitText();
    }
    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
    animate() {
        this.el.classList.toggle('inview');
    }
}
class TweenTextAnimation extends TextAnimation {
    constructor(el) {
        super(el);
        this.chars = this.el.querySelectorAll('.char');
    }

    animate() {
        this.el.classList.add('inview');
        this.chars.forEach((c, i) => {
            TweenMax.to(c, .6, {
                ease: Back.easeOut,
                delay: i * .05,
                startAt: { y: '-50%', opacity: 0 },
                y: '0%',
                opacity: 1
            });
        });
    }
}
