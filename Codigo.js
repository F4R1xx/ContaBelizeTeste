import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getDatabase, set, get, update, remove, ref, child }
            from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCX_k3nY6beoI9YlnP1Eqx4Dgh140s_ZZk",
    authDomain: "contabelize.firebaseapp.com",
    projectId: "contabelize",
    storageBucket: "contabelize.appspot.com",
    messagingSenderId: "1094750666616",
    appId: "1:1094750666616:web:2497b29ffa37b54afb128d"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

function formatDateToPTBR(date) {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
}

function formatDateToISO(date) {
    const [day, month, year] = date.split('/');
    return `${year}-${month}-${day}`;
}

function parseDatePTBR(date) {
    const [day, month, year] = date.split('/');
    return new Date(year, month - 1, day);
}

function addOneMonthToDate(date) {
    const [day, month, year] = date.split('/');
    let newMonth = parseInt(month) + 1;
    let newYear = parseInt(year);

    if (newMonth > 12) {
        newMonth = 1;
        newYear += 1;
    }

    return `${day}/${newMonth.toString().padStart(2, '0')}/${newYear}`;
}

function formatDateInput(input) {
    let value = input.value.replace(/\D/g, ''); // Remove tudo que não é dígito
    if (value.length > 2) value = value.replace(/(\d{2})(\d)/, '$1/$2');
    if (value.length > 5) value = value.replace(/(\d{2})(\d{2})(\d)/, '$1/$2/$3');
    input.value = value;
}

function insertPedido() {
    const dataInput = document.querySelector(".enterData").value.trim();
    const precoInput = document.querySelector(".enterPreco").value.trim();
    const clienteInput = document.querySelector(".enterCliente").value.trim();
    const nomePecaInput = document.querySelector(".enterNomePeca").value.trim();
    const parcelasTotaisInput = document.querySelector(".enterParcelasTotais").value.trim();

    if (!dataInput || !precoInput || !clienteInput || !nomePecaInput || !parcelasTotaisInput) {
        Swal.fire({
            icon: 'warning',
            title: 'Campo vazio',
            text: 'Por favor, preencha todos os campos.',
            confirmButtonColor: '#B93171'
        });
        return;
    }

    // Verifica se a data está no formato ISO (yyyy-mm-dd)
    const isoDatePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!isoDatePattern.test(dataInput)) {
        Swal.fire({
            icon: 'error',
            title: 'Data incorreta',
            text: 'Por favor, insira a data no formato correto (dd/mm/yyyy).',
            confirmButtonColor: '#B93171'
        });
        return;
    }

    // Converte a data do formato ISO para PT-BR
    const dataParts = dataInput.split('-');
    const formattedDate = `${dataParts[2]}/${dataParts[1]}/${dataParts[0]}`;

    Swal.fire({
        title: 'Confirmação',
        text: "Todas as informações estão corretas?",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#4CAF50',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim',
        cancelButtonText: 'Não'
    }).then((result) => {
        if (result.isConfirmed) {
            const dataPagamento = addOneMonthToDate(formattedDate);

            const pedidoData = {
                DataPedido: formattedDate, // Armazena a data no formato PT-BR
                DataPagamento: dataPagamento,
                Preco: parseFloat(precoInput),
                Cliente: clienteInput,
                NomePeca: nomePecaInput,
                Entrega: 'Não Feita',
                ParcelasPagas: 0, // Inicializa com 0 parcelas pagas
                ParcelasTotais: parseInt(parcelasTotaisInput),
                Finalizado: false // Inicializa como não finalizado
            };

            const pedidoId = Date.now(); // Usar um timestamp como ID único para cada pedido

            set(ref(db, "Pedidos/" + pedidoId), pedidoData)
                .then(() => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Pedido inserido',
                        text: 'Pedido inserido com sucesso!',
                        confirmButtonColor: '#B93171'
                    });
                    fetchPedidos(); // Atualiza a lista de pedidos após inserir um novo pedido
                })
                .catch((error) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Erro',
                        text: 'Erro ao inserir o pedido: ' + error,
                        confirmButtonColor: '#B93171'
                    });
                });
        }
    });
}

