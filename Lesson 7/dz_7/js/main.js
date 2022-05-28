class Building {
    constructor(type, height, amountOfRoom, numberOfFloors) {
        this.type = type;
        this.height = height;
        this.amountOfRoom = amountOfRoom;
        this.numberOfFloors = numberOfFloors;
    }
}

class House extends Building{
    constructor(type, height, amountOfRoom, numberOfFloors, color,roof, balcony,homeRepairs, doors, windows,furniture, garden,lawn, garage,pool  ) {
        super(type, height, amountOfRoom, numberOfFloors);
        this.color = color;
        this.roof = roof;
        this.balcony = balcony;
        this.homeRepairs = homeRepairs;
        this.doors = doors;
        this.windows = windows;
        this.garden = garden;
        this.furniture = furniture;
        this.lawn = lawn;
        this.garage = garage;
        this.pool = pool;
    }
}
const myHouse = new House (
    "Кирпичный дом",
    "6м",
    "5",
    "2",
    "Белый",
    "Черепица",
    "2 балкона",
    "Евроремонт",
    "10 дверей",
    "7 окон",
    "Мебель имеется",
    "Красивый сад",
    "Зеленый газон",
    "Имеется гараж",
    "Большой бассейн"
)
console.log(myHouse)

class School extends Building{
    constructor(type, height, amountOfRoom, numberOfFloors, garden, sportsGround,parking, gym, computerEquipment, desks, boards ) {
        super(type, height, amountOfRoom, numberOfFloors);
        this.garden = garden;
        this.sportsGround = sportsGround;
        this.parking = parking;
        this.gym = gym;
        this.computerEquipment = computerEquipment;
        this.desks = desks;
        this.boards = boards;
    }
}

const mySchool = new School(
    "Кирпичный",
    "8м",
    "35 кабинетов",
    "3 этажа",
    "Большой сад",
    "Спорт площадка",
    "Большая парковка",
    "Имеется спортзал",
    "Компьютерное оборудование имеется",
    "100 шт",
    "35"
)
console.log(mySchool)