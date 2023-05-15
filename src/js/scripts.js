document.addEventListener('DOMContentLoaded', function () {
    const diamond = document.getElementById('diamond');
    const wrapDiamond = document.getElementById('wrap');

    changeBg(diamond, wrapDiamond);
    changeNumber();

    function changeBg(target, path) {
        target.addEventListener('mouseenter', function () {
            path.style.backgroundColor = 'blue';
        });

        target.addEventListener('mouseleave', function () {
            path.style.backgroundColor = '';
        });
    }

    function changeNumber() {
        const mass = ['GO!', '1', '2', '3'];
        let i = 0;

        const timer = setInterval(() => {
            diamond.textContent = mass[i];
            i++;

            if (i >= mass.length) {
                clearInterval(timer);
                setTimeout(changeNumber, 2000);
            }
        }, 1000);
    }
});
