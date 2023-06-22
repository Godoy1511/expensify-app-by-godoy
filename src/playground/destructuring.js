// 1) Object destructuring 

const person = {
    nome: "Pedro",
    age: 25,
    location: {
        city: "São Paulo",
        temp: 30
    }
};


// No destructuring, é possível criar uma const local com um novo nome, como ocorre nas linhas 14 e 18
const { nome: firstName = "Annonymous", age } = person;
console.log(`${firstName} is ${age}`);


const { city, temp: temperature } = person.location
if (temperature && city) {
    console.log(`It's ${temperature} in ${city}`);
}

// Challenge:
// const book = {
//     title: "Kama Sutra",
//     author: "Steve Jobs",
//     publisher: {
//         name: "Penguin"
//     }
// };

// const { name: publisherName = "Self-Published" } = book.publisher

// console.log(publisherName);



// 2) Array destructuring

// As novas variáveis locais são criadas por posição. 
// nâo é necessário criar variáveis locais para todos os itens do array. Se quiser pular algum, só usar a vírgula ","
// Se não quiser usar as do final, é só nao colocar ela dentro da array das variáveis locais 
const address = ['Rua Pamplona', ' SP', 'Brasil', '3030'];
const [, state, country = "New York"] = address;
console.log(`You are in ${state} ${country}`);

// Challenge
const item = ['Coffee (hot)', '$2.00', '$2.50', '$3.50'];
const [coffee, , mediumPrice] = item
console.log(`A medium ${coffee} costs ${mediumPrice}`)

