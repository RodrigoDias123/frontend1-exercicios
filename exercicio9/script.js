// Inicializar o carrossel com JavaScript
document.addEventListener('DOMContentLoaded', () => {   
    new Splide('.splide', {
    type  : 'loop' , 
    perPage: 1,
    autoplay: true  ,
    interval: 1200,
    pagination: true,
    speed : 500,

    }).mount();
});
// Popper.js simples: tooltip ao passar o mouse
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('popper-btn');
    const tooltip = document.getElementById('tooltip');
    let popperInstance = null;

    function show() {
        tooltip.style.display = 'block';
        popperInstance = Popper.createPopper(button, tooltip, {
            placement: 'top',
            modifiers: [
                {
                    name: 'arrow',
                    options: {
                        element: document.getElementById('arrow'),
                    },
                },
                {
                    name: 'offset',
                    options: {
                        offset: [0, 8],
                    },
                },
            ],
        });
    }

    function hide() {
        tooltip.style.display = 'none';
        if (popperInstance) {
            popperInstance.destroy();
            popperInstance = null;
        }
    }

    if (button && tooltip) {
        button.addEventListener('mouseenter', show);
        button.addEventListener('mouseleave', hide);
        button.addEventListener('focus', show);
        button.addEventListener('blur', hide);
    }
});
