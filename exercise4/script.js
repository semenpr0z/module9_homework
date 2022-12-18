const button = document.querySelector('button');
const resultNode = document.querySelector('.result')

button.addEventListener('click', () => {
    const value1 = +document.querySelector('.input1').value;
    const value2 = +document.querySelector('.input2').value;
    if ((value1 >= 100 && value1 <= 300) && (value2 >= 100 && value2 <= 300)) {
        fetch(`https://picsum.photos/${value1}/${value2}`)
            .then((response) => {
                resultUrl = response.url;
                let cards = '';
                    const cardBlock = `
                <img
                    src="${resultUrl}">
                `;
                cards += cardBlock

                resultNode.innerHTML = cards;
            })

            .catch(() => {console.log('error') });
    }else {
        resultNode.innerHTML = `<p>
        одно из чисел вне диапазона от 100 до 300
        </p>`;
    }
    });