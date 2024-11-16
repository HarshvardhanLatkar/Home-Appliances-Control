document.getElementById('fan-toggle').addEventListener('change', function () {
    console.log('Fan Power:', this.checked ? 'ON' : 'OFF');
});

document.getElementById('fan-speed').addEventListener('input', function () {
    console.log('Fan Speed:', this.value);
});

document.getElementById('ac-toggle').addEventListener('change', function () {
    console.log('AC Power:', this.checked ? 'ON' : 'OFF');
});

document.getElementById('ac-temp').addEventListener('input', function () {
    console.log('AC Temperature:', this.value);
});

document.getElementById('lights-toggle').addEventListener('change', function () {
    console.log('Lights Power:', this.checked ? 'ON' : 'OFF');
});

document.getElementById('lights-brightness').addEventListener('input', function () {
    console.log('Lights Brightness:', this.value);
});

document.getElementById('lights-color').addEventListener('input', function () {
    console.log('Lights Color:', this.value);
});

function updateValue(id, value) {
    document.getElementById(id).textContent = value;
}
