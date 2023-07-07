
function login() {

    let U                  
    
    
    
sername = document.getElementById("Username").value;

    let password = document.getElementById("Password").value;
    let login = []
    login.push(
        {
            Username: Username,
            Password: password
        }
    );

  
   // console.log(login);
    //localStorage.setItem('Username',Username);
    //localStorage.setItem('Password',password);


   sessionStorage.setItem('sessionUsername',Username);
   sessionStorage.setItem('sessionPassword',password);
    let name = sessionStorage.getItem('sessionUsername');
    let pass = sessionStorage.getItem('sessionPassword');


    console.log(name);
    console.log(pass);

    if (Username === "chirag@gmail.com" && password === "123") {
        
   } else {
       alert("Please enter valid information");
       return;
   }
 


   /* let student = ['chirag', 'ajit', 'rahul', 'dipak', 'chirag'];

    console.log(student[0]);
    console.log(student[1]);
    console.log(student[2]);
    console.log(student[3]);


    student[4] = 'gohil chirag';// changing the value
    console.log(student[4]);

    console.log(student.length);
    student.push('krish');//adding value from  last
    student.unshift('nilesh')//adding value from  first 
    const lastElement = student.pop();//removing value from last
    console.log(lastElement);


    const firstElement = student.shift();//removing value from start
    console.log(firstElement);

    let index = student.indexOf('rahul');//Finding an index of an element in the array

    console.log(index);

    console.log(student);

    console.log(Array.isArray(student));


    //map method

    let circles = [10, 30, 50];
    console.log(circles)

    let areas = []; 
    let area = 0;
    for (let i = 0; i < circles.length; i++) {
        area = Math.floor(Math.PI * circles[i] * circles[i]);
        areas.push(area);
    }
    console.log(areas);*/


}

function singup()
{
    let name = document.getElementById("name").value
    let surname = document.getElementById("surname").value
    let username = document.getElementById("username").value
    let cp = document.getElementById("cp").value
    let phone = document.getElementById("phone").value
    let address = document.getElementById("address").value
    let email = document.getElementById("email").value
    let DOB = document.getElementById("DOB").value
    let male = document.getElementById("male").value    
    let female = document.getElementById("female").value    

    const singup1 = [];

    singup1.push(
    
        {
            name: name,
            surname: surname,
            username:username,
            cp: cp,
            phone: phone,
            address: address,
            email: email,
            DOB: DOB,
           

        }
    );

    //console.log(singup1);




  
     sessionStorage.setItem('sessionname',name);
     sessionStorage.setItem('sessionsurname',surname);
     sessionStorage.setItem('sessionusername',username);
     sessionStorage.setItem('sessioncp',cp);
     sessionStorage.setItem('sessionphone',phone);
     sessionStorage.setItem('sessionaddress',address);
     sessionStorage.setItem('sessionemail',email);
     sessionStorage.setItem('sessionDOB',DOB);

    let name2 = sessionStorage.getItem('sessionname');
    let surname2 = sessionStorage.getItem('sessionsurname');
    let username2 = sessionStorage.getItem('sessionusername');
    let cp2= sessionStorage.getItem('sessioncp');
    let phone2 = sessionStorage.getItem('sessionphone');
    let address2 = sessionStorage.getItem('sessionaddress');
    let email2 = sessionStorage.getItem('sessionemail');
    let DOB2 = sessionStorage.getItem('sessionDOB');
    console.log(name2);
    console.log(surname2);
    console.log(username2);
    console.log(cp2);
    console.log(phone2);
    console.log(address2);
    console.log(email2);
    console.log(DOB2);

    
 



}
  


function ValidateForm(form){
    ErrorText= "";
    if ( ( form.gender[0].checked == false ) && ( form.gender[1].checked == false ) ) 
    {
    alert ( "Please choose your Gender: Male or Female" ); 
    return false;
    }
    if (ErrorText= "") { form.submit() }
    
    }
    

   /* function ValidateForm2(
        
           { if(Username == null || Username == "")
                alert( "name can't be blank");
                return false;
    }
            

            { else if (password.lenght<8)
                alert( "password must be at least 8 charaters");
                return false;
            
            }
    )*/

