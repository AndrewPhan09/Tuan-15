//Bài tập 1
let fruit = ["Mận", "Đào"];
console.log(fruit);
fruit[0] = "Nho";
fruit[1] = "Quýt";
console.log(fruit);
fruit.splice(0,1);
fruit[0] = "Bưởi";
fruit[1] = "Lê";
console.log(fruit);
//Bài tập 2
let object={
    name: "Điện thoại Iphone 69",
    price: "69 tỉ"
}
console.log(object);
object.madein = "Made in China";
console.log(object);
object.madein ="Made in Japan"
console.log(object);
delete object.madein;
console.log(object);
//Bài tập 3
let people=[
    {name: "Dat villa", age: 21},
    {name: "Dat home", age: 20},
    {name: "Dat apartment", age: 39},
    {name: "Dat homeless", age: 69},
    {name: "Dat manison", age: 40},
]
function searchName(){
    var name = document.getElementById("SearchInput").value;
    var index = false;
    for(i=0; i<people.length; i++){
        if(people[i] && name.toLowerCase() === people[i].name.toLowerCase()){
            document.getElementById("result").innerHTML= `
            <p>Tên: ${people[i].name}</p>
            `
            index = true;
        }
    }
    if(!index){
        document.getElementById("result").innerHTML= `
        <p>Không có người</p>
        `
    }
}
