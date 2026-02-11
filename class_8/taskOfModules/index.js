import studentsDetails from "./percentage.js";

studentsDetails.forEach(s =>{
 console.log(`${s.name} scored ${s.percentage.toFixed(1)}%`);
});