function validation()
{
	if(document.getElementById("fname").value=="")
	{
		alert("Please insert first name");
		return false;
	}
		if(document.getElementById("lname").value=="")
	{
		alert("Please insert last name");
		return false;
	}
		if(document.getElementById("email").value=="")
	{
		alert("Please insert email");
		return false;
	}
		if(document.getElementById("phone").value=="")
	{
		alert("Please insert phone number");
		return false;
	}
}
