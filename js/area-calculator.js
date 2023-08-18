// Triangle Area Calculate:
document.getElementById('triangle-btn').addEventListener('click', function () {
    const triangleBase = getInputFieldValueById('triangle-base')
    const triangleHeight = getInputFieldValueById('triangle-height')
    const triangleArea = getTextElementValueById('triangle-area')
    const calculateTriangleArea = 0.5 * triangleBase * triangleHeight
    const fixedCalculateTriangleArea = calculateTriangleArea.toFixed(2)
    setTextElementValueById('triangle-area', fixedCalculateTriangleArea)
})

// Rectangle Area Calculate:
document.getElementById('rectangle-btn').addEventListener('click', function () {
    const rectangleWidth = getInputFieldValueById('rectangle-width')
    const rectangleLength = getInputFieldValueById('rectangle-length')
    const rectangleArea = getTextElementValueById('rectangle-area')
    const calculateRectangleArea = rectangleWidth * rectangleLength
    const fixedCalculateRectangleArea = calculateRectangleArea.toFixed(2)
    setTextElementValueById('rectangle-area', fixedCalculateRectangleArea)
})

// Parallelogram Area Calculate:
document.getElementById('parallelogram-btn').addEventListener('click', function () {
    const parallelogramBase = getInputFieldValueById('parallelogram-base')
    const parallelogramHeight = getInputFieldValueById('parallelogram-height')
    const calculateParallelogramArea = parallelogramBase * parallelogramHeight
    const fixedCalculateParallelogramArea = calculateParallelogramArea.toFixed(2)
    setTextElementValueById('parallelogram-area', fixedCalculateParallelogramArea)
})

// Ellipse Area Calculate: 
document.getElementById('ellipse-btn').addEventListener('click', function () {
    const axisA = getInputFieldValueById('a-axis')
    const axisB = getInputFieldValueById('b-axis')
    const calculateEllipseArea = 3.14 * axisA * axisB
    const fixedCalculateEllipseArea = calculateEllipseArea.toFixed(2)
    setTextElementValueById('ellipse-area', fixedCalculateEllipseArea)
})