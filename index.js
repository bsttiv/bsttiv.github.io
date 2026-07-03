document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById('time-machine-btn');

    const epoch = localStorage.getItem('epoch') || '90s';
    if (epoch === 'modern') {
        document.body.classList.add('modern');
        btn.textContent = "Back to the 90's";
    }

    btn.addEventListener('click', () => {
        const isModern = document.body.classList.toggle('modern');
        
        if (isModern) {
            localStorage.setItem('epoch', 'modern');
            btn.textContent = "Back to the 90's";
        } else {
            localStorage.setItem('epoch', '90s');
            btn.textContent = "Travel to the future...";
        }
    });
});