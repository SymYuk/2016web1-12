var input=parseInt(window.prompt("FizzBuzzしよう！回数を入力"));
if(input<1)
	document.write('Error!  自然数を入力してみよう');
else
	for(var i = 1 ; i <= input ; i++)
	{
		if(i%15==0)
			document.write("FizzBuzz,");
		else if(i%5==0)
			document.write("Buzz,");
		else if(i%3 == 0)
			document.write("Fizz,");
		else
			document.write("<p>"+i+"</p>");
	}
