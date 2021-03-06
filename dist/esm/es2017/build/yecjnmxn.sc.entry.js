import { h } from '../scrolltotop.core.js';

function scrollToTop() {
    if (window.scrollY != 0) {
        setTimeout(function () {
            window.scrollTo(0, window.scrollY - 10);
            scrollToTop();
        }, 5);
    }
}
class ScrollToTopBtn {
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
    static get style() { return ".scroll-to-top-btn.sc-scroll-to-top-btn{position:fixed;right:20px;bottom:20px;height:60px;min-height:60px;max-height:60px;width:60px;min-width:60px;max-width:60px;opacity:0;pointer-events:none;border-radius:50%;background-color:rgba(0,0,0,.6)}.scroll-to-top-btn.sc-scroll-to-top-btn, .scroll-to-top-btn.visible.sc-scroll-to-top-btn{-webkit-transition:background-color .3s ease-in-out,opacity .3s ease-in-out;transition:background-color .3s ease-in-out,opacity .3s ease-in-out}.scroll-to-top-btn.visible.sc-scroll-to-top-btn{opacity:1;pointer-events:auto}.scroll-to-top-btn.sc-scroll-to-top-btn:before{content:\"\";height:100%;width:100%;position:absolute;left:0;top:0;background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAA0CAYAAAB1hz3ZAAAAAXNSR0IArs4c6QAABTNJREFUeAHtm3uoFVUUxn1dn3lRxEf2EFN8YIZCKJlZKT5BQVAwTBTyjyJFCBQrRFEQ/KMCQUUho+gBoSiKpSgKgijaS1NQxEoTifKRZqm9br9Pzr0e7505Z2bWPjN7zm3Bx8zZs9a31/rOnJm998xp0SLHVldX1wPU5riE/KaO8EPA9+A4eCi/leQwcwSfAK6DevuRnaE5LCV/KSP0y+CveuWLtvpCxuWvopxkjLitwFtFggft/knj3JyUlJ80EbUT2B6keEjbsvxU53mmCNwbfBkidKnmdznYxvPy/E4PAYeBi6VULnNsN8c7+12lp9kh3FTwWxmBoxz+GqfenpbpZ1oItgj8E0XdiD7n8RviZ7UeZYVIrcG6iKLGdfuVgOc9KtevVBCnFnweV9WY/nfwn+1X5R5kgyh9wLcgDfuXTl73oGw/UkCMEeCnNJRv1MdGPrf2Q4WMskCAGeCPRsKk+XEXnXXKqPxsu6XwpUCXg6ztCxLola0aKfZOsTVgsyPVj8JzxQHXD3AMTlGGbLqiyK5gvwPBRPEJaA8Ggu+A1a5CMCYbZVLoleL6gdNWlQrxq9i2rE+b/Z7gWOGYZXOb4Fn1vFWzpajR4LJFmUKsxvFzgoShXSumOwt+lo3uS0uC+shlG8W8CHRmWU1f4DOlROC4ZtIbrB0V4teLr1R/3h+jgBWOxDgDT/+oBePraoS1A66OUfv1xo+k24GPgQs7AEnXuMUR8wLQJctqGmn1iNt/Zv4k2x0cslZdiH+PbU3SYoh9FlwDVtMoa2DSPFKLI8lB4Jy1WuJ1I3zDReLwDAYa51tN842nXeRUEQ6SGwdcnG234JnpMkn4eoEkjzUJu8+c5+akTlKcD/RGgtW0KDfSSVKNSOB9AHxmTZB4/Tpfa0SfzUcSaQnWABd2EpI+lawE/jZgk4tk4VgLWlUy35LcdN4RbAUubA8kqb3jSV9vukgajm2gQ0mhKnGQTnVNdTH1h+buxCn110foVxNEF8PUw/B0r4TOgZx09gS4AKymh+6ZXkvpfyzQs2KrnYUg8kQxUNgojXQyBdywZkv8TTAtSp+V9iGPx4GLE+oXeJ6qWL6QLwB/A6vpRavhFUs0ATH56O27b6yFEa+ne9MTpBAeAqEWuHTHd2FfQeLlu/zk1RloMGA1XVoXhSsa4whEGjvruakL08KW189fyU/D1M0uioXjbZB8mErwI0D/PnFh70CSPJkYJ40LV3Jd7qJoOLaA9rFzIuhJcAlYTX+keCV2Ah4EkPc84GJ2r4XJbpFLwnk6+B1YTf9YmRi5Yw8dyX88UB1WOwPBY2VLxGkx0E3Ealp9rIqXYalD8x6N3Kz2MwQjAr8EDrhcIzkCX8/AjnLaSD0PgxPAarqy3D//oaEL2GtlLsR/yjb9tZEUvljqqgX7CnVaNrrCvNqQMh8+srAVxa5mv+FVkYYOqmiH+mrA+0U1W3Yn35UGhgeBZSqukcK8KtK5bCnUuxJY7EOC752sfNCNJskaz1XiniubcRU6UPdLQMPsuHaAgLZNJKFRC21x1nrO4j+gCVEzaqD+iSDO/9hO4d8lVCIOLgRR7CBO0ScXoT3m/wA6DANRJq3yebRsxTiVW3j7AJ+mP6GyzNXrIGGBHqmGmX4l0VaAcdTq564AJj2M/v8f6CHnEdpoOL8/QDfdJyaFhAU3E6Cl2eKFOL3bWX1vDQeXn7gVjdoCjXCKbX4iQhi0GqrrlqbQoxKRNMMgtNKbIquBbJVJAgiGg74mkmYajG5jm2np+Sr7P+EbR1kcyKRRAAAAAElFTkSuQmCC\");background-repeat:no-repeat;background-size:50% auto;background-position:center 45%}.scroll-to-top-btn.sc-scroll-to-top-btn:hover{background-color:rgba(0,0,0,.9);-webkit-transition:background-color .3s ease-in-out;transition:background-color .3s ease-in-out;cursor:pointer}.scroll-to-top-btn.dark.sc-scroll-to-top-btn{background-color:hsla(0,0%,100%,.6)}.scroll-to-top-btn.dark.sc-scroll-to-top-btn:hover{background-color:hsla(0,0%,100%,.9)}.scroll-to-top-btn.dark.sc-scroll-to-top-btn:before{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAyCAYAAACj3t7EAAAAAXNSR0IArs4c6QAABShJREFUeAHtnGuoFVUUx9PrG3v4QsNKb6IFlYkPMumD9aFSCkUhlL5kUSQpiST0RVFRURAU+yJR0IOKHkpEfZBUtLKHCJb2EB9giVftia+U8vX7g+MdjzN7r3PunrnnnDkL/sw+e63932v959wze/YMt+m62rWOpL4CDAff1G4ZtZl5D9JeDy5exiscdUIaloMCNzPHDhCJHx0/pq97DvMXeop7qf43EIleevwWX79CK5Rh8RPhPglKRS/9vJ+YoRnmUUjqWVR9DpSKnfb5T2LHFVKpwEU3wacLbJrQrv4zjJsaOJ9C0V1PtZ8Bl8g+33nGzymUaoGKvRWeH4BPYKt/NVyNZarx5IwmriWg+NFJWgdnY5nqOQlT8J/OQPzoJHwNd19PDoV1z6PyCyASK6vjXuYYUliVEwrvRN9rICvBk3h/Z76xCbkUrusmKt4IkkTKuu9f5p1cOMVjBd9O+xeQtdAufi1TZ8dyKkxTd6n6GXCJY/GFumasJJcORVF/OoWeDSD+X3CMB4sCcOlkfwC6gbq2BVRn+Wb7YvbBMyym1Aza/wfg/hKO3jHeuml2oZK3gU9Yi38rPH0SlHmYvhMB5tgDR3MCf812SSx9syzi+mLegkcnM830vOAw8PH4/MfgGJM2SS3130Gy2p/3Fezz62I731i49pF2B5hTd+SPG+esyrAHyepv4BPX59e28rQyK7yR+E0B5tYziJllzl0V4boo/gd84vr8WqreX2FFnRkX6rqzHK4OFeaR6zAluQz4hLX4f4anOUD2SwPl8x48XQPkkxmFtno/BBZxfTGfw6OfkVD2LEQhlqlb4ekVKqmQPP0h+w74hLX4X4VHG3ShbQKEJ4ElB1eM/jIHhU6uLXx3M/ggcCVt8Wlf5iWQpY2E/Aiw5OOKEYe42t0eIYPjwJWsxaclX147k4OY66cAOZ+CYyJoN9PyTMs0i8CumBY4RuVchbbBtwBXXhaf6n8O5Gp6uL0KWBL0xXwPzy25Zt86WRea7wJfjha/Vlq5LFN7MtEngZL+FB7xtadJNK3xLSL7YnTPoZOamQ2EeSfwJWLxr4GnKbNMyyd+niEhfk43wxNy+XylEl3xDwOLuK4YFfnCFdbqajxGOrqwuvK3+H6EQ/tRwWwSTCESOwGP1uLVbKNJ7iiwCO2K0Zd1RIhC50Ki9blrMovvVzjuCZFQDhzNzKFnApa6XDH6wmmZXpHpTnQtcE1g9W2HZ0BFWbTfoN5MHeIZhrY/ni63DF1ENgCrwK64dfB0LzeBKonvSh7vA1d9Vt8ia02DCdRFxErsilsBj5Z5tWzKfyVw1Wn1vQFPZ5BqY/EcA1bCtDg9B3gmdZbadMwi7RDXQu3y3pAkwRN06slTmqjW/n/geChpgjro02pQb9NZtUiL2wXHVXf/8+gI8YLTAXjuBPVs91GcntKliWvtPwTHXZFQ02i09QR8BUffiLDOj0Ooby+wip0U18L42+I6zW8D4TuM1YqhSKZXbbaBJHF9fXoolHiTpndufINL/QsZU1TrRuEfgVJNXJ91X/BommDayfvCSHiWuCfTiArU35FaVwGX6HGfd3WoP619HsI/8D8AGtaqwIs0fcvUxa3h7tYw3HrzOH7movYe+nURati1CkyhK20p/+a14e6e8bhLX6zSXndVvpLhLiVXr14i0y9E9IXVcSNw3gHjT7Sn6I2IXqddEUkic313DqW8/UDa6aYr8c6XfpMtIeplU2QjKK5APz7o/xlddccbD4jalwBLgVjNokir2QAAAABJRU5ErkJggg==\")}"; }
}

export { ScrollToTopBtn };
