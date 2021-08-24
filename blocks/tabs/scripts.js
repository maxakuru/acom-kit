const init = (element) => {
    const tabListBg = element.querySelector(':scope > div:first-of-type > div');
    tabListBg.classList.add('tabListBg');
    const bgImg = tabListBg.querySelector(':scope img');
    if (!bgImg) {
        const bgColor = tabListBg.textContent;
        tabListBg.style = `background: ${bgColor}`;
        tabListBg.innerHTML = '';
    }
    // create the tabs list container div
    const tabsListContainer = document.createElement('div');
    const tabs = element.querySelectorAll(':scope > div:nth-of-type(2) > div');
    const tabIds = element.querySelectorAll(':scope > div:nth-of-type(3) > div');
    tabs.forEach(function (tab, i) {
        tab.remove();
        let isChecked = i === 0 ? ' checked' : '';
        let radioLabel = '<input class="radiotab" name="tabs" tabindex="1" type="radio" id="tab-' + tabIds[i].textContent + '"' + isChecked + ' />'
        + '<label class="label" for="tab-' + tabIds[i].textContent + '">' + tab.textContent + '</label>';
        tabsListContainer.insertAdjacentHTML('beforeend', radioLabel );
    });

    tabIds.forEach(function (id, i) {
        id.remove();
        let assocTabContent = document.getElementsByClassName('tab-id-' + id.textContent)[0];
        let tabList = tabsListContainer.querySelector('label[for="tab-' + id.textContent + '"]');
        if(assocTabContent && tabList) {
            assocTabContent.classList.add('tab-content', 'tab-index-'+i);
            assocTabContent.setAttribute('tabindex', 1);
            tabList.parentNode.insertBefore(assocTabContent, tabList.nextSibling);
        }
    });

    const products = tabsListContainer.querySelectorAll(':scope > .product');
    products.forEach(function (p, i) {
        let productTypeTitle = p.querySelector(':scope > div:nth-of-type(1) > div');
        productTypeTitle.classList.add('product-wrapper');
    });

    // append the tabs list container after tabListBg
    tabsListContainer.classList.add('container', 'list-container');
    tabListBg.after(tabsListContainer);
    tabIds.innerHTML = '';
};

export default init;


