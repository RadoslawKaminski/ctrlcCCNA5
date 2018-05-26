function wklej(index, question)
{
	if(index >1)
		$('#pytania').append(",<br>");
	$('#pytania').append("//question "+index+"<br>\""+question+"\"");
}
function skopiuj()
{
	var pytanie,
		odpowiedz,
		fake=0,
		isImg = false,
		isPT = false,
		isBlank = false,
		isFlash = false;
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
			//console.log(i-fake+1+': ///////////////////flash///////////////////')
			wklej(i-fake+1, '///////////////////flash///////////////////');
		}
		else if(isBlank)
		{
			fake--;
			//console.log(i-fake+1+': ///////////////////blank///////////////////')
			wklej(i-fake+1, '///////////////////blank///////////////////');
		}
		else
		{
			$(this).find('strong').each(function(j)
			{
				pytanie = $(this).text();
				if(!$(this).parent('span').length && !$(this).has('span').length && !pytanie.includes('not scored'))
				{
					if((j == 1 && !isImg && !isPT) || (j == 0 && isImg) || (j == 2 && isPT))
					{
						fake--;
						//console.log(i-fake+1+": "+pytanie);
						wklej(i-fake+1, pytanie)
					}
					else if(pytanie.indexOf('.') < 4 && pytanie.indexOf('.') >-1)
					{
						pytanie = pytanie.slice(pytanie.indexOf('.')+2); //szuka kropki i zostawia tekst od kropki +2 pola, czyli od początku pytania
						fake--;
						//console.log(i-fake+1+": "+pytanie);
						wklej(i-fake+1, pytanie)
					}
				}
			});
		}
		isImg = isPT = isBlank = isFlash = false;
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