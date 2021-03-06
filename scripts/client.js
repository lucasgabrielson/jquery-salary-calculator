$( document ).ready( readyNow );

let employees = [];

function readyNow() {
    // click listeners
    $( '#submit' ).on( 'click', addEmployee );
    // click listener for dynamically created els
    $( '#employeeTableBody' ).on( 'click', '#deleteButton', removeTR);
} // end readyNow

function addEmployee() {
    const employee = {
        firstName: $( '#firstName' ).val(),
        lastName: $( '#lastName' ).val(),
        id: $( '#idNumber' ).val(),
        title: $( '#jobTitle' ).val(),
        salary: $( '#salary' ).val()
    } // end employee
    
    employees.push(employee);
    showEmployees();
    

} // end addEmployee

function showEmployees() {
    console.log( 'in showEmployees' );
    let el = $( '#employeeTableBody' );
    el.empty();
    for( let i = 0; i < employees.length; i++) {
        el.append(
            `
            <tr>
                    <td>${employees[i].firstName}</td>
                    <td>${employees[i].lastName}</td>
                    <td>${employees[i].id}</td>
                    <td>${employees[i].title}</td>
                    <td>$${employees[i].salary}</td>
                    <td><button id="deleteButton">Delete</button></td>
                </tr>
            `
        )
    } // end for
    calculateMonthly();
} // showEmployees

function calculateMonthly() {
    let redMonthly = $(`<div class="bg-red-500 text-white w-24" id="monthlySalary"></div>`)
    let totalSalary = 0;
    for( let i = 0; i < employees.length; i++) {
        totalSalary += Number(employees[i].salary);
    } // end for
    console.log( 'this is monthly salary', monthlySalary);
    if( totalSalary / 12 > 20000) {
        console.log( 'in redMonthly' );
        $( '#monthlyParent' ).empty();
        $( '#monthlyParent' ).append(redMonthly);
        let el = $( '#monthlySalary');
        el.empty();
        el.append(`<h3>Monthly Salary: ${totalSalary / 12}</h3>`);
    }
    else {
        $( '#monthlyParent' ).empty();
        $( '#monthlyParent' ).append(`<div class="" id="monthlySalary">  </div>`);
        let el = $( '#monthlySalary');
        el.empty();
        el.append(`<h3>Monthly Salary: ${totalSalary / 12}</h3>`);
    }
    
} // end calculateMonthly

function removeTR() {
    console.log( 'in removeTR' );
    $( this ).parent().parent().fadeOut();
} // end removeTR