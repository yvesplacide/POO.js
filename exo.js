class BanKAccount {
  #balance;
  constructor(initial) {
    this.#balance = initial;
  }
  deposit(amount) {
    this.#balance += amount;
  }
  withdraw(amount) {
    if (this.#balance >= amount && this.#balance > 0) {
      this.#balance -= amount;
    } else {
      console.log("Solde insuffisant");
    }
  }
  getBalance() {
    console.log(`Solde actuel: ${this.#balance}`);
  }
}
const banque1 = new BanKAccount(100);
banque1.deposit(2000);
banque1.withdraw(1500);
banque1.getBalance();
/* exo2 Heritage avec la class employé 

creer une classe employe qui herite de la classe personne 
ajouter une propriete job-title a employe
ajouter une methode appele work et cette methode qui affiche name travaille en tant que job-title

 */
class Personne {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log(`je m'appelle ${this.name} et j'ai ${this.age}ans`);
  }
}
const personne1 = new Personne("yves", 10);
personne1.introduce();

class Employe extends Personne {
  constructor(name, age, jobtitle) {
    super(name, age);
    this.jobtitle = jobtitle;
  }
  work() {
    console.log(`${this.name} travaille en tant que ${this.jobtitle}`);
  }
}
const employe1 = new Employe("Yves", 10, "dev");
employe1.work();

class Shape {
  calculateArea() {
    console.log(`Aire non defini pour cette forme`);
  }
}
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  calculateArea() {
    console.log(`L'aire du rectangle est ${this.width * this.height}`);
  }
}
class Cercle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  calculateArea() {
    console.log(`L'aire du Cercle est ${Math.PI * this.radius * this.radius}`);
  }
}

const rectangle = new Rectangle(5, 10);
const cercle = new Cercle(5);
rectangle.calculateArea();
cercle.calculateArea();
