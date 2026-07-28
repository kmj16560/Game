document.addEventListener("DOMContentLoaded", () => {
    // DOM 요소 선택 (HTML의 id와 일치하도록 수정)
    const enterBtn = document.getElementById("openGameModal"); // 수정 완료
    const gameModal = document.getElementById("gameModal");
    const closeModal = document.getElementById("closeGameModal"); // 수정 완료
    
    // 게임 선택 버튼들
    const selectFpsGame = document.getElementById("selectFpsGame");
    const selectRpgGame = document.getElementById("selectRpgGame");

    // 1. 메인 진입 버튼 클릭 시 게임 선택 모달 열기
    if (enterBtn && gameModal) {
        enterBtn.addEventListener("click", () => {
            gameModal.style.display = "flex";
        });
    }

    // 2. 모달 닫기 버튼 클릭 시 닫기
    if (closeModal && gameModal) {
        closeModal.addEventListener("click", () => {
            gameModal.style.display = "none";
        });
    }

    // 3. 모달 외부 영역 클릭 시 닫기
    window.addEventListener("click", (e) => {
        if (e.target === gameModal) {
            gameModal.style.display = "none";
        }
    });

    // 4. Glitch:Off 선택 시
    if (selectFpsGame) {
        selectFpsGame.addEventListener("click", () => {
            window.location.href = "pages/glitch-off.html#fps-section";
        });
    }

    // 5. 비엔토 선택 시
    if (selectRpgGame) {
        selectRpgGame.addEventListener("click", () => {
            window.location.href = "pages/game.html#rpg-section";
        });
    }
});