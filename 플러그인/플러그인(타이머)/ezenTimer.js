/*
EzenTimer
최종수정일:24.07.30
*/
function EzenTimer(target="#timer",options={}){

    var obj = {
        tag1:'span',
        tag2:'b',
        sec1:':',
        sec2:':',
        sec3:':',
        sec4:'',
        pad:2
    };
    
    //객체 병합
    Object.assign(obj, options);


    let nowDate =  new Date();
    let now_y = nowDate.getFullYear();
    let now_m = nowDate.getMonth()+1;
    let now_d = nowDate.getDate();

    let timer = document.querySelector(target);
    let dDay_y = timer.dataset.year || now_y;
    let dDay_m = timer.dataset.month || now_m;
    let dDay_d = timer.dataset.date || now_d;
    let dDay_hh = timer.dataset.hour || 0;
    let dDay_mm = timer.dataset.minutes || 0;
    let dDay_ss = timer.dataset.second || 0;

    let dDay = new Date(dDay_y,dDay_m-1,dDay_d,dDay_hh,dDay_mm,dDay_ss);
    //남은 일수
    let remain = [
        {name:"date", data:"00", text:obj.sec1},
        {name:"hour", data:"00", text:obj.sec2},
        {name:"min", data:"00", text:obj.sec3},
        {name:"sec", data:"00", text:obj.sec4}
    ];


    remain.forEach(function(i){                
        var span;
        span = document.querySelector(`${target} .${i.name}`);
        if(!span){
            span = document.createElement(obj.tag1);
            span.classList.add(i.name);      
            timer.appendChild(span);        
            var txt = document.createElement(obj.tag2);
            txt.append(i.text);  
            timer.appendChild(txt);
        }  
    });   

    function updateTimer(){
        let newDate = new Date();
        let timerInfo = dDay.getTime() - newDate.getTime();

        remain[0].data = String(Math.floor(timerInfo/(1000*60*60*24))).padStart(obj.pad,'0');
        remain[1].data = String(Math.floor((timerInfo/(1000*60*60))%24)).padStart(obj.pad,'0');
        remain[2].data = String(Math.floor((timerInfo/(1000*60))%60)).padStart(obj.pad,'0');
        remain[3].data = String(Math.floor((timerInfo/1000)%60)).padStart(obj.pad,'0');
        
        remain.forEach(function(i){
            var tar = document.querySelector(`${target} .${i.name}`);
            tar.innerHTML = i.data;              
        });   
    }    
    setInterval(updateTimer,1000);
};