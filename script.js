class personne{
    constructor(name, age){ 
this.name = name;
this.age = age;
}
introduce(){
    console.log(`je m'appelle ${this.name} et j'ai ${this.age}ans`)
}
}
const personne1 = new personne("Yves", 10)
const personne2 = new personne ("Kalo",5)

personne1.introduce()
personne2.introduce()

class employe extends personne  {
    constructor(jobtitle){
        this.jobtitle = jobtitle;
    }
    Work(){
        console.log(`${this.name} travaille en tant que ${jobtitle}`);
    }
}
