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
        if( i % 2 ) {
            el.append(
            `
            <tr class="bg-gray-200 border-b border-gray-300">
                    <td>${employees[i].firstName}</td>
                    <td>${employees[i].lastName}</td>
                    <td>${employees[i].id}</td>
                    <td>${employees[i].title}</td>
                    <td>$${employees[i].salary}</td>
                    <td>
                        <button id="deleteButton">
                            <svg 
                                class="w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 20 20" 
                                fill="currentColor"
                                >
                                    <path 
                                        fill-rule="evenodd" 
                                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" 
                                        clip-rule="evenodd" 
                                    ></path>
                            </svg>
                        </button>
                    </td>
                </tr>
            `
        )
        }
        else {
            el.append(
            `
            <tr class="bg-gray-100 border-b border-gray-200">
                    <td>${employees[i].firstName}</td>
                    <td>${employees[i].lastName}</td>
                    <td>${employees[i].id}</td>
                    <td>${employees[i].title}</td>
                    <td>$${employees[i].salary}</td>
                    <td>
                        <button id="deleteButton">
                            <svg 
                                class="w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 20 20" 
                                fill="currentColor"
                                >
                                    <path 
                                        fill-rule="evenodd" 
                                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" 
                                        clip-rule="evenodd" 
                                    ></path>
                            </svg>
                        </button>
                    </td>
                </tr>
            `
        )
        }
        
    } // end for
    calculateMonthly();
} // showEmployees

function calculateMonthly() {
    let redMonthly = $(`<div class="bg-red-500 text-white w-24 border-2 border-gray-500 px-6" id="monthlySalary"></div>`)
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
        el.append(`<h3>Total Monthly Payroll: $${+(totalSalary / 12).toFixed(2)}</h3>`);
    }
    else {
        $( '#monthlyParent' ).empty();
        $( '#monthlyParent' ).append(`<div class="border-2 border-gray-500 px-6" id="monthlySalary">  </div>`);
        let el = $( '#monthlySalary');
        el.empty();
        el.append(`<h3>Total Monthly Payroll: $${+(totalSalary / 12).toFixed(2)}</h3>`);
    }
    
} // end calculateMonthly

function removeTR() {
    // console.log( 'in removeTR' );
    // console.log($( this ).parent().parent().text());
    // console.log($( this ).parent().parent().text().toString().length);
    // I could change regex to .+ in order to find names that were numbers or characters
    let found = $( this ).parent().parent().text().match(/(\w+)/)[0];

    for( let i  = 0; i < employees.length; i++) {
        if( found === employees[i].firstName ) {
            employees.splice( i, 1);
        }
    } // end for

    showEmployees();
    calculateMonthly();

    // const returnFirstName = str => str.match(/\s(\w+)\s/);

    // console.log(returnFirstName($( this ).parent().parent().text()));
    

    $( this ).parent().parent().fadeOut();
    // calculateMonthly();
} // end removeTR