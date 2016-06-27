var input=parseInt(window.prompt('FizzBuzzしよう！回数を入力'));
var output='';

if(input<1)
{
	document.GetElementById('FizzBuzz').textContent='Error! 自然数を入力してみよう';
	return;
}

for(var i=1;i<=input;i++)
{
	var li=Document.createElement('FizzBuzz')
	if(i%3==0)
	output += 'Fizz';
	else if(i%5==0)
	output += 'Buzz';
	else if(i%15==0)
	output += 'FizzBuzz';
	else
	output += 'i';
}

document.getElementById('FizzBuzz').textContent=output;
