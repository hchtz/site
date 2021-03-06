var version = navigator.userAgent;

function preloadimages(arr) {
    var newimages = [];
    var arr = (typeof arr != "object") ? [arr] : arr;  //确保参数总是数组
    for (var i = 0; i < arr.length; i++) {
        newimages[i] = new Image();
        newimages[i].src = arr[i];
    }
}

//preloadimages(['assets/images/20130503010101.jpg', 'assets/images/background.jpg', 'assets/images/background2.jpg', 'assets/images/bg.gif', 'assets/images/im.png', 'assets/images/index_01.jpg', 'assets/images/index_02.jpg', 'assets/images/index_03.jpg', 'assets/images/index_04.jpg', 'assets/images/leftimg.png', 'assets/images/li84.png', 'assets/images/logo.gif', 'assets/images/logo.png', 'assets/images/logo2.png', 'assets/images/menu/menu2li_bj.png', 'assets/images/menu/meun2_bj.jpg', 'assets/images/menu/news/li84.png', 'assets/images/menubj.png', 'assets/images/pages/chwy/gsjj.jpg', 'assets/images/pages/fcjzy/ctzg.jpg', 'assets/images/pages/fcjzy/dzkjsc.jpg', 'assets/images/pages/fcjzy/fcj_fm.jpg', 'assets/images/pages/fcjzy/fcj_zm.jpg', 'assets/images/pages/fcjzy/lqjtj.jpg', 'assets/images/pages/fcjzy/yjhy.jpg', 'assets/images/pages/gsgk/hchmq.jpg', 'assets/images/pages/gsgk/logo.jpg', 'assets/images/pages/gsgk/mdgctext.jpg', 'assets/images/pages/gsxw/dzwm/paizi.jpg', 'assets/images/pages/gsxw/dzwm/paizi2.jpg', 'assets/images/pages/gsxw/dzwm/paobu.jpg', 'assets/images/pages/gsxw/dzwm/paobu2.jpg', 'assets/images/pages/gsxw/dzwm/renqun.jpg', 'assets/images/pages/gsxw/music.jpg', 'assets/images/pages/hbhg/topbar.png', 'assets/images/pages/mdgc/ditu.png', 'assets/images/pages/mdgc/mdgcpmbjt.jpg', 'assets/images/pages/ygfc/gere/caolian.jpg', 'assets/images/pages/ygfc/gere/gcwx.jpg', 'assets/images/pages/ygfc/gere/IMG_3813.jpg', 'assets/images/pages/ygfc/gere/IMG_3890.jpg', 'assets/images/pages/ygfc/gere/junzi.jpg', 'assets/images/pages/ygfc/gere/monitor.jpg', 'assets/images/pages/ygfc/heying/CSC_0775.jpg', 'assets/images/pages/ygfc/heying/DSC_0742.jpg', 'assets/images/pages/ygfc/heying/DSC_0744.jpg', 'assets/images/pages/ygfc/heying/DSC_0745.jpg', 'assets/images/pages/ygfc/heying/DSC_0748.jpg', 'assets/images/pages/ygfc/ymq/DSC_0663.jpg', 'assets/images/pages/ygfc/ymq/DSC_0664.jpg', 'assets/images/pages/ygfc/ymq/DSC_0667.jpg', 'assets/images/pages/ygfc/ymq/DSC_0668.jpg', 'assets/images/pages/ygfc/ymq/DSC_0669.jpg', 'assets/images/pages/ygfc/ymq/DSC_0670.jpg', 'assets/images/pages/ygfc/ymq/DSC_0671.jpg', 'assets/images/pages/ygfc/ymq/DSC_0672.jpg', 'assets/images/pages/ygfc/ymq/DSC_0673.jpg', 'assets/images/pages/ygfc/ymq/DSC_0674.jpg', 'assets/images/pages/ygfc/ymq/DSC_0676.jpg', 'assets/images/pages/ygfc/ymq/DSC_0677.jpg', 'assets/images/pages/ygfc/ymq/DSC_0680.jpg', 'assets/images/pages/ygfc/ymq/DSC_0681.jpg', 'assets/images/pages/ygfc/ymq/DSC_0683.jpg', 'assets/images/pages/ygfc/ymq/DSC_0684.jpg', 'assets/images/pages/ygfc/ymq/DSC_0685.jpg', 'assets/images/pages/ygfc/ymq/DSC_0686.jpg', 'assets/images/pages/ygfc/ymq/DSC_0687.jpg', 'assets/images/pages/ygfc/ymq/DSC_0688.jpg', 'assets/images/pages/ygfc/ymq/DSC_0689.jpg', 'assets/images/pages/ygfc/ymq/DSC_0690.jpg', 'assets/images/pages/ygfc/ymq/DSC_0691.jpg', 'assets/images/pages/ygfc/ymq/DSC_0692.jpg', 'assets/images/pages/ygfc/ymq/DSC_0693.jpg', 'assets/images/pages/ygfc/ymq/DSC_0695.jpg', 'assets/images/pages/ygfc/ymq/DSC_0696.jpg', 'assets/images/pages/ygfc/ymq/DSC_0697.jpg', 'assets/images/pages/ygfc/ymq/DSC_0698.jpg', 'assets/images/pages/ygfc/ymq/DSC_0702.jpg', 'assets/images/pages/ygfc/ymq/DSC_0706.jpg', 'assets/images/pages/ygfc/ymq/DSC_0707.jpg', 'assets/images/pages/ygfc/ymq/DSC_0716.jpg', 'assets/images/pages/ygfc/ymq/DSC_0717.jpg', 'assets/images/pages/ygfc/ymq/DSC_0718.jpg', 'assets/images/pages/ygfc/ymq/DSC_0719.jpg', 'assets/images/pages/ygfc/ymq/DSC_0720.jpg', 'assets/images/pages/ygfc/ymq/DSC_0722.jpg', 'assets/images/pages/ygfc/ymq/DSC_0731.jpg', 'assets/images/pages/ygfc/ymq/DSC_0734.jpg', 'assets/images/pages/ygfc/ymq/DSC_0735.jpg', 'assets/images/pages/ygfc/ymq/DSC_0737.jpg', 'assets/images/pages/ygfc/ymq/DSC_0738.jpg', 'assets/images/pages/ygfc/ymq/DSC_0739.jpg', 'assets/images/right_Cont_img.jpg', 'assets/images/shouye/project/fcjzy.jpg', 'assets/images/shouye/project/mdgc.jpg', 'assets/images/shouye/project/schbhg.jpg', 'assets/images/shouye/tu/1.jpg', 'assets/images/shouye/tu/10.jpg', 'assets/images/shouye/tu/11.jpg', 'assets/images/shouye/tu/12.jpg', 'assets/images/shouye/tu/13.jpg', 'assets/images/shouye/tu/14.jpg', 'assets/images/shouye/tu/15.jpg', 'assets/images/shouye/tu/16.jpg', 'assets/images/shouye/tu/17.jpg', 'assets/images/shouye/tu/18.jpg', 'assets/images/shouye/tu/19.jpg', 'assets/images/shouye/tu/2.jpg', 'assets/images/shouye/tu/3.jpg', 'assets/images/shouye/tu/4.jpg', 'assets/images/shouye/tu/5.jpg', 'assets/images/shouye/tu/6.jpg', 'assets/images/shouye/tu/7.jpg', 'assets/images/shouye/tu/8.jpg', 'assets/images/shouye/tu/9.jpg', 'assets/images/shouye/wb2wm.png', 'assets/images/shouye/wx2wm.jpg', 'assets/images/title.png', 'assets/images/topimg.png', 'assets/images/topimg2.png', 'assets/images/top_03.jpg']);

