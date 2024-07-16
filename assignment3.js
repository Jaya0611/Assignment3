// In the variables declare above assign the variables as appropriate default value instead of null.
let employeeDetails={
    Name:undefined,
    Email:undefined,
    Age:undefined,
    address:undefined,
    Phone_Number:undefined,
    Gender:undefined,
    married:undefined
    }
    console.log("Name: "+employeeDetails.Name);
    console.log("Email: "+employeeDetails.Email);
    console.log("Age: "+employeeDetails.Age);
    console.log("address: "+employeeDetails.address);
    console.log("Phone_Number: "+employeeDetails.Phone_Number);
    console.log("Gender: "+employeeDetails.Gender);
    console.log("married: "+employeeDetails.married);
    for (const key in employeeDetails) {
        console.log(employeeDetails.key);
       
    }
    