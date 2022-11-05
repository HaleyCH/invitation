window.addEventListener('scroll', (e) => {
  let scrolled = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
  if(scrolled>=.95){
    window.location.href="./index.html"
  }
  let $h1 = document.getElementsByTagName('h1')

  
  $curr = parseInt(scrolled/(1/$h1.length))
  // console.log(scrolled)
  for ($i=0;$i<$h1.length;++$i){
    if ($curr==0){continue}
    if ($i == $curr){
        $h1[$i].style.opacity=(scrolled-$curr/$h1.length)/(1/$h1.length)
        // console.log($h1[$i],"visited")
    }else{
        $h1[$i].style.opacity=0
    }
  } 
  if($curr<1){$h1[0].style.opacity=1}
  if(scrolled>.90){$h1[$h1.length-1].style.opacity=1}
  // if(scrolled>.9){
  //   $h1[$h1.length-1].style.textShadow="0px 10px"+ parseInt(((scrolled-$curr/$h1.length)/(1/$h1.length))**3*100) +"px #ff0000"
  // }
  // if ($curr==$h1.length-1){
  //   $h1[$h1.length-1].style.fontSize = 64+((scrolled-$curr/$h1.length)/(1/$h1.length))**3*700+"px"
  // }
})

function stopwheel() {
  var str = window.navigator.userAgent.toLowerCase();
  if (str.indexOf('firefox') !== -1) { //火狐浏览器
    document.querySelector("#big-box").addEventListener('DOMMouseScroll', function (e) {
      var e = e || window.event;
      //阻止窗口默认的滚动事件
      stopDefault(e);
    }, false);
  } else { //非火狐浏览器
    document.querySelector("#big-box").onmousewheel = function (ev) {
      var e = ev || window.event;
      stopDefault(e);
    };
  }
}


function autoScroll(){
  var height = document.body.clientHeight;
  var num=0;
  var length=document.body.scrollHeight;
  var height = 0;
  var freq=document.getElementsByTagName('h1').length;
  var timeTotal = 4500;
  var time = setInterval(function(){
    let scrolled = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
    num +=1
    if (scrolled>=.99){
      clearInterval(time)
    }else{
      console.log(height)
      height += length/timeTotal;
      document.documentElement.scrollTo(0,height);
    }
  },1)
}

window.onpageshow = function(event) {

  if (event.persisted) {
  
  window.location.reload();
  
  }
  
  };

window.onload = function(){
  // stopwheel();
  autoScroll();
}

