const jsonpGist = (url, callback) => {
    // Setup a unique name that cane be called & destroyed
    const callbackName = 'jsonp_' + Math.round(100000 * Math.random());

    // Create the script tag
    const script = document.createElement('script');
    script.src = `${url}${(url.indexOf('?') >= 0 ? '&' : '?')}callback=${callbackName}`;

    // Define the function that the script will call
    window[callbackName] = (data) => {
        delete window[callbackName];
        document.body.removeChild(script);
        callback(data);
    };

    // Append to the document
    document.body.appendChild(script);
};

const gist = (element, utils) => {
    const { href } = element;
    const url = href.slice(-2) == 'js' ? `${href}on` : `${href}.json`;

    jsonpGist(url, (data) => {
        utils.addStyle(data.stylesheet);
        element.insertAdjacentHTML('afterend', data.div);
        element.remove();
    });
};

export default gist;
