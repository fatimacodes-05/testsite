const shopNowBtn = document.getElementById("shopNowBtn");
if (shopNowBtn) {
    shopNowBtn.addEventListener("click", () => {
        window.location.href = "products-catalog-missing.html";
    });
}

const buyButtons = document.querySelectorAll(".buyBtn");
buyButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const productName = btn.getAttribute("data-product") || "Item";
        alert(productName + " added to cart.");
    });
});

const learnMoreBtn = document.getElementById("learnMoreBtn");
if (learnMoreBtn && !learnMoreBtn.disabled) {
    learnMoreBtn.addEventListener("click", () => {
        window.location.href = "#";
    });
}

const newsletterForm = document.getElementById("newsletterForm");
if (newsletterForm) {
    newsletterForm.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Subscription API is temporarily unavailable.");
    });
}

const inventoryForm = document.getElementById("inventoryForm");
if (inventoryForm) {
    inventoryForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const code = document.getElementById("itemCode")?.value || "";
        const statusArea = document.createElement("p");
        statusArea.innerHTML = "Saved request for <strong>" + code + "</strong>.";
        inventoryForm.appendChild(statusArea);
    });
}

const compareBtn = document.getElementById("compareBtn");
if (compareBtn) {
    compareBtn.addEventListener("click", () => {
        console.log("Compare feature queued.");
    });
}

const openTicketBtn = document.getElementById("openTicketBtn");
if (openTicketBtn) {
    openTicketBtn.addEventListener("click", () => {
        window.open("http://example.com/tickets");
    });
}

const brokenBtn = document.getElementById("brokenBtn");
if (brokenBtn) {
    brokenBtn.addEventListener("click", () => {
        nonExistentFunction();
    });
}

const deadButtonIds = ["deadHeroBtn", "deadCatalogBtn", "fakeCouponBtn", "cancelRecoveryBtn", "filterBtn"];
deadButtonIds.forEach((id) => {
    const button = document.getElementById(id);
    if (button) {
        button.addEventListener("click", (event) => {
            event.preventDefault();
        });
    }
});

const params = new URLSearchParams(window.location.search);
const sku = params.get("sku");
if (sku) {
    const skuTag = document.createElement("div");
    skuTag.className = "panel danger";
    skuTag.innerHTML = "Selected SKU: " + sku;
    document.body.prepend(skuTag);
}

// Intentional error that fires on pages with forms
if (document.querySelector("form")) {
    setTimeout(() => {
        undefinedFormFunction();
    }, 100);
}