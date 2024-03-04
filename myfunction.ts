
function add(num1:number,num2 : number = 90) :number{
   return num1+num2;

}

// console.log(add(2));

// function addString(para1:string ,para2 :string){
//     //ok to not return anything if not defined anything explicitly 
//     return null;
// }
const  addString2 =  (s:string) =>{

    //if defining must return
    return 200;
}

const heros = ["thor" , "spiderman" ,"ironman"]
const heros2 = [1 , "spiderman" ,"ironman"]

heros2.map( hero =>{
    return  `hero is ${hero}`
})
export {}
