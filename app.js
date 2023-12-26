// function exchangeMoney(kurs, ...akcha){
//     console.log(kurs,akcha);
// }
// exchangeMoney(89,100,2000,30000,40000)
// // exchangeMoney().map(i=>i%i)


// const som=exchangeMoney.map(i=>i%i)


// function convertSom(som){
//     const result={
//         eur: som/98,
//         rub: som/0.97,
//         usd: som/89
//     }
//     return result
// }
// const {eur,rub,usd}=convertSom(700000)
// console.log(eur,rub,usd);


// class Animal{
//     constructor(option){
//         this.type=option.type
//         this.hasTail=option.hasTail
//         this.fast=option.fast
//     }
//     voice(sound){
//         console.log(this.type+' has'+ sound+' voice!');
//     }
// }

// class WildAnimals extends Animal{
//     constructor(option){
//         super(option)
//         this.useful=option.useful
//     }
// }

// class HomeAnimals extends Animal{
//     constructor(option){
//         super(option)
//         this.useful=option.useful
//         this.love=option.love
//     }
// }

// const walf=new WildAnimals({
//     type:'wild',
//     hasTail:true,
//     fast:true,
//     useful:false
// })

// const dog=new HomeAnimals({
//     type:'taigan',
//     hasTail:true,
//     fast:true,
//     useful:false,
//     love: true
// })

// class ProductHomeAnimals extends HomeAnimals{
//     constructor(option){
//         super(option)
//         this.isProduct=option.isProduct
//         this.kochmon=option.kochmon
//     }
// }


// class BigHomeAnimals extends HomeAnimals{
//     constructor(option){
//         super(option)
//         this.price=option.price
//         this.weight=option.weight
//         this.jalduu=option.jalduu
//     }
// }

// const sheep=new ProductHomeAnimals({
//     type:'joosh',
//     hasTail:true,
//     fast:false,
//     useful:true,
//     love: true,
//     kochmon: true,
//     isProduct:true
// })

// const horse=new BigHomeAnimals({
//     type:'kuluk',
//     hasTail:true,
//     fast:true,
//     useful:true,
//     love: true,
//     price:1000000,
//     weight: 300,
//     jalduu:true
// })









// HomeWork
// transport

class Transport{
    constructor(option){
        this.model=option.model,
        this.speed=option.speed
    }
} 

const FerrariSF90=new Transport({
    model:'Ferrari SF90 Stradale',
    speed:'340 км/ч'
})

class Airplane extends Transport{
    constructor(option){
        super(option)
        this.firstFlight=option.firstFlight
    }
}

const boeing747=new Airplane({
    model:'Boeing 747',
    speed:'900',
    firstFlight:'9 февраля 1969 года'
})

class Plane extends Airplane{
    constructor(option){
        super(option)
        this.passenger=option.passenger
    }
}

const boeing777=new Plane({
    model:'Boeing 777',
    speed:'905 km/h',
    firstFlight:'18 мая 2001 года ',
    passenger:'305 до 550 пассажиров'
}) 

class Helicopter extends Airplane{
    constructor(option){
        super(option)
        this.type=option.type
    }
}

const mi8=new Helicopter({
    model:'Ми-8 ',
    speed:'250 км/ч',
    firstFlight:'24 июня 1961 года',
    type:'многоцелевой вертолёт'
})

class WaterTransport extends Transport{
    constructor(option){
        super(option)
        this.waterType=option.waterType
    } 
}

const yacht=new WaterTransport({
    model:'Yacht',
    speed:'30',
    waterType:'океан'
})

class Boat extends WaterTransport{
    constructor(option){
        super(option)
        this.purpose=option.purpose
    }
}
const rowboat =new Boat ({
    model:'Rowboat ',
    speed:' 5 км/ч',
    waterType:'река',
    purpose:'for recreation'
})

class Ship extends WaterTransport{
    constructor(option){
        super(option)
        this.size=option.size
    }
}

const cargoShip=new Ship({
    model:'Cargo Ship',
    speed:'25 км/ч',
    waterType:'океан',
    size:'крупный'
})

class Cars extends Transport{
    constructor(option){
        super(option)
        this.brand=option.brand
    } 
}

const modelS=new Cars({
    model:'Model S',
    speed:'200 км/ч',
    brand:'Tesla'
})

class VagonCars extends Cars{
    constructor(option){
        super(option)
        this.weight=option.weight
    }
}

const sprinter=new VagonCars({
    model:'Sprinter',
    speed:'90 км/ч',
    brand:'Mercedes-Benz',
    weight:2000
})

class JenilCars extends Cars{
    constructor(option){
        super(option)
        this.volume=option.volume
    }
}

const civic=new JenilCars({
    model:'Civic',
    speed:'120 км/ч',
    brand:'Honda',
    weight:18
})