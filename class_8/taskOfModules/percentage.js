let studentsDetails = []

let students=[
    {name: "awais khan", marks: 434},
    {name: "waqas khan", marks: 345},
    {name: "waqar khan", marks: 435},
    {name: "bilal khan", marks: 523},
]

let calculatePercentage =(name,obtainedMarks,totalMarks)=>{
    return {name, 
        percentage: (obtainedMarks/totalMarks) * 100
    }
}

students.forEach(element =>{
    studentsDetails.push(calculatePercentage(element.name,element.marks,600));
})

export default studentsDetails;