let numberOfLetters = document.querySelectorAll('.alphabet');


numberOfLetters.forEach((letterButton) => letterButton.addEventListener('click', beginSoundAction));



function beginSoundAction() {
    // alert('Clicked');
    let letterButtonInnerHTML = this.innerHTML;

    makeSound(letterButtonInnerHTML);
    makeAnimation(letterButtonInnerHTML);

}

document.addEventListener('keydown', function (event) {
    makeSound(event.key);
    makeAnimation(event.key);
});

function makeAnimation(key) {
    let actualkey = document.querySelector(`.${key}`);
    actualkey.classList.add('pressed');
    setTimeout(function () {
        actualkey.classList.remove('pressed');
    }, 100);

}


function makeSound(key) {
    switch (key) {
        case 'a':
        case 'Aa':
            let a = new Audio('/sounds/a.mp3');
            a.play();

            break;

        case 'b':
        case 'Bb':
            let b = new Audio('/sounds/b.mp3');
            b.play();

            break;

        case 'c':
        case 'Cc':
            let c = new Audio('/sounds/c.mp3');
            c.play();

            break;


        case 'd':
        case 'Dd':
            let d = new Audio('/sounds/d.mp3');
            d.play();

            break;


        case 'e':
        case 'Ee':
            let e = new Audio('/sounds/e.mp3');
            e.play();

            break;

        case 'f':
        case 'Ff':
            let f = new Audio('/sounds/f.mp3');
            f.play();

            break;

        case 'g':
        case 'Gg':
            let g = new Audio('/sounds/g.mp3');
            g.play();

            break;

        case 'h':
        case 'Hh':
            let h = new Audio('/sounds/h.mp3');
            h.play();

            break;

        case 'i':
        case 'Ii':
            let i = new Audio('/sounds/i.mp3');
            i.play();

            break;

        case 'j':
        case 'Jj':
            let j = new Audio('/sounds/j.mp3');
            j.play();

            break;

        case 'k':
        case 'Kk':
            let k = new Audio('/sounds/k.mp3');
            k.play();

            break;

        case 'l':
        case 'Ll':
            let l = new Audio('/sounds/l.mp3');
            l.play();

            break;

        case 'm':
        case 'Mm':
            let m = new Audio('/sounds/m.mp3');
            m.play();

            break;

        case 'n':
        case 'Nn':
            let n = new Audio('/sounds/n.mp3');
            n.play();

            break;

        case 'o':
        case 'Oo':
            let o = new Audio('/sounds/o.mp3');
            o.play();

            break;

        case 'p':
        case 'Pp':
            let p = new Audio('/sounds/p.mp3');
            p.play();

            break;

        case 'q':
        case 'Qq':
            let q = new Audio('/sounds/q.mp3');
            q.play();

            break;

        case 'r':
        case 'Rr':
            let r = new Audio('/sounds/r.mp3');
            r.play();

            break;

        case 's':
        case 'Ss':
            let s = new Audio('/sounds/s.mp3');
            s.play();

            break;

        case 't':
        case 'Tt':
            let t = new Audio('/sounds/t.mp3');
            t.play();

            break;

        case 'u':
        case 'Uu':
            let u = new Audio('/sounds/u.mp3');
            u.play();

            break;

        case 'v':
        case 'Vv':
            let v = new Audio('/sounds/v.mp3');
            v.play();

            break;

        case 'w':
        case 'Ww':
            let w = new Audio('/sounds/w.mp3');
            w.play();

            break;

        case 'x':
        case 'Xx':
            let x = new Audio('/sounds/x.mp3');
            x.play();

            break;

        case 'y':
        case 'Yy':
            let y = new Audio('/sounds/y.mp3');
            y.play();

            break;

        case 'z':
        case 'Zz':
            let z = new Audio('/sounds/z.mp3');
            z.play();

            break;

        default:
            break;
    }
}