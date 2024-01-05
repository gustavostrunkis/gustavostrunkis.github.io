

const menu_barra_lateral = document.querySelector("#bx-menu-container");

menu_barra_lateral.addEventListener("click", () => {
    let barra_lateral = document.querySelector(".barra_lateral");

    if(barra_lateral.classList.contains("barra_lateral_2")){
        barra_lateral.classList.remove("barra_lateral_2");
    }
    else{
        barra_lateral.classList.add("barra_lateral_2");
    }
});


if(sessionStorage.getItem("button_id") == null || sessionStorage.getItem("button_id") == ""){
    ty_item_onClick("item_1");
}
else{
    ty_item_onClick(sessionStorage.getItem("button_id"));
}

function ty_item_onClick(button_id)
{
    sessionStorage.setItem("button_id", button_id);

    let e = document.querySelector(".iframe");

    let numberOfButtons = 6;

    let eButton = ["", "", "", "", "",""];

    for(let i1 = 1; i1 <= numberOfButtons; i1++)
    {
        eButton[i1 - 1] = document.getElementById("item_" + i1.toString());
        let icon = document.getElementById("icon_" + i1.toString());

        if("item_" + i1.toString() == button_id)
        {
            eButton[i1 - 1].style.setProperty("--s", 1);
            icon.style.color = "#1e77fc";
        }
        else
        {
            eButton[i1 - 1].style.setProperty("--s", 0);
            icon.style.color = "white";
        }
    }
    switch(button_id)
    {
        case "item_1":
            e.src = "./home/home.html"
            break;
        case "item_2":
            e.src = "./poliedros_platao/poliedros_platao_1.html";
            break;
        case "item_3":
            e.src = "./prismas/prismas.html";
            break;
        case "item_4":
            e.src = "./piramides/piramides_1.html";
            break;
        case "item_5":
            e.src = "./cilindros/cilindros_1.html";
            break;
        case "item_6":
            e.src = "./cones/cones_1.html";
    }
}