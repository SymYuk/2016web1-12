var input=parseInt(window.prompt("FizzBuzzしよう！半角英数字で自然数を入力してください"));
if(input<1)
	document.write('Error!  自然数を入力してみよう');
else
	for(var i = 1 ; i <= input ; i++)
		if(i%15==0)
			document.write("<p>FizzBuzz</p>");
		else if(i%5==0)
			document.write("<p>Buzz</p>");
		else if(i%3 == 0)
			document.write("<p>Fizz</p>");
		else
			document.write("<p>"+i+"</p>");
