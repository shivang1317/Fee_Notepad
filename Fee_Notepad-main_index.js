const notepad = document.querySelector(".value")
const saveButton = document.querySelector(".save")
const clearButton = document.querySelector(".clear");

// Check if there is saved text in localStorage and display it
const savedText = localStorage.getItem('savedText');
if (savedText) {
    notepad.value = savedText;
}

// Event listener for the save button
saveButton.addEventListener('click', function () {
    const textToSave = notepad.value;
    localStorage.setItem('savedText', textToSave);
});

// Event listener for the clear button
clearButton.addEventListener('click', function () {
    notepad.value = ''; // hata dega text ko notepad se
    localStorage.removeItem('savedText'); // ye remove karega text ko local storage se
});