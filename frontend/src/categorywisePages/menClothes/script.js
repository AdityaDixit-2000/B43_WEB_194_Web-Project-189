let menGrid = document.getElementById('menGrid');

(async function () {
    try {
        const url = 'https://b43-web-194-web-project-189.onrender.com/menClothes';
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
        img.src = `../../.${el.img_src}`;
        let div = document.createElement('div');
        div.appendChild(img);
    
        let name = document.createElement('p');
        name.textContent = el.name;

        let divP = document.createElement('div');
        divP.appendChild(div);
        divP.appendChild(name);
        menGrid.appendChild(divP);
    });
}