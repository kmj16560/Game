/* ==========================================
   공통 상단 네비게이션(Header) 생성 스크립트
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {
    const headerElement = document.getElementById("header");
    if (!headerElement) return;

    // 현재 페이지 경로에 따른 링크 상대 경로 조정 (메인 vs pages 하위)
    const isSubPage = window.location.pathname.includes('/pages/');
    const pathToRoot = isSubPage ? "../" : "./";

    headerElement.innerHTML = `
        <div class="logo-area">
            <a href="${pathToRoot}index.html">Two World, Two Story</a>
        </div>
        <nav>
            <ul class="nav-links" id="navLinks">
                <li><a href="${pathToRoot}index.html">홈</a></li>
                <li><a href="${pathToRoot}pages/game.html">게임 소개</a></li>
                <li><a href="${pathToRoot}pages/lore.html">세계관</a></li>
                <li><a href="${pathToRoot}pages/devlog.html">개발 일지</a></li>
                <li><a href="${pathToRoot}pages/community.html">커뮤니티</a></li>
            </ul>
        </nav>
        <button class="menu-toggle" id="menuToggle" aria-label="메뉴 열기">☰</button>
    `;
});