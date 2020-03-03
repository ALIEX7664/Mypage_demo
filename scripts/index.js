
window.onload = function () {
    //内容区域淡入效果
    function translate() {
        var x = 0, y = 0;
        var contentrans = document.getElementById('pageContent');
        var showed = setInterval(show, 50);
        var times = document.getElementById('times');
        times.style.opacity = 0;    //控制时间淡入
        contentrans.style.opacity = 0;      //控制页面淡入

        function show() {
            if (contentrans.style.opacity <= 0.99) {    //提前加载页面内容
                x += 0.05;
                contentrans.style.opacity = x;
            } else if (times.style.opacity <= 0.99 && contentrans.style.opacity == 1.00) {  //时钟读取延迟，延缓加载时钟内容
                y += 0.03;
                times.style.opacity = y;
            } else {
                clearInterval(showed);      //清除定时器
            }
        }
    }
    translate();

    function show() {
        var time = Date();  //获得时钟信息
        time.toLocaleString();  //将时钟信息转为字符串
        time = time.substring(16, 24);  //截取时间部分
        times.innerText = time; //输出时间
    }

    setInterval(show, 1000);
    //渐变色
    var word = document.getElementById('word');
    var ctx1 = word.getContext('2d');
    ctx1.font = 'bolder 25px 雅黑';
    //创建渐变色变量，制作渐变色
    var gradient = ctx1.createLinearGradient(0, 0, 180, 0);
    gradient.addColorStop("0.0", "#5ee7df");
    gradient.addColorStop("0.2", "#b490ca");
    gradient.addColorStop("0.5", "#66a6ff");

    ctx1.fillStyle = gradient;  //将渐变色作为字体颜色
    ctx1.fillText('ALIEX', 20, 57, 100);
    ctx1.fontWeight = 'bolder';

    //进度条
    function circle() {
        var account = document.getElementById('accountImage');
        var circle = document.getElementById("circle");
        var ctx = circle.getContext("2d");
        var load = 0;  // 创建进度条
        var end = -90;  //结束时的角度
        //制作渐隐效果
        circle.style.position = 'absolute'
        account.style.transition = 'opacity 0.5s'
        circle.style.transition = 'opacity 0.5s';
        var timer = setInterval(function () {

            ctx.clearRect(0, 0, 500, 400);     //加载前清除画布
            ctx.beginPath();
            ctx.strokeStyle = "lightgray"; //底框的背景颜色
            ctx.lineWidth = 17; //底框的宽度
            ctx.arc(590, 350, 100, 0, 2 * Math.PI);
            ctx.stroke(); //绘制空心圆
            end += 3.6;// 修改结束的角度
            ctx.beginPath();    // 开始新的路径
            ctx.strokeStyle = "gray";
            ctx.lineWidth = 17;
            ctx.arc(590, 350, 100, -90 * Math.PI / 180, end * Math.PI / 180);     //从顶点位置开始
            ctx.stroke();
            load++;//加载值
            if (load == 100) {
                clearInterval(timer);//结束时进度条图片消失
                circle.style.opacity = 0;
                account.style.opacity = 0;
            }
        }, 20);
    }

    setTimeout(circle, 1000);//页面载入后动画延时
}

