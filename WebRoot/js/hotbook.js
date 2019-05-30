/**
 * Created by walsh on 2017/12/18.
 */
var xmlHttp;
function S_xmlhttprequest() {
    if(window.XMLHttpRequest){
        xmlHttp=new XMLHttpRequest();
    }else if(window.ActiveXObject){
        try{
            xmlHttp=new ActiveXObject('Msxml2.XMLHTTP');
        }catch(e){
            try{
                xmlHttp=new ActiveXObject('Microsoft.XMLHTTP');
            }catch(e){
            }
        }
    }
}

function checkName(name) {
    if(name != ""){
        S_xmlhttprequest();
        xmlHttp.open("GET", "Register/checkName.php?name=" + name, true);
        xmlHttp.onreadystatechange = byname;
        xmlHttp.send(null);
    }
}

function checkAccount(acc) {
    if(acc!="") {
        S_xmlhttprequest();
        xmlHttp.open("GET", "Register/checkAccount.php?acc=" + acc, true);
        xmlHttp.onreadystatechange = byaccount;
        xmlHttp.send(null);
    }
}

function byaccount() {
    if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        var x = xmlHttp.responseText;
        if(x == 1){
            document.getElementById('account_hide').innerHTML = "*该账号已存在！*";
            document.getElementById('account_hide').style.color = "red";
        } else {
            document.getElementById('account_hide').innerHTML = "*该账号可用！*";
            document.getElementById('account_hide').style.color = "green";

        }
    }
}

function byname() {
    if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        var x = xmlHttp.responseText;
        if(x == 1){
            document.getElementById('username_hide').innerHTML = "*该用户名已存在！*";
            document.getElementById('username_hide').style.color = "red";
        } else {
            document.getElementById('username_hide').innerHTML = "*该用户名可用！*";
            document.getElementById('username_hide').style.color = "green";

        }
    }
}

function clearAll1() {
    document.getElementById('account_hide').innerHTML = "";
}

function clearAll2() {
    document.getElementById('username_hide').innerHTML = "";
}
function clearAll2() {
    document.getElementById('email_hide').innerHTML = "";
}

function password_check() {
    var x = document.getElementById('passwords').value;
    if(x == ""){
        document.getElementById('password_check').innerHTML = "*密码不能为空！*"
        document.getElementById('password_check').style.color = "red";
    } else {
        document.getElementById('password_check').innerHTML = "";
    }
}

function pass_confirm() {
    var x = document.getElementById('passwords').value;
    var y = document.getElementById('password_confirm').value;
    if(x != y) {
        document.getElementById('password_hide').innerHTML = "*密码不一致！*";
        document.getElementById('password_hide').style.color = "red";
    } else {
        document.getElementById('password_hide').innerHTML = "";
    }
}

function check_Email(email) {
    var reg =/^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;
    if(!reg.test(email)){
        document.getElementById('email_hide').innerHTML = "*邮箱格式错误！*";
        document.getElementById('email_hide').style.color = "red";
    } else {
        document.getElementById('email_hide').innerHTML = "";
    }
}
$(document).ready(function(){
    $('.menu').click(
        function(){  /* 鼠标进入时 */
            $('.menu ul').css('right','0px');
            //$('body').css('overflow-y','hidden'/);
        }
    );
    $(document).click(function(){
        $('.menu ul').css('right','-250px');
    });
    $(".menu").click(function(event){
        event.stopPropagation();
    });

    $('.foot .about').hover(function(){
        $('.foot .author').finish();
        $('.foot .author').slideDown();
    },function(){
        $('.foot .author').slideUp();
    });
    $('.foot .link').hover(function(){
        $('.foot .payme').finish();
        $('.foot .payme').slideDown();
    },function(){
        $('.foot .payme').slideUp();
    });
    $('.foot .join').hover(function(){
        $('.foot .joinus').finish();
        $('.foot .joinus').slideDown();
    },function(){
        $('.foot .joinus').slideUp();
    });
});


