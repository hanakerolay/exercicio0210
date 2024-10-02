let capacidadeMaxima = 50;
let vagasDisponiveis = capacidadeMaxima;

function adicionarClien() {
    let numClientes = Number(document.getElementById('nembClients').value);
        
    if (isNaN(numClientes) || numClientes <= 0) {
        message.textContent = 'Por favor, insira um número válido de clientes!';
        return;
    }

while (vagasDisponiveis > 0 && numClientes <= vagasDisponiveis) {
    vagasDisponiveis -= numClientes; 
    document.getElementById('VagaDispon').innerText = vagasDisponiveis;
    break; 
    }

if (vagasDisponiveis <= 0) {
    document.getElementById('avisoMessage').innerText = "Restaurante lotado, não há mais mesas disponíveis.";
    document.getElementById('adicionarClie').disabled = true;
    }
}

let total = 0; 
function insertProduct() {
    let productValueInput = document.getElementById('productValue');
    let message = document.getElementById('message');
    let insertBtn = document.getElementById('insertBtn');

    let productValue = parseFloat(productValueInput.value);

    if (isNaN(productValue) || productValue < 0) {
        message.textContent = 'Por favor, insira um valor válido de produto!';
        return;
    }
    total += productValue;
    message.textContent = `Soma atual dos produtos: R$ ${total.toFixed(2)}`;
    
    productValueInput.value = '';
}

function finalize() {
    const insertBtn = document.getElementById('insertBtn');
    const message = document.getElementById('message');
    insertBtn.disabled = true;
    message.textContent = `Inserção finalizada. Soma total dos produtos: R$ ${total.toFixed(2)}`;
}

function segundoGrau() {
    let valorA = Number(document.getElementById("A1").value);
    let valorB = Number(document.getElementById("B1").value);
    let valorC = Number(document.getElementById("C1").value);

    
    while (valorA == 0) {
        alert("O coeficiente A não pode ser zero. Por favor, insira um valor válido.");
        valorA = Number(prompt("Digite um valor para A (diferente de zero):"));
        document.getElementById("A1").value = valorA;
    }
    
    let delta = (valorB ** 2) - (4 * valorA * valorC);
    
    if (delta < 0) {
        document.getElementById("segundograu").innerText = "A equação não possui raízes reais.";
    } else {
        let x1 = (-valorB + Math.sqrt(delta)) / (2 * valorA);
        let x2 = (-valorB - Math.sqrt(delta)) / (2 * valorA);
        document.getElementById("segundograu").innerText = "x1 = " + x1 + " -- " + "x2 = " + x2;
    }
}