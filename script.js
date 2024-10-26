const square = document.getElementById('square');
const leftGrid = document.getElementById('left-grid');
const rightGrid = document.getElementById('right-grid');

// 定义不同类型正方形的像素尺寸
const squareSizes = {
    normalised: 88,       // 0.440mm
    quenched: 48,         // 0.240mm
    quenched_tempered: 80 // 0.400mm
};

// 初始化栅格线条
function createGridLines(gridElement) {
    for (let i = 0; i < 5; i++) {
        const line = document.createElement('div');
        line.className = 'grid-line';
        line.style.left = `${i * 30}px`; // 每条线间隔20px
        gridElement.appendChild(line);
    }
}

// 调用函数创建左右栅格的竖线
createGridLines(leftGrid);
createGridLines(rightGrid);

// 更新正方形大小
document.getElementById('square-size-select').addEventListener('change', (e) => {
    const selectedSize = e.target.value;
    const sizeInPx = squareSizes[selectedSize];
    square.style.width = `${sizeInPx}px`;
    square.style.height = `${sizeInPx}px`;
});

// 旋转角度控制
document.getElementById('rotation-slider').addEventListener('input', (e) => {
    const rotationAngle = e.target.value;
    square.style.transform = `translate(-50%, -50%) rotate(${rotationAngle}deg)`;
});

// 左侧栅格位置控制
document.getElementById('left-grid-slider').addEventListener('input', (e) => {
    const leftGridPosition = e.target.value;
    leftGrid.style.left = `${150 + parseInt(leftGridPosition)}px`; // 基于容器中心移动
});

// 右侧栅格位置控制
document.getElementById('right-grid-slider').addEventListener('input', (e) => {
    const rightGridPosition = e.target.value;
    rightGrid.style.left = `${150 + parseInt(rightGridPosition)}px`; // 基于容器中心移动
});

