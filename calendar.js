let btn = document.getElementById("workday");
btn.addEventListener("click",Calc);

function Calc()
{
	let first = document.getElementById("first").value;
	let second = document.getElementById("second").value;
	let fDate = new Date(first);
	let sDate = new Date(second);
	let f = fDate.getTime();
	let s = sDate.getTime();
	let yearone = fDate.getFullYear();
	let monthone = fDate.getMonth() + 1;
	if(monthone < 10) monthone = '0' + monthone;
	let oneday = fDate.getDate();
	if(oneday < 10) oneday = '0' + oneday;

	let yeartwo = sDate.getFullYear();
	let monthtwo = sDate.getMonth() + 1;
	if(monthtwo < 10) monthtwo = '0' + monthtwo;
	let twoday = sDate.getDate();
	if(twoday < 10) twoday = '0' + twoday;
	let dayone = yearone + "-" + monthone + "-" + oneday;
	let daytwo = yeartwo + "-" + monthtwo + "-" + twoday;
	
	let pow = 0;

	while(f <= s)
	{
		let cur1 = new Date(f);
		let day = cur1.getDay();

		if(day > 0 && day < 6) pow++;

		f += 86400000;
	}

	document.getElementById("weekday").innerHTML = "<h1>Pomiędzy " + dayone + " and " + daytwo + " jest " + pow + " dni roboczych</h1>"; 

}