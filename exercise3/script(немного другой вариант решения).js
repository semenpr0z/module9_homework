function useRequest(url, callback) {
    let xhr = new XMLHttpRequest;
    xhr.open('GET', url, true);

    xhr.onload = function () {
        if (xhr.status != 200) {
            console.log('Статус ответа: ', xhr.status);
          } else {
            const result = JSON.parse(xhr.response);
            if (callback) {
              callback(result);
            }
          }
    };

    xhr.onerror = function() {
        console.log('Ошибка! Статус ответа: ', xhr.status);
      };
      
    xhr.send();
};


const button = document.querySelector('button');
const resultNode = document.querySelector('.result')
const value = document.querySelector('input');


function displayResult(apiData) {
    let cards = '';

    if (! Number(value.value) || Number(value.value)  > 10 || Number(value.value) < 1) {
        resultNode.innerHTML += `<p>
                                число вне диапазона от 1 до 10
                            </p>`;
    }else {
        apiData.forEach(item => {
            const cardBlock = `
                        <img
                            src="${item.download_url}"
                        >
                        <p>${item.author}</p>
                        `;
        cards += cardBlock
        });
    
        resultNode.innerHTML = cards;
    }
}

button.addEventListener('click', () => {
    useRequest(`https://picsum.photos/v2/list?limit=${parseInt(value.value)}`, displayResult);
});