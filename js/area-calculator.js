// Triangle Area Calculate:
document.getElementById('triangle-btn').addEventListener('click', function () {
    const triangleBase = getInputFieldValueById('triangle-base')
    const triangleHeight = getInputFieldValueById('triangle-height')
    const triangleArea = getTextElementValueById('triangle-area')
    const calculateTriangleArea = 0.5 * triangleBase * triangleHeight
    setTextElementValueById('triangle-area', calculateTriangleArea)
})

// Rectangle Area Calculate:
document.getElementById('rectangle-btn').addEventListener('click', function () {
    const rectangleWidth = getInputFieldValueById('rectangle-width')
    const rectangleLength = getInputFieldValueById('rectangle-length')
    const rectangleArea = getTextElementValueById('rectangle-area')

    const calculateRectangleArea = rectangleWidth * rectangleLength
    setTextElementValueById('rectangle-area', calculateRectangleArea)
})