//function simplePreload() {
//    var args = simplePreload.arguments;
//    document.imageArray = new Array(args.length);
//    for (var i = 0; i < args.length; i++) {
//        document.imageArray[i] = new Image;
//        document.imageArray[i].src = args[i];
//    }
//}
//
//simplePreload('01.gif', '02.gif');

function writeCookie(name, value, hours) {
    var expire = "";
    if (hours != null) {
        expire = new Date((new Date()).getTime() + hours * 3600000);
        expire = "; expires=" + expire.toGMTString();
    }
    document.cookie = name + "=" + escape(value) + expire;
}

function readCookie(name) {
    var cookieValue = "";
    var search = name + "=";
    if (document.cookie.length > 0) {
        offset = document.cookie.indexOf(search);
        if (offset != -1) {
            offset += search.length;
            end = document.cookie.indexOf(";", offset);
            if (end == -1) end = document.cookie.length;
            cookieValue = unescape(document.cookie.substring(offset, end))
        }
    }
    return cookieValue;
}

/* template模板工具方法 */

function nano(template, data) {
    return template.replace(/\{([\w\.]*)\}/g, function (str, key) {
            var keys = key.split("."),
                v = data[keys.shift()];
            for (var i = 0, l = keys.length; i < l; i++)
                v = v[keys[i]];
            return (typeof v !== "undefined" && v !== null) ? v : "";
        }
    );
}

