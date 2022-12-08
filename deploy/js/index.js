
let width_device_El = document.querySelector('.width_device')
let height_device_El = document.querySelector('.height_device')



addEventListener('scroll', (event) => {
    width_device_El.textContent = window.screen.width
    height_device_El.textContent = window.screen.height
});