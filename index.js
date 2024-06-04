const heroi = { nome: "SuperBit", nivel: 8200 };

const niveis = [
    { nivelMin: 0, nivelMax:1000, descricao: "Ferro" },
    { nivelMin: 1001, nivelMax:2000, descricao: "Bronze" },
    { nivelMin: 2001, nivelMax:5000, descricao: "Prata" },
    { nivelMin: 5001, nivelMax:7000, descricao: "Ouro" },
    { nivelMin: 7001, nivelMax:8000, descricao: "Platina" },
    { nivelMin: 8001, nivelMax:9000, descricao: "Ascendente" },
    { nivelMin: 9001, nivelMax:10000, descricao: "Imortal" },
    { nivelMin: 10001, nivelMax:10001, descricao: "Radiante" },
];

niveis.forEach(element => {
    if (heroi.nivel > element.nivelMin && heroi.nivel < element.nivelMax) {
        console.log("O Herói de nome " +  heroi.nome + ", está no nível de " + element.descricao  +".");
    }
});

