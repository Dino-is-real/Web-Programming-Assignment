document.getElementById("main-heading").textContent = "Updated Page Title";

document.getElementsByName("user-name")[0].value = "John Doe";

const genderOptions = document.getElementsByName("user-gender");
genderOptions.forEach(option => {
    if (option.checked) {
        console.log("Chosen gender:", option.value);
    }
});

const paraElements = document.getElementsByTagName("p");
console.log("Total paragraphs:", paraElements.length);

const carBrands = document.getElementsByTagName("li");
for (let brand of carBrands) {
    console.log("Car Brand:", brand.textContent);
}

const inputBoxes = document.getElementsByClassName("input-box");
Array.from(inputBoxes).forEach(input => input.style.backgroundColor = "lightcyan");

document.querySelector(".description").textContent = "Updated information text";

document.querySelector("input[name='user-gender']").checked = true;

const infoSections = document.querySelectorAll(".description");
infoSections.forEach(section => console.log("Section content:", section.textContent));

const interests = document.querySelectorAll(".interest");
interests.forEach(hobby => {
    hobby.checked = true;
    console.log("Selected Hobby:", hobby.value);
});
