let homeGrid = document.getElementById('homeGrid');
(async function () {
    try {
        const url = '';
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
})();


document.getElementById('mobiles').addEventListener('click', () => {
    window.location.href = "./src/categories/mobiles/index.html";
});
document.getElementById('menClothes').addEventListener('click', () => {
    window.location.href = "./src/categories/menClothes/index.html";
});
document.getElementById('womenClothes').addEventListener('click', () => {
    window.location.href = "./src/categories/womenClothes/index.html";
});
document.getElementById('footware').addEventListener('click', () => {
    window.location.href = "./src/categories/footwares/index.html";
});