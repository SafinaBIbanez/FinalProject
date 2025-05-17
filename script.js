document.getElementById("signupForm").addEventListener("submit", function (e) 
{
  e.preventDefault(); 


  const sex = document.querySelector('input[name="sex"]:checked');


  localStorage.setItem("firstName", document.getElementById("firstName").value);
  localStorage.setItem("lastName", document.getElementById("lastName").value);
  localStorage.setItem("email", document.getElementById("email").value);
  localStorage.setItem("sex", sex ? sex.value : "");
  localStorage.setItem("reason", document.getElementById("reason").value);


  window.location.href = "proj_profile_ibanez.html";
});
