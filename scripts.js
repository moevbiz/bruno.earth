document.addEventListener('DOMContentLoaded', () => {
    const el1 = document.querySelector('.el[id="1"]');
    el1.addEventListener('click', e => {
        // reloads iframe
        e.target.querySelector('iframe').src += '';
    })
})