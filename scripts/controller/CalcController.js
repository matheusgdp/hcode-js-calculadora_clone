class CalcController {
    
    //constructor é o metodo que é chamado sempre que inicio uma nova instancia do objeto
    constructor(){

        this._operation = [];

        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector('#display');
        this._dateEl = document.querySelector('#data');
        this._timeEl = document.querySelector('#hora');

        this.currentDate; 
        this.initialize();

        this.initButtonsEvents();
    }

    initialize(){

        this.setDisplayDateTime();

        setInterval(()=>{
            this.setDisplayDateTime();
        }, 1000);
    }

    addEventListenerAll(element, events, fn){
        
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false);
        });

    }

    clearAll(){
        this.operation = [];
    };

    cancelEntry(){
        this.operation.pop(); //O pop elimina o último elemento de um array
    };

    getLastOperation(){
        return this.operation[this.operation.lenth-1];


    }

    addOperation(value){
        this.operation.push(value); //O push adiciona um elemento no final de um array
    };

    setError(){
        this.displayCalc = 'Error';
    };

    execBtn(value) {
        switch(value) {
            case 'ac':
                this.clearAll();
                break;

            case 'ce':
                this.cancelEntry();
                break;

            case 'soma':

                break;
            
            case 'subtracao':

                break;

            case 'divisao':

                break;

            case 'multiplicacao':

                break;
            
            case 'porcento':

                break;

            case 'igual':

                break;

            case 'ponto':

                break;

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value));
                break;
        }
    }


    initButtonsEvents(){
        let buttons = document.querySelectorAll('#buttons > g, #parts > g');

        buttons.forEach( (btn, index) => {

            //addEventListenerAll não existe. Não é um metodo nativo. É um metodo criado no objeto
            this.addEventListenerAll(btn, 'click drag', e => {
                let textBtn = btn.className.baseVal.replace('btn-', '');

                this.execBtn(textBtn);
            });

            this.addEventListenerAll(btn, 'mouseover mouseup mousedown', e => {
                btn.style.cursor = 'pointer';
            });

        });
    }

    setDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    get displayTime(){
        return this._timeEl.innerHTML;
    }

    set displayTime(value){
        this._timeEl.innerHTML = value;
    }

    
    get displayDate(){
        return this._dateEl.innerHTML;
    }

    set displayDate(value) {
        this._dateEl.innerHTML = value;
    }

    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value){
        this._displayCalcEl.innerHTML = value; 
    }

    get currentDate(){
        return new Date();
    }

    set currentDate(value){
        this.currentDate = value;
    }

    get operation(){
        return this._operation;
    };

    set operation(value){
        this._operation = value;
    };
}