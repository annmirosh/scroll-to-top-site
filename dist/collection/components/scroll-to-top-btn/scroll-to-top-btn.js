function scrollToTop() {
    if (window.scrollY != 0) {
        setTimeout(function () {
            window.scrollTo(0, window.scrollY - 10);
            scrollToTop();
        }, 5);
    }
}
export class ScrollToTopBtn {
    constructor() {
        this.visible = false;
        this.mode = 'light';
        this.direction = 'top';
        this.manageVisibility = this.manageVisibility.bind(this);
        this.scroll = this.scroll.bind(this);
    }
    componentWillLoad() {
        window.addEventListener('scroll', this.manageVisibility);
        this.manageVisibility();
    }
    componentWillUnload() {
        window.removeEventListener('scroll', this.manageVisibility);
    }
    manageVisibility() {
        if (window.innerHeight < window.scrollY) {
            this.visible = true;
        }
        else {
            this.visible = false;
        }
    }
    scroll() {
        if (this.direction === 'top') {
            scrollToTop();
        }
    }
    render() {
        return h("div", { class: `scroll-to-top-btn ${this.mode} ${this.visible && 'visible'}`, style: { right: `${this.right}px`, bottom: `${this.bottom}px` }, onClick: this.scroll });
    }
    static get is() { return "scroll-to-top-btn"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "bottom": {
            "type": Number,
            "attr": "bottom"
        },
        "direction": {
            "type": String,
            "attr": "direction"
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "right": {
            "type": Number,
            "attr": "right"
        },
        "visible": {
            "state": true
        }
    }; }
    static get style() { return "/**style-placeholder:scroll-to-top-btn:**/"; }
}
