

class People {

Nombre;
lastname;
Age;
Document;
phone;
Bandits;



constructor(Nombre,lastname,Age,Document,phone,Bandits = []){

    this.Nombre = Nombre;
    this.lastname = lastname;
    this.Age = Age;
    this.Document = Document;
    this.phone = phone;
    this.Bandits = Bandits;}

    deleteBandits (nameBandits){
        const seriousBandits = this.Bandits.filter(Bandits => {
            return Bandits != nameBandits });
        this.Bandits = seriousBandits;
    
    }
}




let save = document.getElementById("save");


save.addEventListener('click',() =>{
    console.log('click in save');
    let Nombre = document.getElementById("nombre").value;
    let lastname = document.getElementById("lastname").value;
    let Age = document.getElementById("age").value;
    let Document = document.getElementById("document").value;
    let phone = document.getElementById("phone").value;
    

    let list = document.getElementById("listPerson");
    list.innerHTML += `
    <th>
       <tr> Nombre = ${Nombre}</tr>
       <tr> lastname = ${lastname}</tr>
       <tr> Age = ${Age}</tr>
       <tr> Document = ${Document}</tr>
       <tr> phone = ${phone}</tr>
    </th>`;
    
    cleanPersons ();

});

let saveBandits = document.getElementById("saveBandits")

saveBandits.addEventListener('click', () =>{
    console.log('click in saveBandits');
    let Bandits = document.getElementById("Bandits").value;

    let listBandits = document.getElementById("listBandits");
listBandits.innerHTML+=`
    <th>
    <tr>Bandits = ${Bandits}</tr>

    </th>`
});



function cleanPersons(){    
    Nombre = document.getElementById("nombre").value = "";
    lastname = document.getElementById("lastname").value = "";
    Age = document.getElementById("age").value = "";
    Document = document.getElementById("document").value = "";
    phone = document.getElementById("phone").value = "";
    Bandits = document.getElementById("bandits").value = "";
    


}