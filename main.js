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
		fakeA=0,
		indexA,
		isImg = false,
		isPT = false,
		isBlank = false,
		isFlash = false,
		is1 = false,
		is5 = false;
	$("body").prepend("<div id='odpowiedzi' style='position:relative; background-color: white; border-bottom: 10px solid black'></div>")
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
			if(pytanie.includes('Fill in the blank.'))
				isBlank = true;
			if(pytanie == '1')
				is1 = true;
			if(pytanie == '5')
				is5 = true;
		});
		if(isFlash)
		{
			fake--;
			console.log(i-fake+1+': ///////////////////flash///////////////////')
			wklej(i-fake+1, '///////////////////flash///////////////////');
		}
		else if(isBlank)
		{
			fake--;
			console.log(i-fake+1+': ///////////////////blank///////////////////')
			wklej(i-fake+1, '///////////////////blank///////////////////');
		}
		else if(is1)
		{
			fake--;
			console.log(i-fake+1+': Which two actions should a technician take if illegal content, such as child pornography, is discovered on the hard drive of a customer computer? (Choose two.)')
			wklej(i-fake+1, 'Which two actions should a technician take if illegal content, such as child pornography, is discovered on the hard drive of a customer computer? (Choose two.)');
		}
		else if(is5)
		{
			fake--;
			console.log(i-fake+1+': Refer to the exhibit. During the troubleshooting of software that is installed on a computer system, a level one technician requires help from a level two technician. The file shown in the exhibit must be sent to the level two technician. How should the level one technician deliver this file?')
			wklej(i-fake+1, 'Refer to the exhibit. During the troubleshooting of software that is installed on a computer system, a level one technician requires help from a level two technician. The file shown in the exhibit must be sent to the level two technician. How should the level one technician deliver this file?');
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
						if(pytanie.indexOf(' ') == 0)
							pytanie = pytanie.slice(pytanie.indexOf(' ')+1); //jeżeli spacja jest pierwsza to ją usuwa
							
						fake--;
						console.log(i-fake+1+": "+pytanie);
						wklej(i-fake+1, pytanie)
					}
					else if(pytanie.indexOf('.') < 4 && pytanie.indexOf('.') >-1)
					{
						pytanie = pytanie.slice(pytanie.indexOf('.')+2); //szuka kropki i zostawia tekst od kropki +2 pola, czyli od początku pytania
						if(pytanie != "")
						{
							fake--;
							console.log(i-fake+1+": "+pytanie);
							wklej(i-fake+1, pytanie)
						}
					}
				}
			});
		}
		isImg = isPT = isBlank = isFlash = is1 = is5 = false;
	});
	$(".post-content>p").each(function(i) 
	{
		fakeA++;
		if($(this).has("span").length)
		{
			fakeA--;
			indexA = i-fakeA+1;
			console.log(indexA+": ");
			if(indexA>1)
				$('#odpowiedzi').append(",<br>");
			$('#odpowiedzi').append("//question "+indexA+"<br>[<br>");
			
			$(this).find("span").each(function(j) 
			{
				odpowiedz = $(this).text().replace(/\*/g, '');
				if(odpowiedz.indexOf('#') >-1)
					odpowiedz = odpowiedz.slice(odpowiedz.indexOf('#')+2);
				console.log(j+": "+odpowiedz);
				if(j > 0)
					$('#odpowiedzi').append(",<br>");
				$('#odpowiedzi').append("\""+odpowiedz+"\"");
			});
			$('#odpowiedzi').append("<br>]");
		}
	});
}
document.onkeydown = function(e)
{
	if(e.which == 69)//e
		skopiuj();
}