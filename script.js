document.addEventListener("DOMContentLoaded", () => {
    const gameArea = document.getElementById("gameArea");

    // Função para criar um bloco
    function createBlock(x, y) {
        const block = document.createElement("div");
        block.className = "block";
        block.style.left = `${x}px`;
        block.style.top = `${y}px`;
        gameArea.appendChild(block);
    }

    // Criar uma matriz de blocos
    const gridSize = 10;
    const blockSize = 50;
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            createBlock(i * blockSize, j * blockSize);
        }
    }

    // Adicionar interatividade
    gameArea.addEventListener("click", (e) => {
        if (e.target.classList.contains("block")) {
            e.target.style.backgroundColor = e.target.style.backgroundColor === "green" ? "#8B4513" : "green";
        }
    });
});
