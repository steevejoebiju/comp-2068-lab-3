

let people = [{
    id: "1",
    name:"Max spane",
    age:"22",
    Address:"4332  Dogwood Road, Phoenix"
},
{
    id: "2",
    name:"mary Kom",
    age:"49",
    Address:"3351  Red Dog Road, Charlotte"
},
{
    id: "3",
    name:"ROberto Carlos",
    age:"28",
    Address:"2124  Lowland Drive, Harmon"
},
{
    id: "4",
    name:"Rashford",
    age:"25",
    Address:"3740  Platinum Drive, Pittsburgh"
}]

exports.find = () => {
    
    return people;
  }; 


    exports.findById = (id) => {
        for (let person of people){
           if (person.id == id){
              return person;
           }
        }
     }
    