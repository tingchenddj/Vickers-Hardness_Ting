/* 基础样式 */
body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #f3f3f3;
}

h1 {
    color: #333;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.controls {
    display: flex;
    flex-direction: column;
    width: 200px;
    margin-bottom: 20px;
}

.measurement-area {
    position: relative;
    width: 300px;
    height: 300px;
    background-color: #eaeaea;
    border: 1px solid #333;
    overflow: hidden;
}

/* 正方形样式 */
#square {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 88px; /* 默认大小 normalised */
    height: 88px; /* 默认大小 normalised */
    background-color: rgba(0, 0, 0, 0.3);
    transform-origin: center;
    transform: translate(-50%, -50%);
}

/* 栅格样式 */
#left-grid, #right-grid {
    position: absolute;
    top: 0;
    height: 100%;
}

/* 左侧栅格线条样式 (黑色) */
#left-grid .grid-line {
    position: absolute;
    top: 0;
    width: 1px;
    height: 100%;
    background-color: black;
}

/* 右侧栅格线条样式 (蓝色) */
#right-grid .grid-line {
    position: absolute;
    top: 0;
    width: 1px;
    height: 100%;
    background-color: blue;
}

/* 右侧栅格的短线样式 */
.short-line {
    position: absolute;
    top: 0;
    width: 1px;
    height: 50%;  /* 短线高度 */
    background-color: blue;
}

/* 短线的标注样式 */
.grid-label {
    position: absolute;
    top: 10%;  /* 放置在短线下方 */
    font-size: 12px;
    color: blue;
    transform: translateY(5px); /* 微调位置 */
}
