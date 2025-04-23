const openBtn = document.querySelector(".news_card .read-more");
const closeBtn = document.querySelector(".news_card dialog button");
const dialog = document.querySelector(".news_card dialog")

openBtn.addEventListener("click", openDialog);
closeBtn.addEventListener("click", closeDialog);

function openDialog (){
    dialog.showModal();
}

function closeDialog (){
    dialog.close();
}