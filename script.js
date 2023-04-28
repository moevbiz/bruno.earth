document.addEventListener('DOMContentLoaded', () => {
    const headings = document.querySelectorAll('h2');
    headings.forEach(h => {
        h.innerHTML = '<span>' + h.innerText.split('').join('</span><span>') + '</span>';
    })
})