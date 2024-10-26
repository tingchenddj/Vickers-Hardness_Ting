const square = document.getElementById('square');
const leftGrid = document.getElementById('left-grid');
const rightGrid = document.getElementById('right-grid');

// 定义不同类型正方形的像素尺寸
const squareSizes = {
    normalised: 88,        // 0.440mm 增加一倍
    quenched: 48,          // 0.240mm 增加一倍
    quenched_tempered: 80  // 0.400mm 增加一倍
};

// 初始化栅格线条
function createGridLines(gridElement, isRightGrid = false) {
    for (let i = 0; i < 5; i++) {
        const line = document.createElement('div');
        line.className = 'grid-line';
        line.style.left = `${i * 40}px`; // 每条线间隔40px
        gridElement.appendChild(line);

        // 仅在右侧栅格的第1和第2条线之间添加短线和标注
        if (isRightGrid && i === 1) {
            createShortLinesAndLabels(gridElement, i * 40);
        }
    }
}

// 创建短线，并在右下方标注“0”，左下方标注“10”
function createShortLinesAndLabels(gridElement, startPosition) {
    for (let j = 1; j <= 9; j++) {
        const shortLine = document.createElement('div');
        shortLine.className = 'short-line';
        shortLine.style.left = `${startPosition + (j * 4)}px`; // 每个短线间隔4px
        gridElement.appendChild(shortLine);
    }

    // 创建“0”和“10”标注
    const label0 = document.createElement('div');
    label0.className = 'grid-label';
    label0.innerText = '0';
    label0.style.left = `${startPosition + 36}px`; // 放在短线右下方
    gridElement.appendChild(label0);

    const label10 = document.createElement('div');
    label10.className = 'grid-label';
    label10.innerText = '10';
    label10.style.left = `${startPosition}px`; // 放在短线左下方
    gridElement.appendChild(label10);
}

// 调用函数创建左右栅格的竖线
createGridLines(leftGrid);
createGridLines(rightGrid, true); // 右侧栅格带短线和标注

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
