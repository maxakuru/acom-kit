
const init = (element) => {
    const wrapper = element.querySelector(':scope .product-wrapper');

    if (wrapper) {
        let nodeZeroHasImg = wrapper.childNodes[0].querySelector(':scope img') ? true : false;
        if(nodeZeroHasImg) {
            wrapper.childNodes['0'].classList.add('inline-icon');
            wrapper.childNodes['1'].classList.add('inline-label');
            wrapper.childNodes['2'].classList.add('price');
            wrapper.childNodes['3'].classList.add('desc');
            wrapper.childNodes['4'].classList.add('cta');
            const ctaLink = wrapper.childNodes['4'].querySelector( ':scope > a');
            if (ctaLink) {
                ctaLink.classList.add('button');
            }
            if(wrapper.childNodes['5']){
                wrapper.childNodes['5'].classList.add('badge');
                wrapper.classList.add('has-badge');
            }
        }else{
            wrapper.childNodes['0'].classList.add('label');
            wrapper.childNodes['1'].classList.add('price');
            wrapper.childNodes['2'].classList.add('desc');
            wrapper.childNodes['3'].classList.add('cta');
            const ctaLink = wrapper.childNodes['3'].querySelector( ':scope > a');
            if (ctaLink) {
                ctaLink.classList.add('button');
            }
            if(wrapper.childNodes['4']){
                wrapper.childNodes['4'].classList.add('badge');
                wrapper.classList.add('has-badge');
            }
        }
    }

};

export default init;
