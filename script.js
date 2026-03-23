function searchItem() {
    let input = document.getElementById("search").value.toLowerCase();
    let items = document.getElementById("item-container").children;

    for (let i = 0; i < items.length; i++) {
        let text = items[i].innerText.toLowerCase();

        if (text.includes(input)) {
            items[i].style.display = "block";
        } else {
            items[i].style.display = "none";
        }
    }
}

function submitForm(){
    alert("Form Submitted Successfully")
}