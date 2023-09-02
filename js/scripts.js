const handleCatagory = async () => {
    const respons = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await respons.json();

    const tabContainer = document.getElementById('tab-container');

    const trimData = data.data;
    trimData.forEach((catagory) => {
        const div = document.createElement("div");
        div.innerHTML = `
        <a onclick="handleLoad(${catagory.category_id})" class="tab" onmouseover="this.style.color='red'" onmouseout="this.style.color='gray'">${catagory.category}</a>
        `
        tabContainer.appendChild(div);


    });

  
}

