const init = (element) => {
    const bg = element.querySelector(':scope > div:first-of-type > div');
    bg.classList.add('background');
    const bgImg = bg.querySelector(':scope img');
    if (!bgImg) {
        bg.style.display = 'none';
        const bgColor = bg.textContent;
        element.style.background = bgColor;
    }
    const container = element.querySelector(':scope > div:nth-child(2)');
    container.classList.add('container');

    const promoImg = container.querySelector(':scope > div:nth-child(1)');
    const promoTxt = container.querySelector(':scope > div:nth-child(2)');
    const promoCta = container.querySelector(':scope > div:nth-child(3)');
    const content = document.createElement('div');
    content.classList.add('content');
    promoImg.classList.add('image');
    promoTxt.classList.add('text');
    promoCta.classList.add('link');
    console.log({promoImg});
    content.append(promoImg);
    content.append(promoTxt);
    content.append(promoCta);
    container.appendChild(content);

    const cta = promoCta.querySelector(':scope > a');
    const ctaType = element.classList.contains('dark') ? 'over-background' : 'cta';
    cta.classList.add('button', ctaType);

    const banner = element.querySelector(':scope > div:last-of-type');
    banner.classList.add('ribbon');
    const bannerContext = banner.querySelector(':scope > div');
    const bannerImg = bannerContext.querySelector(':scope img');
    if (!bannerImg) {
        const bannerColor = bannerContext.textContent;
        bannerContext.innerHTML = '';
        banner.style = `background: ${bannerColor}`;
    }
};

export default init;
