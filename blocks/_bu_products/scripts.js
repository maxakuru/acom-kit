
const init = (element) => {

    // insert associated product content
    const productRows = element.querySelectorAll(':scope > div:first-of-type > div');
    productRows.forEach(function(prod, i) {
        var prodContent = document.getElementsByClassName('assoc-id-' + prod.textContent)[0];
        if(prodContent) {

            // decorate products
            const rows = prodContent.querySelectorAll(':scope > div');
            rows.forEach( function (row, i) {
                row.classList.add('row');
                var rowClass = row.querySelector(':scope > div:first-of-type');
                var rowContent = row.querySelector(':scope > div:nth-of-type(2)');
                // add row class and remove dom
                if(rowClass) {
                    row.classList.add(rowClass.innerText);
                    rowClass.remove();
                }
                // if row content is empty - remove dom
                if(rowContent.innerHTML.trim().length == 0) {
                    row.remove();
                }
            });

            // replace product labels with content
            prod.parentNode.replaceChild(prodContent, prod);
        }
    });
    console.log('productRows', productRows);
//    const rows = element.querySelectorAll(':scope > div');
//    console.log('rows', rows);
//    rows.forEach( function (row, i) {
//        row.classList.add('row');
//        var rowClass = row.querySelector(':scope > div:first-of-type');
//        var rowContent = row.querySelector(':scope > div:nth-of-type(2)');
//        // add row class and remove dom
//        if(rowClass) {
//            row.classList.add(rowClass.innerText);
//            rowClass.remove();
//        }
//        // if row content is empty - remove dom
//        if(rowContent.innerHTML.trim().length == 0) {
//            row.remove();
//        }
//    });

//    const wrapper = document.createElement('div');
//    var products = document.querySelectorAll('.product');
//    console.log('DOMContentLoaded', wrapper, products);
};

export default init;
