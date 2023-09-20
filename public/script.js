document.getElementById('button1').addEventListener('click', () => {
    fetchData('value1');
});

document.getElementById('button2').addEventListener('click', () => {
    fetchData('value2');
});

function fetchData(argument) {
    fetch(`/api/your_endpoint?argument=${argument}`)
        .then((response) => response.json())
        .then((data) => {
            document.getElementById('result').textContent = `Response: ${data.result}`;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}
