let cuenta1 = {
    titular:"Javier",
    saldo:3000,
    ingresar: function(cantidad){
        this.saldo+=cantidad;
    },
    extraer: function(cantidad){
        this.saldo-=cantidad;
    },
    transferir: function(cuenta,cantidad){
        cuenta.ingresar(cantidad);
        this.extraer(cantidad);
    },
    toString: function(){
        console.log(`${this.titular} con saldo ${this.saldo}`);
    }

}
let cuenta2 = {
    titular:"Rocio",
    saldo:5000,
    ingresar: function(cantidad){
        this.saldo+=cantidad;
    },
    extraer: function(cantidad){
        this.saldo-=cantidad;
    },
    transferir: function(cuenta,cantidad){
        cuenta.ingresar(cantidad);
        this.extraer(cantidad);
    },
    toString: function(){
        console.log(`${this.titular} con saldo ${this.saldo}`);
    }

}

// cuenta1.transferir(cuenta2,500);
// console.log(cuenta1.toString())
// console.log(cuenta2.toString())

let cuentas=[
{titular:"Carlos",saldo:10000},
{titular:"Lidia",saldo:12500},
{titular:"Alicia",saldo:8500},
{titular:"Felipe",saldo:9000}
]
cuentas.sort(function(a,b) {return a.saldo-b.saldo});

cuentas.forEach((element) =>{
console.log(element);
});

class Jarra{
    constructor(capacidad,cantidad){
        this._capacidad=capacidad;
        this._cantidad=cantidad;
    }
    
    get cantidad (){
        return this._cantidad;
    }
    set cantidad (c){
        if(c<0) throw new Error("La cantidad debe ser un número positivo");

        else if(c<=this._capacidad) this._cantidad=c;
        else this._cantidad=this._capacidad;
        
    }
    get capacidad(){
        return this._capacidad;
    }

    set capacidad(c){
        this._capacidad=c;
    }
    llenar(){
        this._cantidad=this._capacidad;
    }
    vaciar(){
        this._cantidad=0;
    }
    llenarDesde(jarra){
        let litros_introducir=this._capacidad-this._cantidad
        if(litros_introducir>=jarra._cantidad){
            this._cantidad+=jarra.cantidad
            jarra.vaciar()
        }else{
            litros_introducir<jarra._cantidad;
            jarra._cantidad-=litros_introducir
            this._cantidad+=litros_introducir;
        }
    }
    static comparar(jarra1,jarra2){
        if(jarra1._cantidad>jarra2._cantidad){
            return jarra1;
        }else if (jarra1._cantidad<jarra2._cantidad){
            return jarra2;
        }else{
            return "Tienen la misma cantidad";
        }
    }
    jarrasConMasCantidad(...jarra){
        let array=[]
        let contador=0;
        jarra.forEach(element => {
            if(this._cantidad<element._cantidad){
                array[contador]=element;
                contador++;
            }
        });
        return array;
    }
    toString(){
        return `Capacidad: ${this._capacidad} y llena con una cantidad de ${this._cantidad}`
    }
}

