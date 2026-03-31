function buildMobilePanels() {
    const isMobile = window.innerWidth <= 800;

    const relatedBlock = document.getElementById("related-articles-block");
    const outlineBlock = document.getElementById("article-outline-block");
    const leftColumn = document.querySelector(".left-column");
    const innerLeft = document.querySelector(".inner-left");
    const mobileZone = document.getElementById("mobile-insert-zone");

    if (
        !relatedBlock ||
        !outlineBlock ||
        !leftColumn ||
        !innerLeft ||
        !mobileZone
    )
        return;

    // Si desktop : remettre les blocs à leur place d’origine
    if (!isMobile) {
        const relatedPanel = document.getElementById("mobile-related-panel");
        const outlinePanel = document.getElementById("mobile-outline-panel");

        if (relatedPanel) {
            leftColumn.appendChild(relatedBlock);
            relatedPanel.remove();
        }

        if (outlinePanel) {
            innerLeft.appendChild(outlineBlock);
            outlinePanel.remove();
        }

        return;
    }

    // Si mobile : ne rien refaire si déjà construit
    if (!document.getElementById("mobile-related-panel")) {
        const relatedPanel = document.createElement("details");
        relatedPanel.className = "mobile-panel";
        relatedPanel.id = "mobile-related-panel";
        relatedPanel.innerHTML = `
        <summary>Related Articles</summary>
        <div class="mobile-panel-content"></div>
      `;
        relatedPanel
            .querySelector(".mobile-panel-content")
            .appendChild(relatedBlock);
        mobileZone.appendChild(relatedPanel);
    }

    if (!document.getElementById("mobile-outline-panel")) {
        const outlinePanel = document.createElement("details");
        outlinePanel.className = "mobile-panel";
        outlinePanel.id = "mobile-outline-panel";
        outlinePanel.innerHTML = `
        <summary>Plan</summary>
        <div class="mobile-panel-content"></div>
      `;
        outlinePanel
            .querySelector(".mobile-panel-content")
            .appendChild(outlineBlock);
        mobileZone.appendChild(outlinePanel);
    }
}

window.addEventListener("load", buildMobilePanels);
window.addEventListener("resize", buildMobilePanels);
