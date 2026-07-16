import pessoas from "./pessoas.json" with {type: 'json'};
import * as tf from "@tensorflow/tfjs";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

// primeiro tratar entrada, se passar somente gosta de jogos a ia não aprende nada

const entradas = pessoas.map((pessoa) => {
    return [
        pessoa.idade,
        pessoa.tempoLivre,
        pessoa.gostaTecnologia
    ]
});

const saidas = pessoas.map((pessoa) => {
    return[
        pessoa.gostaJogos
    ]
})


const tensorEntradas = tf.tensor2d(entradas);
const tensorSaidas = tf.tensor2d(saidas);

// camada oculta - pensamento dos dados

//rede neural
const modelo = tf.sequential();

modelo.add(
    tf.layers.dense({
        units: 48,
        activation: 'relu',
        inputShape: [3]
    })
);


modelo.add(
    tf.layers.dense({
        units: 1,
        activation: "sigmoid"
    })
);

// aqui estamos passando a forma que ira tratar em cada ocasiao 
modelo.compile({ 
    optimizer: 'adam',
    loss: 'binaryCrossentropy',
    metrics: ['accuracy']
})

await modelo.fit(tensorEntradas,tensorSaidas,
    {
        epochs: 150, // quantidade de vezes que vai repetir os dados
        batchSize: 4, //  vai treinar usando 4 dados por vez , exemplo 1 - 4 depois 4 - 8
        shuffle: true, // embaralhar os dados
        verbose: 0,
            callbacks: {
        onEpochEnd: (epoch, logs) => {
            console.log(
                `Época ${epoch + 1}: Loss = ${logs.loss.toFixed(4)}, Accuracy = ${logs.acc?.toFixed(4) ?? logs.accuracy?.toFixed(4)}`
            );
        }
    }

    }
);


// passando as informações de uma nova pessoa na mão


const rl = readline.createInterface({ input, output });

const idade = Number(await rl.question("Idade: "));
const tempoLivre = Number(await rl.question("Tempo livre: "));
let gostaTecnologia = await rl.question("Gosta de tecnologia? (Sim ou Nao): ");

gostaTecnologia = gostaTecnologia == 'Sim' ? 1 : 0;
console.log(gostaTecnologia);
rl.close();

const novaPessoa = tf.tensor2d([
    [idade, tempoLivre, gostaTecnologia]
]);

// prever se a pessoa gosta de jogos ou não


const previsao = modelo.predict(novaPessoa);

const resultado = await previsao.array();

// se resultado for maior que 0.5 a pessoa provavelmente gosta de jogos 
if (resultado[0][0] >= 0.5) {
    console.log("Provavelmente gosta de jogos.");
} else {
    console.log("Provavelmente não gosta de jogos.");
}