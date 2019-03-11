function check(form)/*function to check userid & password*/
	{
	/*the following code checkes whether the entered userid and password are matching*/
	if(form.userid.value == "sai123" && form.pswrd.value == "12345")
		{
		window.open('dashboard.html')/*opens the target page while Id & password matches*/
		}
	else
		{
		alert("Error Password or Username")/*displays error message*/
		}
	}