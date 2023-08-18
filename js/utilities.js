// Get Input Field Value by Id 

function getInputFieldValueById(inputId) {
    const inputField = document.getElementById(inputId)
    const inputFieldValueString = inputField.value
    const inputFieldValue = parseFloat(inputFieldValueString)
    inputField.value = ''
    return inputFieldValue;
}

// Get Text Element Value by Id 

function getTextElementValueById(elementId) {
    const textElement = document.getElementById(elementId)
    const textElementValueString = textElement.innerText
    const textElementValue = parseFloat(textElementValueString)
    return textElementValue
}

// Set Text Element Value by Id 
function setTextElementValueById(elementId, newValue) {
    const element = document.getElementById(elementId)
    element.innerText = newValue
}