/*
 顶级菜单点击事件
 */
function goTemplateP(name) {
    var data = daohang_data;
    var html = 'error.html';
    for (var i = 0; i < data.length; i++) {
        var d = data[i];
        if (d.name == name) {
            html = d.html;
        }
    }
//    alert(html);
    if (html == '' || html == '#') {
//        window.location.reLoad();
        return false;
    } else if (html.indexOf('http://') != -1) {
//        window.location.href = html;
        window.open(html);
    } else {
        $("#mainDiv").load(html);
    }
}

/* 子菜单的点击事件：生成html根据模板 */
function goTemplate(name) {
    if (name.indexOf('http://') != -1) {
//        window.location.href = html;
        window.open(name);
        return;
    }

    var html = '#';
    var img = {};
    var shuju = {
        dh: []
    };
    //解析settings json配置对象
    var data = daohang_data;
    for (var i = 0; i < data.length; i++) {
        var d = data[i];
        var items = d.items;
        var dh = [];
        dh.push(
            {
                name: d.name,
                html: d.html
            }
        );
        for (var k = 0; k < items.length; k++) {
            var item = items[k];
            if (item.name == name) {
                dh.push(
                    {
                        name: item.name,
                        html: item.html
                    }
                );
                shuju.dh = dh;
                shuju.leftMenu = items;
                img = item.img;
                html = item.html;
            }
        }
    }
    //根据模板，生成html
    if (html == '' || html == '#') {
//        window.location.go(-1);
//        $("#contentDiv").attr('src', 'error.html');
        return;
    }
    else {
        var mainHtml = '<div id="mainDiv"><div class="Topimg"> <img src="{topimg}"> </div>';
        mainHtml += '<div class="mainbj">';
        mainHtml += '  <div class="mian round1">';
        mainHtml += '    <div class="mian2">';
        mainHtml += '      <!--导航-->';
        mainHtml += '      <div class="Topurl">';
        mainHtml += '        <h3> <img src="{titleimg}"></h3>';
        mainHtml += '        <ul>';
        mainHtml += '          <span> ';
        for (var i = 0; i < shuju.dh.length; i++) {
            var item = shuju.dh[i];
            mainHtml += '<a href="#" onclick="goTemplate(\'' + item.name + '\');">' + item.name + '</a>';
            if (i < (shuju.dh.length)) {
                mainHtml += '&gt;&nbsp;&nbsp;&nbsp;'
            }
        }
        mainHtml += '</span>';
        mainHtml += '        </ul>';
        mainHtml += '      </div>';
        mainHtml += '      <div class="C_min" id="C_min">';
        mainHtml += '        <div class="CM_left" id="CM_left">';
        mainHtml += '          <div class="CM_Topimg"> <img src="{leftimg}"></div>';
        mainHtml += '          <div class="CM_meun">';
        mainHtml += '            <ul>';
        if (shuju.leftMenu) {
            for (var i = 0; i < shuju.leftMenu.length; i++) {
                var item = shuju.leftMenu[i];
                mainHtml += '              <li style="cursor: pointer;text-align: center;font-size:15px;font-weight:bold;" class="leftMenuHover ';
                if (item.name == name) {
                    mainHtml += 'hover2';
                }
                mainHtml += '" onclick="goTemplate(\'' + item.name + '\');">' + item.name + '</li>';
            }
        }
        mainHtml += '            </ul>';
        mainHtml += '          </div>';
        mainHtml += '        </div>';
        mainHtml += '       ';
        mainHtml += '        <div class="CM_right" id="CM_right">';
        mainHtml += '          <div class="CMr_topimg"> <img style="width: 373px;height: 67;" src="{rightimg}"></div>';
        mainHtml += '          <div class="CMmain">';
        mainHtml += '            　<iframe src="" scrolling="no" frameborder="0" id="contentDiv" width="100%" height="300"></iframe>';
        mainHtml += '            <div class="CM_Cont" id="contentDiv2">';
        mainHtml += '					<!-- ';
        mainHtml += '					content：jquery  加载html后，直接append到这里。。。';
        mainHtml += '					-->';
        mainHtml += '            </div>';
        mainHtml += '          </div>';
        mainHtml += '        </div>';
        mainHtml += '        <div class="clear1"></div>';
        mainHtml += '      </div>';
        mainHtml += '    </div></div>';
        //根据模板生成页面
        var tempHtml = nano(mainHtml, img);
        //替换掉页面内容，ok
        $("#mainDiv").replaceWith(tempHtml);
        $("#contentDiv").load(function () {
            with ($(this).get(0).contentWindow) {
                var height = $(document.body).outerHeight() + 100;
                $("#contentDiv", top.window.document).attr("height", height < 900 ? 900 : height);
            }
        });

        $("#contentDiv").attr('src', html);
    }
}

