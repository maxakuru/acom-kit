const init = (element) => {
    const gWrap = document.createElement('div');
    gWrap.classList.add('grid-wrap');
    const gDiv = document.createElement('div');
    gDiv.classList.add('grid');
    const gridItems = element.querySelectorAll(':scope > div');
    console.log({gridItems});
    gridItems.forEach(function (item, index) {
        item.classList.add('grid-item');
        gDiv.appendChild(item);
    });
    gWrap.appendChild(gDiv);
    element.appendChild(gWrap);
};

export default init;
