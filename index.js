
   // console.log("hello")
 var name="dinnu";
 var age=16;

 if(age>18){
     let name="varsha";
     console.log(name)
 }

 console.log(name)



 /*let employee={
     name:"Dimple",
     designation:"junior software developer",
     salary:"10L",
     mobile:9392726011
 }



 console.log(employee)*/

 //let employee=["varsha","dimple","dinnu"]
 //console.log(employee)

 //alerts


 //alert("Registrtion is completed successfully")


// let number1=prompt("enter number1")
 //console.log(number1)


 //confirm("are you sure to exit")


 //console statements

/* console.log("Hello");
 console.info("information");
 console.warn("check the code once")
 console.error("age is not defined")*/


 //spead operator


//  let marks=[19,30,40,50.8,90]
//  let internal_marks=[12,4,56,7]

//  let results=[23,34,external_marks] 
//  let final=[34,63,...external_marks,...internal_marks]
//  console.log(final);
//  console.log(result);

// function addition(x,y,...remainData){

//     console.log(x);
//     console.log(y);
//     console.log(remainData)
//     console.log(typeof(remainData))

// }
// console.log(addition(2,3,4,5,67,89,2,"Hello"))
// let employee=["dinnu","lalith","varsha"]

// name1=employee[1];
// console.log(name1)


// let [harry_21,sweety,...data]=employee
 
// console.log(harry_21)
// console.log(data)

let employee={
    name:"Dimple",
    designation:"junior software developer",
    salary:"10L",
    mobile:9392726011
}

let{name1,designation,...remainList}=employee;
console.log(name1);
console.log(designation);
console.log(remainList);