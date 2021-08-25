import { defaultHTML } from './defaultHTML.js';

const init = (element) => {
    const isDefault = element.classList.contains('default');
    if (isDefault) {
        element.innerHTML = defaultHTML;
    } else {
        console.log({element});
        const ribbon = element.querySelector(':scope > div:first-of-type > div');
        ribbon.classList.add('ribbon');
        const bgImg = ribbon.querySelector(':scope img');
        if (!bgImg) {
            const bgColor = ribbon.textContent;
            ribbon.style = `background: ${bgColor}`;
            ribbon.innerHTML = '';
        }
        const title = element.querySelector(':scope > div:nth-of-type(2)');
        title.classList.add('title');

        // create the products container div
        const dv = document.createElement('div');
        dv.classList.add('container', 'products');
        const prods = element.querySelectorAll(':scope > div:nth-of-type(3) > div');

        prods.forEach(function (prod, index) {

            prod.classList.add('product-wrapper');
            // RP: some code duplication from product/scripts.js
            let nodeZeroHasImg = prod.childNodes[0].querySelector(':scope img') ? true : false;
            if(nodeZeroHasImg) {
                prod.childNodes['0'].classList.add('inline-icon');
                prod.childNodes['1'].classList.add('inline-label');
                prod.childNodes['2'].classList.add('price');
                prod.childNodes['3'].classList.add('desc');
                prod.childNodes['4'].classList.add('cta');
                const ctaLink = prod.childNodes['4'].querySelector( ':scope > a');
                if (ctaLink) {
                    ctaLink.classList.add('button');
                }
                if(prod.childNodes['5']){
                    prod.childNodes['5'].classList.add('badge');
                    prod.classList.add('has-badge');
                }
            }else{
                prod.childNodes['0'].classList.add('label');
                prod.childNodes['1'].classList.add('price');
                prod.childNodes['2'].classList.add('desc');
                prod.childNodes['3'].classList.add('cta');
                const ctaLink = prod.childNodes['3'].querySelector( ':scope > a');
                if (ctaLink) {
                    ctaLink.classList.add('button');
                }
                if(prod.childNodes['4']){
                    prod.childNodes['4'].classList.add('badge');
                    prod.classList.add('has-badge');
                }
            }
            dv.appendChild(prod);
        });
        // append the container div after title
        title.after(dv);

        const footer = element.querySelector(':scope > div:last-of-type');
        footer.classList.add('container', 'footer');
    }
};

export default init;
