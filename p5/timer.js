function startTimer(){
    if(start){
        var timer = document.getElementById("my_timer").innerHTML;
        var arrTimer = timer.split(":");
        var hour = arrTimer[0];
        var min = arrTimer[1];
        var sec = arrTimer[2];
        if(sec === 59){
            if(min ===59){
                hour++;
                min =0;
                if(hour<10) hour = "0" + hour;
            }
            else{
                min++;
            }
            if(min < 10) min = "0" +min;
            sec =0;

        }
        else{
            sec++;
            if(sec < 10) sec = "0" + sec;
        }
        document.getElementById("my_timer").innerHTML = hour+":"+min+":"+sec;
        setTimeout(startTimer,1000);
    }
}
