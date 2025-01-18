/* exo 2  correction*/
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
const Banque1 = new BanKAccount(100);
Banque1.deposit(100);
Banque1.withdraw(1500);
Banque1.getBalance();
