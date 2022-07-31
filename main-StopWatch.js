$(document).ready(function(){
  
  //スタートボタン押下時の出力
  $("#start").click(function(){
    //0 : 0 : 0 : 0からスタートする

    timer = setInterval("countUp()",100);
    //"start"にdisabledを付与する
    $("#start").prop("disabled",true);
    //"stop","reset"のdisabledを除外する
    $("#stop ,#reset").prop("disabled",false);
    
  });
  
  //ストップボタン押下時の出力
  $("#stop").click(function(){
    //一時停止
    clearInterval(timer);
    //各要素にdisabledを付与、除外する
    $(this).prop("disabled",true);
    $("#start,#reset").prop("disabled",false);
    
  });
  
  //リセットボタン押下時の出力
  $("#reset").click(function(){
    
    msec = 0;
    sec  = 0;
    min = 0;
    hour  = 0;
    
    //0 : 0 : 0 : 0にリセットする
    $("#stop-watch").html("0 : 0 : 0 : 0");
    clearInterval(timer);
    
    $(this).prop("disabled",true);
    $("#stop").prop("disabled",true);
    $("#start").prop("disabled",false);
    
  });
});

msec = 0;
sec  = 0;
min = 0;
hour  = 0;

function countUp(){
  //ミリ秒を始める
  msec += 1;
  
  //msecが9以上になったら、secが+１なるようにする
  if(msec > 9){
    msec = 0;
    sec += 1;
  }
  
  //secが59以上になったら、minが+1になるようにする
  if(sec > 59){
    sec   = 0;
    min += 1;
  }
  
  //minが59以上になったら、hourが+1になるようにする
  if(min > 59){
    min  = 0;
    hour  += 1;
  }
  
  //各時間を代入
  msecNumber = msec;
  secNumber  = sec;
  minNumber = min;
  hourNumber  = hour;
  
  
  $("#stop-watch").html(hourNumber + " : " + minNumber + " : " + secNumber + " : " + msecNumber);
  
}

