window.onload = function () {
    let box = document.querySelector('.box');
    box.onmousedown = function (e) {
        let boxleft = e.pageX - box.offsetLeft;//返回相对于文档左边缘的鼠标位置;返回当前元素的相对水平偏移位置的偏移容器
        let boxright = e.pageY - box.offsetTop;
        document.onmousemove = function (e) {
            box.style.left = e.pageX - boxleft + 'px';
            box.style.top = e.pageY - boxright + 'px';
    }
    //释放鼠标
    box.onmouseup = function () {
        document.onmousemove = document.onmouseup = null;
    }
}
}