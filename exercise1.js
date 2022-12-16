const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

function parserXml(strXml) {
const parser = new DOMParser(); //экземпляр класса DOMParser

const xmlDOM = parser.parseFromString(strXml, "text/xml"); //Парсинг XML

const listNodes = xmlDOM.querySelector("list"); //Получение данных
const studentsNodes = listNodes.querySelectorAll("student"); //Получение данных

let result = {list: []}; //Создание переменной объекта с массивом


studentsNodes.forEach((element) => {
    let student = new Object(); //Создаем объект

        let studentFirstName = element.querySelector("first");
        let studentSecondName = element.querySelector("second");
        let studentAge = element.querySelector("age");
        let studentProf = element.querySelector("prof");
        let nameNode = element.querySelector("name"); //создаем, чтобы вытащить оттуда атрибут
        let nameLang = nameNode.getAttribute("lang");
        
    student.name = studentFirstName.textContent + ' ' + studentSecondName.textContent;
    student.age = studentAge.textContent;
    student.prof = studentProf.textContent;
	student.lang = nameLang;

    result.list.push(student);
});

console.log(result)
}

parserXml(xmlString)