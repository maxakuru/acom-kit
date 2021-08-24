
// Merch Block

const init = (element) => {
    const isDefault = element.classList.contains('default');
    const defaultMarkup = '    <div class="ribbon" style="background: linear-gradient(90deg, rgb(254, 54, 0) 0%, rgb(255, 123, 2) 20%, rgb(250, 210, 32) 35%, rgb(129, 218, 66) 60%, rgb(49, 142, 255) 85%, rgb(139, 104, 232) 100%);"></div>\n' +
        '    <div class="title">\n' +
        '        <div>\n' +
        '            <h1>Find the plan that’s right for you. </h1>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div class="container products">\n' +
        '        <div class="product-wrapper">\n' +
        '            <h3 class="label">Substance 3D Texturing</h3>\n' +
        '            <p class="price">US$19.99/mo</p>\n' +
        '            <p class="desc">Create, capture, and paint 3D materials. <a href="https://www.adobe.com/products/photoshop.html?promoid=MYYBRZWW&amp;mv=other">Learn more</a></p>\n' +
        '            <p class="cta"><a href="https://www.adobe.com/creativecloud/plans.html?filter=photography&amp;plan=individual&amp;promoid=MYYBRZWW&amp;mv=other" class="button">Buy now</a></p>\n' +
        '        </div>\n' +
        '        <div class="product-wrapper has-badge">\n' +
        '            <h3 class="label">Substance 3D Collection</h3>\n' +
        '            <p class="price">US$39.99/mo* <del>US$49.99/mo</del></p>\n' +
        '            <p class="desc">Create, capture, and paint 3D materials + stage and render 3D scenes. <a href="https://www.adobe.com/products/photoshop.html?promoid=MYYBRZWW&amp;mv=other">Learn more</a></p>\n' +
        '            <p class="cta"><a href="https://www.adobe.com/creativecloud/plans.html?filter=photography&amp;plan=individual&amp;promoid=MYYBRZWW&amp;mv=other" class="button">Buy now</a></p>\n' +
        '            <p class="badge">20% off</p>\n' +
        '        </div>\n' +
        '        <div class="product-wrapper has-badge">\n' +
        '            <h3 class="label">Substance 3D Collection for teams</h3>\n' +
        '            <p class="price">US$79.99/mo</p>\n' +
        '            <p class="desc">Create, capture, and paint 3D materials + stage and render 3D scenes. <a href="https://www.adobe.com/products/photoshop.html?promoid=MYYBRZWW&amp;mv=other">Learn more</a></p>\n' +
        '            <p class="cta"><a href="https://www.adobe.com/creativecloud/plans.html?filter=photography&amp;plan=individual&amp;promoid=MYYBRZWW&amp;mv=other" class="button">Buy now</a></p>\n' +
        '            <p class="badge">20% off</p>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '    <div></div>\n' +
        '    <div class="container footer">\n' +
        '        <div>Purchase by phone: <a href="https://www.adobe.com/about-adobe/contact.html">800-585-0774</a></div>\n' +
        '    </div>\n';

    if (isDefault) {

        element.innerHTML = defaultMarkup;

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
