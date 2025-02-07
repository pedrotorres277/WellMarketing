AOS.init();

function saveClient(name, email, phone, company) {
    const clients = JSON.parse(localStorage.getItem("clients")) || [];
    const newClient = { id: clients.length + 1, name, email, phone, company };
    clients.push(newClient);
    localStorage.setItem("clients", JSON.stringify(clients));
  }

  function logAllClients() {
    const clients = JSON.parse(localStorage.getItem("clients")) || [];
    console.log("Lista de Clientes:");
    console.table(clients);
  }

  document.getElementById("clientForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const company = document.getElementById("company").value;

    saveClient(name, email, phone, company);
    // add cliente ao array

    logAllClients();
    // exibir

    this.reset(); 
    // limpar formulario
  });


//   para limpar console ->
// console.clear