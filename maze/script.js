document.addEventListener("DOMContentLoaded", function () {
    const mazeContainer = document.getElementById("maze");
    const player = document.createElement("div");
    player.className = "player";
    mazeContainer.appendChild(player);

    let currentLevel = 1;

    function generateMaze() {
        mazeContainer.innerHTML = "";
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const cell = document.createElement("div");
                cell.className = "cell";
                mazeContainer.appendChild(cell);
            }
        }
    }

    function addPlayer() {
        player.style.left = "0px";
        player.style.top = "0px";
        mazeContainer.appendChild(player);
    }

    function switchLevel() {
        currentLevel++;
        generateMaze();
        addPlayer();
    }

    function movePlayer(direction) {
        const playerLeft = parseInt(player.style.left) || 0;
        const playerTop = parseInt(player.style.top) || 0;

        switch (direction) {
            case "ArrowUp":
                if (playerTop > 0) {
                    player.style.top = playerTop - 40 + "px";
                }
                break;
            case "ArrowDown":
                if (playerTop < 360) {
                    player.style.top = playerTop + 40 + "px";
                }
                break;
            case "ArrowLeft":
                if (playerLeft > 0) {
                    player.style.left = playerLeft - 40 + "px";
                }
                break;
            case "ArrowRight":
                if (playerLeft < 360) {
                    player.style.left = playerLeft + 40 + "px";
                }
                break;
        }
    }

    document.addEventListener("keydown", function (e) {
        movePlayer(e.key);
    });

    // Panggil fungsi untuk membuat maze saat halaman dimuat
    generateMaze();
    addPlayer();
});
