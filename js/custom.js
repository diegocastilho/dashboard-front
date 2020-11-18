const startSidebar = () => {
    // Toggle Sidebar
    $('#bar').click(function () {
        $(this).toggleClass('open');
        $('#page-content-wrapper ,#sidebar-wrapper').toggleClass('toggled');
    });
}

const startTooltip = () => {
    $('[data-toggle="tooltip"]').tooltip();
}

const startSlider = () => {
    const slider = document.getElementById('sliderPrice');
    const rangeMin = parseInt(slider.dataset.min);
    const rangeMax = parseInt(slider.dataset.max);
    const step = parseInt(slider.dataset.step);
    const filterInputs = document.querySelectorAll('input.filter-input');

    noUiSlider.create(slider, {
        start: [rangeMin, rangeMax],
        connect: true,
        step: step,
        range: {
            'min': rangeMin,
            'max': rangeMax
        },

        // make numbers whole
        format: {
            to: value => value,
            from: value => value
        }
    });

// bind inputs with noUiSlider
    slider.noUiSlider.on('update', (values, handle) => {
        filterInputs[handle].value = values[handle];
    });

    filterInputs.forEach((input, indexInput) => {
        input.addEventListener('change', () => {
            slider.noUiSlider.setHandle(indexInput, input.value);
        })
    });
}

$(function () {
    startSidebar();
    startTooltip();
    startSlider();
});