/*
 下面是:页面导航事件
 */
var nowMenu;
function showChild(n) {
    nowMenu = $(n).parent().addClass("hover");
    $("#childMenu").hide();
    var child = $("#" + $(n).parent().attr("id") + "_1");
    if (child.get(0)) {
        $("#childMenu").slideDown(50).find("ul").hide();
        child.show();
    }
}
function hideChild(n) {
    $(n).parent().removeClass("hover");
}
function showChildDiv(n) {
    nowMenu.addClass("hover");
}
function hideChildDiv(n) {
    $(n).slideUp(100);
    nowMenu.removeClass("hover");
}
function overThis(n) {
    $(n).find("span").css("color", "red");
}
function outThis(n) {
    $(n).find("span").css("color", "");
}
/*页面导航模板生成*/
$(function () {
        if (daohang_data) {
            var menu_parent = '',
                item_parent = '';
            var menu_parent_template = '<li id="{id}"><span style="display: block;height: 47px;line-height: 47px;font-size:14px;" ';
            menu_parent_template += 'onmouseover="showChild(this);" onmouseleave="hideChild(this);" onclick="goTemplateP(\'{name}\');">{name}</span></li>';
            var item_parent_template = '<li style="display: block;"><span style="display: block;height: 47px;line-height: 47px;" ';
            item_parent_template += 'onmouseover="overThis(this);" onmouseleave="outThis(this);" onclick="goTemplate(\'{name}\');"><span style="height:45px;line-height:45px;overflow:hidden;font-size:14px; font-weight:bold;">{name}</span></span></li>';
            for (var i = 0; i < daohang_data.length; i++) {
                var dd = daohang_data[i];
                if (dd.name == '首页') {
                    menu_parent += '<li id="{id}"><a style="color:#947458" href="' + dd.html + '">' + dd.name + '</a></li>';
                }
                else if (!dd.hidden) {
                    menu_parent += nano(menu_parent_template, dd);
                }
                var len = dd.items.length;
                for (var k = 0; k < len; k++) {
                    if (k == 0) {
                        item_parent += '<ul id="' + dd.id + '_1">';
                    }
                    var d = dd.items[k];
                    item_parent += nano(item_parent_template, d);
                    if (k == len - 1) {
                        item_parent += '</ul>';
                    }
                }
            }
            var html = '<div class="top mian"><div class="t_left"><a href="index.html"><img id="logoImg" src="assets/logo.png"></a></div><div class="t_right"><div class="tr_top"></div><div class="tr_bottom"></div></div></div><div class="menubj"><div class="menu mian"  style="font-size:18px; font-style:normal; font-weight:bold; " ><ul>';
            html += menu_parent;
            html += '</ul></div><div  id="childMenu" onmouseover="showChildDiv(this);" onmouseleave="hideChildDiv(this);"  style="display: none;" class="menubj2"><div class="menub2 mian">';
            html += item_parent;
            html += '</div></div>';
            $('#div_top').html(html);
        }
    }
);

