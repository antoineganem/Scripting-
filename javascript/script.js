document.addEventListener('DOMContentLoaded', (event) => {
    // Mouse Event Example
    const mouseEventBtn = document.getElementById('mouseEventBtn');
    const mouseEventResult = document.getElementById('mouseEventResult');

    mouseEventBtn.addEventListener('click', () => {
        mouseEventResult.innerHTML = 'Button was clicked!';
    });

    // Keyboard Event Example
    const keyboardEventInput = document.getElementById('keyboardEventInput');
    const keyboardEventResult = document.getElementById('keyboardEventResult');

    keyboardEventInput.addEventListener('keyup', (event) => {
        keyboardEventResult.innerHTML = `You pressed: ${event.key}`;
    });

    // Form Event Example
    const formEvent = document.getElementById('formEvent');
    const formEventResult = document.getElementById('formEventResult');

    formEvent.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevents the form from submitting the traditional way
        const name = document.getElementById('name').value;
        formEventResult.innerHTML = `Form submitted! Hello, ${name}`;
    });
});
