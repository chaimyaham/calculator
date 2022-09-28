let heure=document.getElementById("heure");
let minute=document.getElementById("minute");
let seconde=document.getElementById("seconde");

let demarer=document.getElementById("demarer");
let tour=document.getElementById("tour");
let tourTable=document.getElementById("tourTable");


let sec=0;
let hour=0;
let min=0;
let timeout;

let count=0;

let estarreter=true;

let clicked=false;
let clickedTour=true;


const start=()=>{
    if(estarreter){
  
        estarreter=false;
        defilertemps();
    }
}
const defilertemps=()=>{
    if(estarreter)return;
    demarer.style.background="red";
    demarer.innerText="Pause";
    sec=parseInt(sec);
    min=parseInt(min)
    hour=parseInt(hour)
    sec++;
    if(sec==60){
        min++;
        sec=0
    }
    if(min==60){
        hour++;
        min=0;
    }
    if(sec<10){
        sec="0"+sec;
    }   
    if(min<10){
        min="0"+min;
    }
    
    if(hour<10){
        hour="0"+hour;
    }

    minute.innerText=min
    seconde.innerText=sec
    heure.innerText=hour
    
    timeout=setTimeout(defilertemps,1000);
}
const arreter=()=>{
    if(!estarreter){
        clearTimeout(timeout) 
        estarreter=true;
        
    }
}
 const numberTour=()=>{
    tourTable.style.display="block"
    count++;
    tour.style.background="yellow";
    var row= tourTable.insertRow(0);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    
    if(count<10){cell1.innerText="0"+count
   }else{
    cell1.innerText=count;
   }
  
    cell2.innerText=hour+":"+min+":"+sec;
 
}
const reset=()=>{
   document.location.reload()
}
demarer.addEventListener('click',()=>{
    if(!clicked){
        start();
        tour.innerText="Tour"
        clicked=true;
        console.log(clicked)
        clickedTour=true;
        tour.style.background="rgba(255, 255, 0,.8)";
   
        return
    }else if(clicked){
        arreter();
        demarer.innerText="Redemarer";
        demarer.style.background="#ccc"
        demarer.style.color="#000"
        clicked=false;
        console.log(clicked);
        tour.style.background="#000"
        tour.style.color="#fff"
        tour.innerText="Reset"
        clickedTour=false;
      return
    }
    
})
tour.addEventListener('click',()=>{
    if(clickedTour){  
        numberTour();
    }
    else{
        reset();
    }
})