/*
 首页图片轮播效果
 */
$(function () {
        var firstIndex = 0;
        var data = shouye_data.flash;
        var imgDiv = $("#flashImg");
        var imgDD = $("#flashDD");
        imgDiv.attr(
            {
                "src": data[firstIndex].img,
                "title": data[firstIndex].name
            }
        );
        var html = '';
        ddLen = data.length;
        for (var i = 0; i < ddLen; i++) {
            var d = data[i];
            var name = d.name;
            var img = d.img;
            html += '<dd  style="background:';
            if (firstIndex == i) {
                html += 'red';
            }
            else {
                html += 'grey';
            }
            html += '" onclick="showFlashImg(this,\'' + name + '\',\'' + img + '\',\'' + i + '\');"></dd>';
        }
        imgDD.append(html);
        ddSeti = setInterval(function () {
            ddJishu++;
            var flashDD = $("#flashDD");
            if (flashDD.size()) {
                flashDD.find("dd").get(ddJishu).click();
                if (ddJishu == (ddLen - 1)) {
                    ddJishu = -1;
                }
            }
        }, ddTime);
    }
);

var ddJishu = 0;
var ddLen;
var ddTime = 6000;
var ddSeti;

function showFlashImg(n, name, img, i) {
    var imgDiv = $("#flashImg").hide();
    imgDiv.attr(
        {
            "src": img,
            "title": name
        }
    );
    imgDiv.show();
    $(n).siblings().css("background", "grey").end().css("background", "red");
    clearInterval(ddSeti);
    ddJishu = i;

    ddSeti = setInterval(function () {
        ddJishu++;
        var flashDD = $("#flashDD");
        if (flashDD) {
            var c = flashDD.find("dd").get(ddJishu);
            if (c)c.click();
        }
        if (ddJishu == (ddLen - 1)) {
            ddJishu = -1;
        }
        ;
    }, ddTime);
}

/*
 其他模板生成
 */
