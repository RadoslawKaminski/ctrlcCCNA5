function wklej(index, question)
{
	if(index == 0)
		$('#pytania').append("\""+question+"\"");
	else
		$('#pytania').append(",<br>\""+question+"\"");
}
function skopiuj()
{
	var pytanie,
		odpowiedz,
		fake=0,
		isImg = false,
		isPT = false,
		isBlank = false;
	//$("body").prepend("<div id='odpowiedzi' style='position:relative; background-color: white; border-bottom: 10px solid black'></div>")
	$("body").prepend("<div id='pytania' style='position:relative; background-color: white; border-bottom: 10px solid black'></div>")
	$('.post-content>p').each(function(i) 
	{
		fake++;
		$(this).find('strong').each(function(j)
		{
			pytanie = $(this).text();
			if(pytanie.includes('Open the PT'))
				isPT = true;
			if(pytanie.includes('Refer to the exhibit'))
				isImg = true;
			if(pytanie.includes('options are used'))
				isFlash = true;
		});
		if(isFlash)
		{
			fake--;
			console.log(i-fake+1+': ///////////////////flash///////////////////')
			//wklej(i-fake+1, '///////////////////flash///////////////////');
		}
		else if(isBlank)
		{
			fake--;
			console.log(i-fake+1+': ///////////////////blank///////////////////')
			//wklej(i-fake+1, '///////////////////blank///////////////////');
		}
		else
		{
			$(this).find('strong').each(function(j)
			{
				pytanie = $(this).text();
				if((j == 1 && !isImg) || (j == 0 && isImg) )
				{
					console.log(pytanie);
				}
			});
		}
		isImg = isPT = isBlank = false;
		//pytanie = $(this).text().slice( $(this).text().indexOf('.')+2 ); //szuka kropki i zostawia tekst od kropki +2 pola, czyli od początku pytania
	});
	/*$(".post-content>ul").each(function(i) 
	{
		if(i==0)
			$('#odpowiedzi').append("[<br>");
		else
			$('#odpowiedzi').append(",<br>[<br>");
		$(this).find("li > span").each(function(j) 
		{
			odpowiedz = $(this).text();
			if(j == 0)
				$('#odpowiedzi').append("\""+odpowiedz+"\"");
			else
				$('#odpowiedzi').append(",<br>\""+odpowiedz+"\"");
		});
		$('#odpowiedzi').append("<br>]");
	});*/
}
document.onkeydown = function(e)
{
	if(e.which == 69)//e
		skopiuj();
}