var input=parseInt(window.prompt("FizzBuzzしよう！回数を入力"));
var output="";

if(input<1)
{
	document.getElementById("FizzBuzz").textContent="Error!\n自然数を入力してみよう";
}

else
{
	for(var i = 1 ; i <= input ; i++)
	{
		if(i%3 == 0)
			output += "Fizz\n";
		else if(i%5==0)
			output += "Buzz\n";
		else if(i%15==0)
			output += "FizzBuzz\n";
		else
			output += i+"\n";
	}
	document.getElementById("FizzBuzz").textContent=output;
}
