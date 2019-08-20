window.onload = function () {
//     let box = document.querySelector('.box');
//     document.onmousedown = function (e) {
//         let boxleft = e.pageX - box.offsetLeft;//返回相对于文档左边缘的鼠标位置;返回当前元素的相对水平偏移位置的偏移容器
//         let boxright = e.pageY - box.offsetTop;
//         document.onmousemove = function (e) {
//             box.style.left = e.pageX - boxleft + 'px';
//             box.style.top = e.pageY - boxright + 'px';
//     }
//     //释放鼠标
//     document.onmouseup = function () {
//         document.onmousemove = box.onmouseup = null;
//     }
// }
    $(function () {
        let disX = 0;
        let disY = 0;
        $('.box').mousedown(function (ev) {
            disX = ev.pageX - $(this).offset().left
            disY = ev.pageY - $(this).offset().top
            $(document).mousemove(function (ev) {
                $('.box').css('left',ev.pageX - disX)
                $('.box').css('top',ev.pageY - disY)
            });
            $(document).mouseup(function () {
                $(document).off()
            });
            return false
        })
    })
}
