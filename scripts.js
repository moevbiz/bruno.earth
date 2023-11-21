document.addEventListener('DOMContentLoaded', () => {
    const iframe = document.querySelector('body');
    iframe.addEventListener('click', e => {
        // reloads iframe
        e.target.querySelector('iframe').src += '';
    })
})