document.addEventListener('DOMContentLoaded', function() {
    let house = document.querySelector('.house')
    house.addEventListener('click', function(e) {
        e.preventDefault();
        if(e.target.tagName == 'A') {
            let link = e.target;
            let room = e.target.parentElement;
            let clone = cloneElement(room);
            window.setTimeout(function() {
                clone.classList.add('zooming');
            }, 20)
            prefetch(link);
            window.setTimeout(function() {
                window.location = link.href;
            }, 500)
        }
    })
})

const cloneElement = (el) => {
    let clone = el.cloneNode(true);
    el.viewportOffset = el.getBoundingClientRect();
    clone.style.position = 'fixed';
    clone.style.width = el.clientWidth + 2 + 'px';
    clone.style.top = el.viewportOffset.top + 'px';
    clone.style.left = el.viewportOffset.left + 'px';
    clone.style.margin = 0;
    document.body.appendChild(clone);
    return clone;
}

const prefetch = (link) => {
    let href = link.getAttribute('href');
    let prerenderLink = document.createElement("link");
    prerenderLink.setAttribute("rel", "prerender");
    prerenderLink.setAttribute("href", href);

    //-- Spit out the prerender hint.
    document.head.appendChild(prerenderLink);
}