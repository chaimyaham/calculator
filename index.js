class Calculator{
    constructor(previous,current){
        this.current=current;
        this.previous=previous;
    }
    clear(){
       
        this.currentOperand='';
        this.previousOperand='';
        this.operation=undefined;
    }
    delete(){
        this.currentOperand=this.currentOperand.slice(0,-1)

    }
    appendNumber(number){
        if(this.currentOperand==undefined){
            this.currentOperand=""
        }
        if(this.previousOperand==undefined){
            this.previousOperand=""
        }
        if(number==="." && this.currentOperand.includes('.'))return 
        this.currentOperand=this.currentOperand+number
       
    }
    chooseOperation(operation){
        if(this.currentOperand==='')return;
        if(this.previousOperand !==''){
            this.compte();

        }
        this.operation=operation;
        this.previousOperand=this.currentOperand;
        this.currentOperand='';
    }
    compte(){
       
        let calcul;
        const prev=parseFloat(this.previousOperand);
        const cur=parseFloat(this.currentOperand);
     
        if(isNaN(prev)|| isNaN(cur))return;
        switch(this.operation){
            case'+':
                calcul=prev+cur
                break;
            case'-':
                calcul=prev-cur
                break;
            case'/':
                calcul=prev/cur
                break;
            case'*':
                calcul=prev*cur
                break;
            case'%':
                calcul=(prev/100)*cur
                break;
            default:
                    return
        }
        
        this.currentOperand=calcul;
        this.operation=undefined;
        this.previousOperand='';


    }
    updateElement(){
            
        this.current.innerText=this.currentOperand;
        
        this.previous.innerText=this.previousOperand;
       
    }
}





const numbers=document.querySelectorAll("[data-number]");
const operator=document.querySelectorAll("[data-operation]");
const deletebtn=document.querySelector("[data-delete]");
const clearAll=document.querySelector("[data-clear-all]");
const equalBtn=document.querySelector("[data-equal]");
const previous=document.querySelector("[data-previous]");
const current=document.querySelector("[data-current]");



const calculator=new Calculator(previous,current);
numbers.forEach(div=>{
    div.addEventListener('click',()=>{
        calculator.appendNumber(div.innerText);
        calculator.updateElement();
    })
})
operator.forEach(div=>{
    div.addEventListener('click',()=>{
        calculator.chooseOperation(div.innerText);
        calculator.updateElement();
    })
})
equalBtn.addEventListener('click',()=>{
        calculator.compte();
        calculator.updateElement();
})
clearAll.addEventListener('click',()=>{
        calculator.clear();
        calculator.updateElement();
})
deletebtn.addEventListener('click',()=>{
        calculator.delete();
        calculator.updateElement();
})


