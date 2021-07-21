const inputs = document.querySelectorAll('header input')

function handleUpdate() {
    const suffix = this.dataset.size || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

}

inputs.forEach(input => input.addEventListener('change', handleUpdate))
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))