function fetchPedidos() {
    const dbRef = ref(db);
    get(child(dbRef, "Pedidos")).then((snapshot) => {
        if (snapshot.exists()) {
            const pedidosTableBody = document.querySelector("#pedidosTable tbody");
            pedidosTableBody.innerHTML = ""; // Limpa a tabela antes de inserir os novos dados
            const pedidos = snapshot.val();

            // Ordena os pedidos por DataPedido em ordem decrescente
            const pedidosArray = Object.keys(pedidos).map(id => ({ id, ...pedidos[id] }));
            pedidosArray.sort((a, b) => parseDatePTBR(b.DataPedido) - parseDatePTBR(a.DataPedido));

            const today = new Date();
            const todayStr = today.toLocaleDateString('pt-BR'); // Data de hoje no formato PT-BR

            pedidosArray.forEach(pedido => {
                if (pedido.Finalizado) return; // Ignora pedidos finalizados

                const pagamentoDateISO = formatDateToISO(pedido.DataPagamento);
                const todayISO = formatDateToISO(todayStr);
                const parcelasPagas = pedido.ParcelasPagas;
                const parcelasTotais = pedido.ParcelasTotais;

                let rowClass = '';
                if (pagamentoDateISO < todayISO) {
                    rowClass = 'vencido';
                } else if (pagamentoDateISO === todayISO) {
                    rowClass = 'hoje';
                } else {
                    rowClass = 'futuro';
                }
                if (parcelasPagas == parcelasTotais) {
                    rowClass = 'finalizado';
                }

                const precoParcela = (pedido.Preco / pedido.ParcelasTotais).toFixed(2);

                const row = document.createElement("tr");
                row.className = rowClass;

                row.innerHTML = `
                    <td data-label="Data do Pedido">${pedido.DataPedido}</td>
                    <td data-label="Data do Pagamento">${pedido.DataPagamento}</td>
                    <td data-label="Preço">${pedido.Preco}</td>
                    <td data-label="Preço Parcela">${precoParcela}</td>
                    <td data-label="Cliente">${pedido.Cliente}</td>
                    <td data-label="Nome da Peça">${pedido.NomePeca}</td>
                    <td data-label="Entrega">${pedido.Entrega}</td>
                    <td data-label="Parcelas Pagas">${pedido.ParcelasPagas}</td>
                    <td data-label="Parcelas Totais">${pedido.ParcelasTotais}</td>
                    <td data-label="Botão Parcela"><button class="incrementarParcela" data-id="${pedido.id}">+1 Parcela</button></td>
                    <td data-label="Botão Entrega"><button class="marcarEntrega" data-id="${pedido.id}">Marcar Entrega</button></td>
                    <td data-label="Finalizar Pedido"><button class="finalizarPedido" data-id="${pedido.id}">Finalizar</button></td>
                `;

                pedidosTableBody.appendChild(row);
            });

            // Adiciona os eventos aos botões após inseri-los no DOM
            document.querySelectorAll(".incrementarParcela").forEach(button => {
                button.addEventListener("click", () => incrementarParcela(button.getAttribute("data-id")));
            });

            document.querySelectorAll(".marcarEntrega").forEach(button => {
                button.addEventListener("click", () => marcarEntrega(button.getAttribute("data-id")));
            });

            document.querySelectorAll(".finalizarPedido").forEach(button => {
                button.addEventListener("click", () => finalizarPedido(button.getAttribute("data-id")));
            });
        } else {
            Swal.fire({
                icon: 'info',
                title: 'Sem pedidos',
                text: 'Nenhum pedido encontrado.',
                confirmButtonColor: '#B93171'
            });
        }
    }).catch((error) => {
        Swal.fire({
            icon: 'error',
            title: 'Erro',
            text: 'Erro ao buscar pedidos: ' + error,
            confirmButtonColor: '#B93171'
        });
    });
}

