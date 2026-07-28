/* ==========================================
   모바일 햄버거 메뉴 토글 기능
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {
    // 동적으로 생성된 요소들을 안전하게 잡기 위해 약간의 지연 혹은 이벤트 위임 활용
    setTimeout(() => {
        const menuToggle = document.getElementById("menuToggle");
        const navLinks = document.getElementById("navLinks");

        if (menuToggle && navLinks) {
            menuToggle.addEventListener("click", () => {
                navLinks.classList.toggle("active");
            });
        }
    }, 100);
});