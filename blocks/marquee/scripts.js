const init = (element) => {
    const bg = element.querySelector(':scope > div:first-of-type > div');
    const isDark = element.classList.contains('dark');
    const isLarge = element.classList.contains('large');
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

    const ctas = content.querySelectorAll(':scope > div:first-of-type a');
    let i;
    for (i = 0; i < ctas.length; i++) {
        let isSecondLink = (i === 0 && ctas.length > 1);
        let modClass = isSecondLink ? 'secondary' : 'primary';
        ctas[i].classList.add('button', modClass);
        if (isLarge)
            ctas[i].classList.add('button-lrg');
        if (isDark && isSecondLink)
            ctas[i].classList.add('over-background');
    }
};

export default init;
