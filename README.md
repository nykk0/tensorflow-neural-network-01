# 🧠 Machine Learning Playground

Este repositório reúne meus estudos sobre **Machine Learning**, **Deep Learning** e **Redes Neurais**, utilizando **TensorFlow.js** para desenvolver projetos práticos e compreender como os algoritmos funcionam internamente.

O objetivo deste repositório não é apenas criar modelos de Inteligência Artificial, mas entender cada etapa do processo de aprendizado, desde o tratamento dos dados até a realização de previsões.

---

# 🎯 Objetivos

- Aprender os fundamentos de Machine Learning.
- Entender o funcionamento de Redes Neurais.
- Desenvolver projetos práticos utilizando TensorFlow.js.
- Compreender como uma IA aprende através dos dados.
- Experimentar diferentes arquiteturas e técnicas de treinamento.

---

# 📚 Tecnologias

- JavaScript (ES Modules)
- Node.js
- TensorFlow.js

---

Conforme novos estudos forem sendo realizados, novos projetos serão adicionados ao repositório.

---

# 🚀 Projeto 01 - Previsão de Interesse em Jogos

Neste primeiro projeto foi criada uma Rede Neural simples capaz de prever se uma pessoa possui tendência a gostar de jogos com base em algumas características.

### Entradas

- Idade
- Tempo livre
- Gosta de tecnologia

### Saída

- Gosta de jogos (Sim ou Não)

---

# 🧠 Arquitetura da Rede Neural

A rede neural utilizada possui a seguinte estrutura:

```
Entradas (3)

Idade
Tempo Livre
Gosta de Tecnologia

        │

        ▼

Camada Oculta
4 neurônios
ReLU

        │

        ▼

Camada de Saída
1 neurônio
Sigmoid

        │

        ▼

Probabilidade de gostar de jogos
```

---

# 📖 Etapas do Desenvolvimento

Durante este projeto foram estudados os seguintes conceitos:

- Estrutura de uma Rede Neural
- Tensores
- TensorFlow.js
- Camadas Dense
- Funções de ativação (ReLU e Sigmoid)
- Treinamento utilizando `model.fit()`
- Predições utilizando `model.predict()`
- Optimizer (Adam)
- Função de perda (Binary Crossentropy)
- Accuracy
- Epochs
- Batch Size
- Preparação dos dados

---

# ▶️ Como executar

### 1 - Clone o repositório

```bash
git clone https://github.com/SEU-USUARIO/machine-learning-playground.git
```

### 2 - Entre no projeto

```bash
cd machine-learning-playground/01-gosta-de-jogos
```

### 3 - Instale as dependências

```bash
npm install
```

### 4 - Execute o projeto

```bash
node index.js
```

---

# 💡 Próximos Projetos

Este repositório será expandido com novos estudos, como:

- Regressão Linear
- Classificação com múltiplas categorias
- Recomendação de produtos
- Reconhecimento de imagens
- Redes Neurais Convolucionais (CNN)
- Deep Learning
- Processamento de Linguagem Natural (NLP)

---

# 📌 Observações

Todos os conjuntos de dados utilizados possuem finalidade exclusivamente educacional e foram criados para estudo dos algoritmos.

---

# 📖 Licença

Este projeto foi desenvolvido exclusivamente para fins de estudo e aprendizado.