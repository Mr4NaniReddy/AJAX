// console.log("Ajax tutorial in one video");
// let content = "";

// let fetchbtn = document.getElementById('fetchbtn');
// fetchbtn.addEventListener('click', buttonClickhandler)

// function buttonClickhandler(){
//     console.log("you have clicked the button click");
//     const xhr = new XMLHttpRequest(); 
//     xhr.open('POST', 'https://dummy.restapiexample.com/api/v1/employees', true);

//     xhr.onprogress = function(){
//         console.log("On progress");
//     }
//     xhr.onreadystatechange = function(){
//         console.log("Ready State is ", xhr.readyState);
//     }
//     xhr.onload = function() {
//     if (this.status === 200) {
//         console.log("Success:", this.responseText);

//     } else {
//         console.log("Error:", this.status);
//     }

// };

//     xhr.send();
//     console.log("We are done!");
// }

// let popbtn = document.getElementById("backupbtn");
// popbtn.addEventListener('click', poptnfun);

// function poptnfun(){
//     console.log("calling popbtn function");
//     const xhr = new XMLHttpRequest();

//     xhr.open("GET","https://dummy.restapiexample.com/api/v1/employees",true);

//     xhr.onload = function(){
//         if(this.status === 200){
//             let obj = JSON.parse(this.responseText);
//             str = "";
//             for(let i=0; i< obj.data.length;i++){
//                 str += `<li>${obj.data[i].employee_name}</li>`;
//             }
//             document.getElementById("list").innerHTML = str;
//         }
//         else{
//             console.log("Error", this.status);
//         }
//     }
//     xhr.send();
// }

$('#backupbtn').click(function(e){
    e.preventDefault();
    $.ajax({
        url: "https://dummy.restapiexample.com/api/v1/employees",
        type: "GET",
        contentType: false,
        processData: false,
        success: function(data){
            console.log(data);
            str = "";
            for(let emp of data.data){
                str += `<li>${emp.employee_name}</li>`;
            }
            $("#list").html(str);

        },
        error: function(xhr){
            console.log("Error from jquery:", xhr.status);
        }
    })
})


