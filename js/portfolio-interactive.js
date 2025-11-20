document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.skill-slider');

    sliders.forEach(slider => {
        const updateSkillBar = (value, target) => {
            const progressElement = document.getElementById(`progress-${target}`);
            const valueElement = document.getElementById(`val-${target}`);
            progressElement.style.width = `${value}%`;
            valueElement.textContent = `${value}%`;
            let color = '';
            if (value >= 90) {
                color = '#28A745';
            } else if (value >= 75) {
                color = '#00A3FF';
            } else {
                color = '#FFC107';
            }
            progressElement.style.backgroundColor = color;
        };

        updateSkillBar(slider.value, slider.dataset.target);

        slider.addEventListener('input', (event) => {
            const newValue = event.target.value;
            const target = event.target.dataset.target;
            updateSkillBar(newValue, target);
        });
    });
});
