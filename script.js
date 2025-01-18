/* class personne {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log(`je m'appelle ${this.name} et j'ai ${this.age}ans`);
  }
}
const personne1 = new personne("Yves", 10);
const personne2 = new personne("Kalo", 5);

personne1.introduce();
personne2.introduce();

class employe extends personne {
  constructor(jobtitle) {
    this.jobtitle = jobtitle;
  }
  Work() {
    console.log(`${this.name} travaille en tant que ${jobtitle}`);
  }
} */
/* exo whatssap */
/* exo 1  correction*/
class BanKAccount {
  #Balance;
  constructor(initial) {
    this.#Balance = initial;
  }
  deposit(amount) {
    this.#Balance += amount;
  }
  withdraw(amount) {
    if (this.#Balance >= amount && this.#Balance > 0) {
      this.#Balance -= amount;
    } else {
      console.log("Solde Insuffisant");
    }
  }
  getBalance() {
    console.log(`Solde actuel: ${this.#Balance}`);
  }
}
const banque1 = new BanKAccount(100);
banque1.deposit(2000);
banque1.withdraw(1500);
banque1.getBalance();

/* exo2 */
//Créez une classe parent Animal avec Une propriété name.
class Animal {
  constructor(name) {
    this.name = name;
  }
  //Une méthode makeSound() qui affiche : "[Nom] fait un bruit."
  makeSound() {
    console.log(`${this.name} fait un bruit.`);
  }
}
//Créez une classe enfant Dog qui hérite de la classe Animal et redefinissez la méthode makeSound() pour afficher : "[Nom] aboie."
class Dog extends Animal {
  makeSound() {
    console.log(`${this.name} aboie.`);
    console.log("Je suis un chien");
  }
}
//Créez une instance de chaque classe et appelez leurs méthodes.
const animal = new Animal("Animal");
animal.makeSound();
const dog = new Dog("Dog");
dog.makeSound();
