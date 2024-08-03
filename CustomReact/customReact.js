
    function render(reactElement, container) {
        const ele = document.createElement(reactElement.type);
        ele.innerHTML = reactElement.chlidren;
    
        for (const prop in reactElement.props) {
            if(prop === "chlidren") continue;
            ele.setAttribute(prop, reactElement.props[prop])
        };
    
        container.appendChild(ele);
    }
    
    const reactElement = {
        type: 'a',
        props: {
            href: 'https://www.google.com/',
            target: '_blank'
        },
        chlidren: 'click me to visit google'
    };
    
    const main = document.querySelector('#main')
    
    render(reactElement, main);


