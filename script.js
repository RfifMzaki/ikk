const elements = [
    { symbol: "H", name: "Hidrogen", detail: "Hidrogen membentuk ikatan kovalen koordinasi dalam senyawa seperti H₂S." },
    { symbol: "C", name: "Karbon", detail: "Karbon membentuk ikatan kovalen koordinasi dalam senyawa seperti CH₄." },
    { symbol: "N", name: "Nitrogen", detail: "Nitrogen membentuk ikatan kovalen koordinasi dalam senyawa seperti NH₄Cl." },
    { symbol: "O", name: "Oksigen", detail: "Oksigen membentuk ikatan kovalen koordinasi dalam senyawa seperti CO₂." },
    { symbol: "F", name: "Fluor", detail: "Fluor membentuk ikatan kovalen koordinasi dalam senyawa seperti SF₆." },
    { symbol: "P", name: "Fosfor", detail: "Fosfor membentuk ikatan kovalen koordinasi dalam senyawa seperti PF₃." },
    { symbol: "S", name: "Belerang", detail: "Belerang membentuk ikatan kovalen koordinasi dalam senyawa seperti SO₂." },
    { symbol: "Cl", name: "Klorin", detail: "Klorin membentuk ikatan kovalen koordinasi dalam senyawa seperti Cl₂O₃." },
    { symbol: "He", name: "Helium", detail: "Helium membentuk ikatan kovalen koordinasi dalam senyawa seperti HeNe." },
    { symbol: "Ne", name: "Neon", detail: "Neon membentuk ikatan kovalen koordinasi dalam senyawa seperti Ne₂." },
    { symbol: "Ar", name: "Argon", detail: "Argon membentuk ikatan kovalen koordinasi dalam senyawa seperti ArF₄." },
    { symbol: "Kr", name: "Kripton", detail: "Kripton membentuk ikatan kovalen koordinasi dalam senyawa seperti KrF₂." },
    { symbol: "Xe", name: "Xenon", detail: "Xenon membentuk ikatan kovalen koordinasi dalam senyawa seperti XeF₂." },
    { symbol: "Rn", name: "Radon", detail: "Radon membentuk ikatan kovalen koordinasi dalam senyawa seperti RnF₂." },
    { symbol: "Ra", name: "Radon", detail: "Radon membentuk ikatan kovalen koordinasi dalam senyawa seperti RaF₂." },
    { symbol: "Po", name: "Polonium", detail: "Polonium membentuk ikatan kovalen koordinasi dalam senyawa seperti PoCl₄." },
    { symbol: "At", name: "Astatin", detail: "Astatin membentuk ikatan kovalen koordinasi dalam senyawa seperti AtF₅." },
    { symbol: "I", name: "Iodium", detail: "Iodium membentuk ikatan kovalen koordinasi dalam senyawa seperti ICl₃." },
    { symbol: "Br", name: "Bromin", detail: "Bromin membentuk ikatan kovalen koordinasi dalam senyawa seperti BrF₅." },
    { symbol: "Te", name: "Telurium", detail: "Telurium membentuk ikatan kovalen koordinasi dalam senyawa seperti TeF₆." },
    { symbol: "At", name: "Astatin", detail: "Astatin membentuk ikatan kovalen koordinasi dalam senyawa seperti AtI₃." },
    { symbol: "Se", name: "Selenium", detail: "Selenium membentuk ikatan kovalen koordinasi dalam senyawa seperti SeF₄." },
    { symbol: "Po", name: "Polonium", detail: "Polonium membentuk ikatan kovalen koordinasi dalam senyawa seperti PoF₄." },
    { symbol: "Tl", name: "Thallium", detail: "Thallium membentuk ikatan kovalen koordinasi dalam senyawa seperti TlF₅." },
    { symbol: "Br", name: "Bromin", detail: "Bromin membentuk ikatan kovalen koordinasi dalam senyawa seperti BrF₅." }
    // Lanjutkan dengan menambahkan unsur non-logam lainnya sesuai kebutuhan
];

const elementsContainer = document.getElementById('elements-container');

elements.forEach(element => {
    const elementDiv = document.createElement('div');
    elementDiv.classList.add('element');
    elementDiv.innerHTML = `
        <p>${element.symbol} - ${element.name}</p>
    `;
    elementDiv.addEventListener('click', () => {
        showDetail(element);
    });
    elementsContainer.appendChild(elementDiv);
});

function showDetail(element) {
    const detailContainer = document.getElementById('detail-text');
    detailContainer.innerText = element.detail;
}