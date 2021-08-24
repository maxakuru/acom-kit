const init = (element) => {
    // create the tabs list container div
    const container = element.querySelector(':scope > div:first-of-type');
    container.classList.add('container');
    const rowIds = element.querySelectorAll(':scope > div:first-of-type > div');
    // create the products container div
    const dv = document.createElement('div');
    dv.classList.add('river-flow');

    rowIds.forEach(function (id, i) {
        id.remove();
        let assocIdContent = document.getElementsByClassName(id.textContent)[0];
        if(assocIdContent && container) {
            let rowClassList = (i % 2 == 0) ? 'row-normal' : 'row-reverse';
            assocIdContent.classList.add('flow-content', rowClassList);
            dv.append(assocIdContent);
        }
    });
    container.append(dv);
};

export default init;
