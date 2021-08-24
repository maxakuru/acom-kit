const init = (element) => {
    // create the tabs list container div
    const container = element.querySelector(':scope > div:first-of-type');
    container.classList.add('m-container');
    const image = container.querySelector(':scope > div:first-of-type');
    const text = container.querySelector(':scope > div:last-of-type');
    image.classList.add('image');
    text.classList.add('text');
    const ctaType = element.classList.contains('dark') ? 'cta dark' : 'cta';
    const ctas = text.querySelectorAll('a');
    let i;
    for (i = 0; i < ctas.length; i++) {
        ctas[i].classList.add(ctaType);
        const ctaStyleCheck = ctas[i].textContent.includes(' --');
        if (ctaStyleCheck) {
            const ctaStringIndex = ctas[i].textContent.lastIndexOf(' --');
            const ctaStyle = ctas[i].textContent.slice(ctaStringIndex);
            const ctaUpdatedText = ctas[i].textContent.replace(`${ctaStyle}`, '');
            const ctaStyleSanitize = ctaStyle.replace(' --', '');
            ctas[i].setAttribute('data-icon', ctaStyleSanitize);
            ctas[i].innerHTML = ctaUpdatedText;
            ctas[i].classList.add(`${ctaStyleSanitize}`);
        }
    }

    const content = document.createElement('div');
    content.classList.add('m-content');
    content.append(image);
    content.append(text);
    container.appendChild(content);
    setTimeout(function() {
        element.classList.add('init');
    }, 500);
};

export default init;
