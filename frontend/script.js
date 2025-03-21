let homeGrid = document.getElementById('homeGrid');
(async function () {
    try {
        const url = 'http://localhost:3000/homeGrid';
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        display(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
})();

function display(data) {
    data.forEach(el => {
        let img = document.createElement('img');
        img.src = el.img_src;
        let div = document.createElement('div');
        div.appendChild(img);
    
        let name = document.createElement('p');
        name.textContent = el.name;

        let divP = document.createElement('div');
        divP.appendChild(div);
        divP.appendChild(name);
        homeGrid.appendChild(divP);
    });
}


document.getElementById('mobiles').addEventListener('click', () => {
    window.location.href = "./src/categorywisePages/mobiles/index.html";
});
document.getElementById('menClothes').addEventListener('click', () => {
    window.location.href = "./src/categorywisePages/menClothes/index.html";
});
document.getElementById('womenClothes').addEventListener('click', () => {
    window.location.href = "./src/categorywisePages/womenClothes/index.html";
});
document.getElementById('footware').addEventListener('click', () => {
    window.location.href = "./src/categorywisePages/footwares/index.html";
});