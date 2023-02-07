let links = document.querySelectorAll('.link_wrapper');
links.forEach((l, i) => {
    l.parentNode.appendChild(links[Math.random() * i | 0]);
})