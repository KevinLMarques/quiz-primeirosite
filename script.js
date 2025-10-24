document.getElementById("verificar").addEventListener("click", function(event){
    event.preventDefault();

    let pontuacao = 0;
    let total = 8;

    // Pergunta 1 - Radio
    const q1 = document.getElementById("q1");
    const p1 = document.querySelector('input[name="pergunta 1"]:checked');
    if(p1 && p1.value.toLowerCase() === "html") {
        pontuacao++;
        q1.classList.add("correta");
        q1.classList.remove("errada");
    } else {
        q1.classList.add("errada");
        q1.classList.remove("correta");
    }

    // Pergunta 2 - Texto
    const q2 = document.getElementById("q2");
    const p2 = document.getElementById("p2").value.trim().toLowerCase();
    const respostasP2 = ["domínio", "dominio"];
    if(respostasP2.includes(p2)) {
        pontuacao++;
        q2.classList.add("correta");
        q2.classList.remove("errada");
    } else {
        q2.classList.add("errada");
        q2.classList.remove("correta");
    }

    // Pergunta 3 - Senha
    const q3 = document.getElementById("q3");
    const p3 = document.getElementById("p3").value;
    if(p3.length >= 8) {
        pontuacao++;
        q3.classList.add("correta");
        q3.classList.remove("errada");
    } else {
        q3.classList.add("errada");
        q3.classList.remove("correta");
    }

    // Pergunta 4 - Data
    
    const q4 = document.getElementById("q4");
    const p4 = document.getElementById("4").value; // ex: "1991-06-15"

    if(!p4) {
        // nenhum campo preenchido
        q4.classList.add("errada");
        q4.classList.remove("correta");
        alert("Pergunta 4: Preencha todos os campos da data!");
    } else {
        const partesData = p4.split("-"); // ["1991", "06", "15"]
        if(partesData.length === 3 && partesData[0] === "1991") {
            pontuacao++;
            q4.classList.add("correta");
            q4.classList.remove("errada");
        } else {
            q4.classList.add("errada");
            q4.classList.remove("correta");
        }
    }
    // Pergunta 5 - Checkbox
    const q5 = document.getElementById("q5");
    const p5 = Array.from(document.querySelectorAll('input[name="pergunta5"]:checked')).map(i => i.value.toLowerCase());
    if(p5.includes("javascript") && p5.includes("java") && !p5.includes("html") && !p5.includes("css")) {
        pontuacao++;
        q5.classList.add("correta");
        q5.classList.remove("errada");
    } else {
        q5.classList.add("errada");
        q5.classList.remove("correta");
    }

    // Pergunta 6 - Upload
    const q6 = document.getElementById("q6");
    const p6 = document.getElementById("p6").files[0];
    if(p6 && p6.name.toLowerCase().endsWith(".html")) {
        pontuacao++;
        q6.classList.add("correta");
        q6.classList.remove("errada");
    } else {
        q6.classList.add("errada");
        q6.classList.remove("correta");
    }

    // Pergunta 7 - Select
    const q7 = document.getElementById("q7");
    const p7 = document.getElementById("p7").value.toLowerCase();
    if(p7 === "type") {
        pontuacao++;
        q7.classList.add("correta");
        q7.classList.remove("errada");
    } else {
        q7.classList.add("errada");
        q7.classList.remove("correta");
    }

    // Pergunta 8 - Texto
    const q8 = document.getElementById("q8");
    const p8 = document.getElementById("p8").value.trim().toLowerCase();
    if(p8 === "java") {
        pontuacao++;
        q8.classList.add("correta");
        q8.classList.remove("errada");
    } else {
        q8.classList.add("errada");
        q8.classList.remove("correta");
    }

    // Mostrar resultado
    const resultado = document.getElementById("resultado");
    resultado.textContent = `Sua pontuação: ${pontuacao} / ${total}`;
});
document.addEventListener("DOMContentLoaded", function() {
    const feedbackButton = document.querySelector("form fieldset button");

    feedbackButton.addEventListener("click", function(event) {
        event.preventDefault(); // evita o submit padrão

        const nome = document.getElementById("name").value.trim();
        const comentarios = document.getElementById("comentarios").value.trim();

        if (!nome || !comentarios) {
            alert("Preencha todos os campos do feedback!");
            return;
        }

        const destinatario = "SEU_EMAIL_AQUI"; // coloque seu email
        const assunto = encodeURIComponent("Feedback do Quiz");
        const corpo = encodeURIComponent(
            `Nome: ${nome}\nComentários:\n${comentarios}`
        );

        // abre o cliente de email do usuário
        window.location.href = `mailto:${destinatario}?subject=${assunto}&body=${corpo}`;
    });
});