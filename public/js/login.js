//Detect login click
const loginButton = document.getElementById('login');
loginButton.addEventListener("click", function (){
  login();
})


//Login function
  function login(){
    var url = '/api/user/login'
  $.ajax({
    type: "POST",
    url: url,
    crossDomain: true,
    dataType: "json",
    data: {
    "password": document.getElementById('password03').value,
    "username": document.getElementById('usernames2').value
  },
    success: function (response) {
      location.reload()

              },
    error: function (xhr, status) {
                  alert("error : Credentials are wrong");
              }
  });
  }


  //Detect Sign up click
  const signUpButton = document.getElementById('register');
  signUpButton.addEventListener("click", function (){
    add();
  })

//Registration function
function add(){
var url = '/api/user/create'
console.log(document.getElementById('exampleDropdownFormPassword1').value);
$.ajax({

type: "POST",
url: url,
crossDomain: true,
dataType: "json",
data: {
"email": document.getElementById('exampleDropdownFormEmail1').value,
"password": document.getElementById('exampleDropdownFormPassword1').value,
"phone": document.getElementById('exampleDropdownFormTelephone').value,
"username": document.getElementById('exampleDropdownFormUsername').value
},
success: function (response) {

  document.getElementById('message').innerHTML = 'Wakwa' + response.username;
          },
          error: function (xhr, status) {
              alert("error");
          }
});
}


//Event listener login/signup
    const signUpAnchor = document.getElementById("signIn");
    const loginForm = document.getElementById("loginForm");
    const signUp = document.getElementById("signUpForm");

    signUpAnchor.addEventListener('click', function(event){

      loginForm.classList.add("d-none");
      signUp.classList.remove("d-none");

    });