function incrementarParcela(id) {
    const pedidoRef = ref(db, "Pedidos/" + id);
    get(pedidoRef).then((snapshot) => {
        if (snapshot.exists()) {
            const pedido = snapshot.val();
            const novasParcelasPagas = pedido.ParcelasPagas + 1;

            if (novasParcelasPagas > pedido.ParcelasTotais) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Parcelas pagas',
                    text: 'Todas as parcelas já foram pagas.',
                    confirmButtonColor: '#B93171'
                });
                return;
            }

            const novaDataPagamento = addOneMonthToDate(pedido.DataPagamento);

            update(pedidoRef, { 
                ParcelasPagas: novasParcelasPagas,
                DataPagamento: novaDataPagamento
            })
                .then(() => {
                    fetchPedidos(); // Atualiza a lista de pedidos
                })
                .catch((error) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Erro',
                        text: 'Erro ao atualizar parcelas: ' + error,
                        confirmButtonColor: '#B93171'
                    });
                });
        }
    }).catch((error) => {
        Swal.fire({
            icon: 'error',
            title: 'Erro',
            text: 'Erro ao buscar pedido: ' + error,
            confirmButtonColor: '#B93171'
        });
    });
}

function marcarEntrega(id) {
    const pedidoRef = ref(db, "Pedidos/" + id);
    
    get(pedidoRef).then((snapshot) => {
        if (snapshot.exists()) {
            const pedido = snapshot.val();
            if (pedido.Entrega !== 'Feita') {
                update(pedidoRef, { Entrega: 'Feita' })
                    .then(() => {
                        fetchPedidos(); // Atualiza a lista de pedidos
                    })
                    .catch((error) => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Erro',
                            text: 'Erro ao atualizar entrega: ' + error,
                            confirmButtonColor: '#B93171'
                        });
                    });
            } else {
                Swal.fire({
                    title: 'Confirmação',
                    text: "Pedido já entregue. Deseja marcar como não entregue?",
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonColor: '#B93171',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Sim',
                    cancelButtonText: 'Não'
                }).then((result) => {
                    if (result.isConfirmed) {
                        update(pedidoRef, { Entrega: 'Não Entregue' })
                            .then(() => {
                                fetchPedidos(); // Atualiza a lista de pedidos
                            })
                            .catch((error) => {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Erro',
                                    text: 'Erro ao atualizar entrega: ' + error,
                                    confirmButtonColor: '#B93171'
                                });
                            });
                    }
                });
            }
        }
    }).catch((error) => {
        Swal.fire({
            icon: 'error',
            title: 'Erro',
            text: 'Erro ao buscar pedido: ' + error,
            confirmButtonColor: '#B93171'
        });
    });
}

function finalizarPedido(id) {
    Swal.fire({
        title: 'Confirmação',
        text: "Deseja finalizar esse pedido?",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#B93171',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim',
        cancelButtonText: 'Não'
    }).then((result) => {
        if (result.isConfirmed) {
            const pedidoRef = ref(db, "Pedidos/" + id);
            update(pedidoRef, { Finalizado: true })
                .then(() => {
                    fetchPedidos(); // Atualiza a lista de pedidos
                })
                .catch((error) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Erro',
                        text: 'Erro ao finalizar pedido: ' + error,
                        confirmButtonColor: '#B93171'
                    });
                });
        }
    });
}

// Adiciona evento ao botão de envio do pedido
document.querySelector("#envPedido").addEventListener("click", insertPedido);

// Busca e exibe os pedidos ao carregar a página
document.addEventListener("DOMContentLoaded", fetchPedidos);

// Função para verificar o estado de autenticação
function checkAuthState() {
    onAuthStateChanged(auth, (user) => {
        const formContainer = document.getElementById('formContainer');
        const loginMessage = document.getElementById('loginMessage');
        if (user) {
            // Usuário está logado
            formContainer.style.display = 'block';
            loginMessage.style.display = 'none';
        } else {
            // Usuário não está logado
            formContainer.style.display = 'none';
            loginMessage.style.display = 'block';
        }
    });
}

