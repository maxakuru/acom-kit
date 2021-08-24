const init = (element) => {
    const bg = element.querySelector(':scope > div:first-of-type > div');
    bg.classList.add('background');
    const bgImg = bg.querySelector(':scope img');
    if (!bgImg) {
        bg.style.display = 'none';
        const bgColor = bg.textContent;
        element.style.background = bgColor;
    }
    const content = element.querySelector(':scope > div:last-of-type');
    content.classList.add('container');
    content.querySelector(':scope > div:first-of-type').classList.add('text');
    content.querySelector(':scope > div:last-of-type').classList.add('image');

    const ctaType = element.classList.contains('dark') ? 'over-background' : 'cta';
    const ctas = content.querySelectorAll(':scope > div:first-of-type a');
    let i;
    for (i = 0; i < ctas.length; i++) {
        let modClass = (i === 0 && ctas.length > 1) ? 'secondary' : 'primary';
        ctas[i].classList.add('button', modClass);
    }
};

export default init;
