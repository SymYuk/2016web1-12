var input=parseInt(window.prompt("FizzBuzzしよう！回数を入力"));
var output="";

document.open();

if(input<1)
	document.writeln('Error!\n自然数を入力してみよう');
else
{
	for(var i = 1 ; i <= input ; i++)
	{
		if(i%15==0)
			document.writeln("FizzBuzz");
		else if(i%5==0)
			document.writeln("Buzz");
		else if(i%3 == 0)
			document.writeln("Fizz");
		else
			document.writeln(i);
	}
}

document.close();