$(function () {
    //倒数第二行
    var html = '';
    html += '<div class="imt_left">';
    html += '<div class="title">';
    html += '<h3 class="no"> <a href="javascript:goTemplate(\'{imTop.left.gotoo}\');"> <img src="assets/images/im.png"/> {imTop.left.name}</a></h3>';
    html += '</div>';
    html += '<ul>';
    html += '<li class="img "><a class="" href="javascript:goTemplate(\'{imTop.left.gotoo}\');"><img class="img_effect" src="{imTop.left.img}"></a></li>';
    html += '</ul>';
    html += '</div>';
    html += '<div class="imt_in">';
    html += '<div class="title">';
    html += '<h3 class="no"> <a href="javascript:goTemplate(\'{imTop.center.gotoo}\');"> <img src="assets/images/im.png"/> {imTop.center.name}</a></h3>';
    html += '</div>';
    html += '<ul>';
    html += '<li class="img "><a class="" href="javascript:goTemplate(\'{imTop.center.gotoo}\');"><img  class="img_effect" src="{imTop.center.img}"></a></li>';
    html += '</ul>';
    html += '</div>';
    html += '<div class="imt_right">';
    html += '<div class="title">';
    html += '<h3 class="no"> <a href="javascript:goTemplate(\'{imTop.right.gotoo}\');"> <img src="assets/images/im.png"/> {imTop.right.name}</a></h3>';
    html += '</div>';
    html += '<ul>';
    html += '<li class="img "><a class="" href="javascript:goTemplate(\'{imTop.right.gotoo}\');"><img  class="img_effect" src="{imTop.right.img}"></a></li>';
    html += '</ul>';
    html += '</div>';
    var h = nano(html, shouye_data);
    $("#imDiv").append(h);
    //最后一行
    var html = '';
    html += '<div class="Ii_on"> <a href="javascript:goTemplate(\'{imBottom.one.gotoo}\');"> <img src="{imBottom.one.img}"></a></div>';
    html += '<div class="Ii_on"> <a href="javascript:goTemplate(\'{imBottom.two.gotoo}\');"> <img src="{imBottom.two.img}"></a></div>';
    html += '<div class="Ii_on"> <a href="javascript:goTemplate(\'{imBottom.three.gotoo}\');"> <img src="{imBottom.three.img}"></a></div>';
    html += '<div class="Ii_on"> <a href="javascript:goTemplate(\'{imBottom.four.gotoo}\');"> <img src="{imBottom.four.img}"></a></div>';
    var h = nano(html, shouye_data);
    $("#imbDiv").append(h);
    //浮动广告
    var html = '';
    html += '<!--漂浮广告 strat-->';
    html += '<style type="text/css">';
    html += '.duilian { position: fixed; /*border: 1px solid #336699; background-color: #EEEEE2;*/ z-index: 999999999; width: 163px; height: 192px; top:93px; }';
    html += '#LeftDiv { left: 50px; }';
    html += '#RightDiv { right: 5px; }';
    html += '.duilian_close { margin: 2px; padding: 10px 5px 2px 2px ; position: absolute; top: 0; right: 0; }';
    html += '.duilian_close a { color: #ff0000; text-decoration: none; font-weight:bold; font-size: 12px; }';
    html += '</style>';
    html += '<div id="LeftDiv" class="duilian">';
    html += '<div align="center"> <a href="javascript:goTemplate(\'{fdgg.gotoo}\');" download="{fdgg.download}" target="_blank"> <img src="{fdgg.img}" border="0"></a></div>';
    html += '</div>';
    html += '<!--漂浮广告 and-->';
    var h = nano(html, shouye_data);
    $("#mainDiv").append(h);
    //logo
    $("#logoImg").attr("src", shouye_data.logo);
    //footer
    var html = '';
    html += '<ul>';
    html += '<li class="foot_left"><a><span style="height:25px;line-height:25px;overflow:hidden;">' + shouye_data.footer.banquan + '</span></a><a>版权所有</a></li>';
    html += '<li class="foot_right">';
    var qita = shouye_data.footer.qita;
    for (var i = 0; i < qita.length; i++) {
        var q = qita[i];
        html += '<a href="javascript:goTemplate(\'' + q.gotoo + '\');">' + q.name + '</a><span>|</span>';
    }
    html += '</li>';
    html += '</ul>';
    $("#footerDiv").append(html);
});


$(function () {
    /**
     * 回到顶部按钮
     */
    var topBtn = $('#topBtn');
    $(document).scroll(function () {
        ($(this).scrollTop() >= document.documentElement.clientHeight) ? topBtn.fadeIn(1000) : topBtn.fadeOut(1000);
    });
    topBtn.click(function () {
        var doc = $(document);
        var timerInterval = setInterval(function () {
            var v = doc.scrollTop();
            doc.scrollTop(v + Math.floor(-v / 9));
            if (v <= 0)  clearInterval(timerInterval);
        }, 30);
    });
});
