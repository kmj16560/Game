/* ==========================================
   공통 하단(Footer) 생성 스크립트
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {
    const footerElement = document.getElementById("footer");
    if (!footerElement) return;

    footerElement.innerHTML = `
        <p>&copy; 2026 Janbyeol. All rights reserved. | 사이버와 판타지가 공존하는 세계</p>
    `;
});