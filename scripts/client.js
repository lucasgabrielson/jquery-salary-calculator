$( document ).ready( readyNow );

let employees = [];

function readyNow() {
    // click listeners
    $( '#submit' ).on( 'click', addEmployee );
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
                    <td><button>Delete</button></td>
                </tr>
            `
        )
    } // end for
    calculateMonthly();
}

function calculateMonthly() {
    let monthlySalary = 0;
    let el = $( '#monthlySalary ');
    el.empty();
    for( let i = 0; i < employees.length; i++) {
        monthlySalary += Number(employees[i].salary);
    } // end for
    el.append(`${monthlySalary / 12}`)
} // end calculateMonthly