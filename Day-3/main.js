const inputs = document.querySelectorAll('input');

function handleUpdates() {
    const suffix = this.dataset.size || '';
    document.documentElement.style.setProperty(
        `--${this.name}`,
        this.value + suffix,
    );
}

inputs.forEach(input => input.addEventListener('change', handleUpdates));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdates));
