// Slider
const slider = document.querySelector("#popamount");
const popamountValue = document.querySelector("#range-value");

slider.addEventListener("input", updateValue);

function updateValue() {
    console.log(updateValue);
    console.log(slider.value);

    popamountValue.textContent =slider.value;

    if(slider.value > 0 && slider.value <5650000){
        console.log (`mængden af popcornskerner er ${slider.value}`);
    }
}


// Summery kode
document.querySelector("#sum").style.display = "none";
document.querySelector("#webform").reset();

document.querySelector("#submit_btn").addEventListener("click", submitForm);
document.querySelector("#reset_btn").addEventListener("click", reset);

function submitForm() {
    document.querySelector("#sum").style.display = "block";

    document.querySelector("#sumName").textContent = document.querySelector("#fullname").value;
    document.querySelector("#sumAge").textContent = document.querySelector("#age").value;
    document.querySelector("#sumTraining").textContent = document.querySelector("#training-select").value;
    document.querySelector("#sumNumber").textContent = document.querySelector("#phone").value;
    document.querySelector("#sumMail").textContent = document.querySelector("#mail").value;
    document.querySelector("#sumPlace").textContent = document.querySelector("#place").value;
    document.querySelector("#sumAdress").textContent = document.querySelector("#adress").value;
    document.querySelector("#sumCity").textContent = document.querySelector("#city").value;
    document.querySelector("#sumZip").textContent = document.querySelector("#zip").value;
    document.querySelector("#sumSituation").textContent = document.querySelector("#situation").value;
    document.querySelector("#sumPeople").textContent = document.querySelector("#people").value;
    document.querySelector("#sumAmount").textContent = document.querySelector("#amount").value;
    document.querySelector("#sumPopamount").textContent = document.querySelector("#popamount").value;
    document.querySelector("#sumSource").textContent = document.querySelector("#popsource").value;

    const checkboxes = document.querySelectorAll('input[name="poptype"]:checked');
    console.log(checkboxes);

    const myArray = [];
    console.log(myArray);

    checkboxes.forEach(lavListe);

    function lavListe(element) {
        myArray.push(element.value);
    }
    console.log(myArray);
    document.querySelector("#sumType").textContent = myArray.join(", ");

}
function reset() {
    document.querySelector("#webform").reset();
    document.querySelector("#sum").style.display = "none";
    updateValue();
}