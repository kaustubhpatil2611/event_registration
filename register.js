document.querySelector("#home").addEventListener('click',changehead);
document.querySelector("#register").addEventListener('click',changereg);
document.querySelector("#show").addEventListener('click',changeshow);
document.querySelector("#home1").addEventListener('click',changehead);
document.querySelector("#register1").addEventListener('click',changereg);
document.querySelector("#show1").addEventListener('click',changeshow);



function changehead()
{
	document.getElementById("page").innerHTML="Home";
	document.getElementById("two").style.display="none";
	document.getElementById("three").style.display="none";
	document.getElementById("one").style.display="";
}

function changereg()
{
	document.getElementById("page").innerHTML="Register";
	document.getElementById("one").style.display="none";
	document.getElementById("three").style.display="none";
	document.getElementById("two").style.display="";
}

function changeshow()
{
	document.getElementById("page").innerHTML="Show Registrations";
	document.getElementById("one").style.display="none";
	document.getElementById("two").style.display="none";
	document.getElementById("three").style.display="";
}


function checkemail(str)
{
	var at=str.indexOf("@");
	var dot=str.indexOf(".");
	if(at!=-1 && dot!=-1){
		if(at>=1 && dot>=3 && (str.length-1-dot)>=2 && (str.length-1-dot)<=5){
			return true;
		}
		else{
			return false;
		}
	}
	else{
		return false;
	}
}

function addregister()
{	
		var table=document.getElementById("myTable");
		var row = table.insertRow(table.rows.length);
				var cell1 = row.insertCell(0);
				var cell2 = row.insertCell(1);
				var cell3 = row.insertCell(2);
				var cell4 = row.insertCell(3);
				var cell5 = row.insertCell(4);
				var cell6 = row.insertCell(5);
				var cell7 = row.insertCell(6);
		var name=document.myform.firstname.value;
		var lname=document.myform.lastname.value;
		var mail=document.myform.emailid.value;
		var college=document.myform.college.value;
		var dept=document.myform.dept.value;
		var quest=document.myform.questions.value;
		var app=document.myform.approve.value;
		var d = new Date();
	    var ts= d.getDate()+"-"+(d.getMonth()+1)+"-"+d.getFullYear()+"  "+d.getHours()+":"+d.getMinutes();	    
		cell1.innerHTML = name+" "+lname;
		cell2.innerHTML = mail;
		cell3.innerHTML = college;
		cell4.innerHTML = dept;
		cell5.innerHTML = quest;
		cell6.innerHTML = app;
		cell7.innerHTML = ts;	
}

function validate()
{
	var name=document.myform.firstname.value;
	var mail=document.myform.emailid.value;
	
	if(name==""|| name==null)
	{
		document.getElementById("vname").innerHTML="Name is compulsory";
		return false;
	}
	else if(name.length<2 && name.length<20)
	{
		document.getElementById("vname").innerHTML="Name should be atleast 2 characters long and max 20 characters long";
		return false;
	}
	else if(isNaN(name)==false)
	{
		document.getElementById("vname").innerHTML="Enter valid name";
		return false;
	}
	else if(mail==""|| mail==null)
	{
		document.getElementById("vemail").innerHTML="Email is compulsory";
		return false;
	}
	else if(checkemail(mail)==false)
	{
		document.getElementById("vemail").innerHTML="Enter valid Email";
		return false;
	}
	else{
		addregister();
		document.getElementById("none1").style.display="none";
		document.getElementById("vsubmit").innerHTML="Registered successfully!";
		return false;
	}
	
}