// Chama a função para verificar o estado de autenticação ao carregar a página
window.addEventListener('DOMContentLoaded', (event) => {
    checkAuthState();
});

function gerarRelatorio() {
    Swal.fire({
        title: 'Relatório',
        text: "Deseja gerar o relatório?",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#4CAF50',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim',
        cancelButtonText: 'Não'
    }).then((result) => {
        if (result.isConfirmed) {
    const dbRef = ref(db);
    get(child(dbRef, "Pedidos")).then((snapshot) => {
        if (snapshot.exists()) {
            const pedidos = snapshot.val();
            const pedidosArray = Object.keys(pedidos).map(id => ({ id, ...pedidos[id] }));
            const pedidosFinalizados = pedidosArray.filter(pedido => pedido.Finalizado);
            pedidosFinalizados.sort((a, b) => parseDatePTBR(a.DataPedido) - parseDatePTBR(b.DataPedido));

            if (pedidosFinalizados.length === 0) {
                Swal.fire({
                    icon: 'info',
                    title: 'Sem pedidos finalizados',
                    text: 'Nenhum pedido finalizado encontrado.',
                    confirmButtonColor: '#B93171'
                });
                return;
            }

            const { jsPDF } = window.jspdf; // Use o namespace para obter jsPDF
            const doc = new jsPDF();
            let y = 10;
            let totalPreco = 0;

            doc.setFontSize(12);
            doc.text("Relatório de Pedidos Finalizados", 10, y);
            y += 10;

            pedidosFinalizados.forEach(pedido => {
                doc.text(`Data do Pedido: ${pedido.DataPedido}`, 10, y);
                y += 5;
                doc.text(`Data do Pagamento: ${pedido.DataPagamento}`, 10, y);
                y += 5;
                doc.text(`Preço: ${pedido.Preco}`, 10, y);
                y += 5;
                doc.text(`Cliente: ${pedido.Cliente}`, 10, y);
                y += 5;
                doc.text(`Nome da Peça: ${pedido.NomePeca}`, 10, y);
                y += 5;
                doc.text(`Entrega: ${pedido.Entrega}`, 10, y);
                y += 5;
                doc.text(`Parcelas Pagas: ${pedido.ParcelasPagas}`, 10, y);
                y += 5;
                doc.text(`Total de Parcelas: ${pedido.ParcelasTotais}`, 10, y);
                y += 10;
                totalPreco += pedido.Preco;

                if (y > 270) { // Verifica se está perto do final da página
                    doc.addPage();
                    y = 10;
                }
            });

            doc.text(`Total Preço: ${totalPreco.toFixed(2)}`, 10, y);

            doc.save(`Relatorio_Pedidos_Finalizados_${formatDateToISO(new Date().toLocaleDateString('pt-BR'))}.pdf`);

            // Apagar os pedidos finalizados do banco de dados
            const updates = {};
            pedidosFinalizados.forEach(pedido => {
                updates[`/Pedidos/${pedido.id}`] = null;
            });

            update(ref(db), updates)
                .then(() => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Relatório Gerado',
                        text: 'Relatório gerado com sucesso!',
                        confirmButtonColor: '#B93171'
                    });
                    fetchPedidos(); // Atualiza a lista de pedidos
                })
                .catch((error) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Erro',
                        text: 'Erro ao apagar pedidos finalizados: ' + error,
                        confirmButtonColor: '#B93171'
                    });
                });
        } else {
            Swal.fire({
                icon: 'info',
                title: 'Sem pedidos',
                text: 'Nenhum pedido encontrado.',
                confirmButtonColor: '#B93171'
            });
        }
    }).catch((error) => {
        Swal.fire({
            icon: 'error',
            title: 'Erro',
            text: 'Erro ao buscar pedidos: ' + error,
            confirmButtonColor: '#B93171'
        });
    });
        }});
}


// Adiciona evento ao botão de gerar relatório
document.querySelector("#gerarRelatorio").addEventListener("click", gerarRelatorio);