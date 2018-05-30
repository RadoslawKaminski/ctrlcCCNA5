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
		is5 = false,
		is19 = false,
		is42 = false,
		is56 = false,
		is57 = false,
		is86 = false,
		is96 = false,
		isBad = false,
		isBadA = false;
	//$("body").prepend("<div id='odpowiedzi' style='position:relative; background-color: white; border-bottom: 10px solid black'></div>")
	$("body").prepend("<div id='pytania' style='position:relative; background-color: white; border-bottom: 10px solid black'></div>")
	/*$('.post-content>p , .post-content>div>div, .post-content>div>strong').each(function(i) 
	{
		fake++;
		$(this).find('strong, b').each(function(j)
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
			
			//też mnie oczy bolą, ale to jest najprostrze (o ile nie jedyne) rozwiązanie :(
			//wstyd start
			if(pytanie == '5.')
				is5 = true;
			if(pytanie == '19.')
				is19 = true;
			if(pytanie.includes('Which command will create a static route on R2 in order to reach PC B?'))
				is42 = true;
			if(pytanie == '56.')
				is56 = true;
			if(pytanie == 'Refer to the exhibit.')
				is57 = true;
			if(pytanie == '86. Refer to the exhibit.')
				is86 = true;
			if(pytanie.includes('01:11:12: %PORT_SECURITY-2-PSECURE_VIOLATION'))
				isBad = true;
		});
		if($(this).text() == '96. Which command will enable auto-MDIX on a device?')
				is96 = true;
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
		else if(is5)
		{
			fake--;
			console.log(i-fake+1+': Refer to the exhibit. If RIPng is enabled, how many hops away does R1 consider the 2001:0DB8:ACAD:1::/64 network to be?')
			wklej(i-fake+1, 'Refer to the exhibit. If RIPng is enabled, how many hops away does R1 consider the 2001:0DB8:ACAD:1::/64 network to be?');
		}
		else if(is19)
		{
			fake--;
			console.log(i-fake+1+': Refer to the exhibit. Which type of route is 172.16.0.0/16?')
			wklej(i-fake+1, 'Refer to the exhibit. Which type of route is 172.16.0.0/16?');
		}
		else if(is42)
		{
			fake--;
			console.log(i-fake+1+': Which command will create a static route on R2 in order to reach PC B?')
			wklej(i-fake+1, 'Which command will create a static route on R2 in order to reach PC B?');
		}
		else if(is56)
		{
			fake--;
			console.log(i-fake+1+': Which keyword is displayed on the web browser?')
			wklej(i-fake+1, 'Which keyword is displayed on the web browser?');
		}
		else if(is57)
		{
			fake--;
			console.log(i-fake+1+': What summary static address would be configured on R1 to advertise to R3?')
			wklej(i-fake+1, 'What summary static address would be configured on R1 to advertise to R3?');
		}
		else if(is86)
		{
			fake--;
			console.log(i-fake+1+': What address will summarize the LANs attached to routers 2-A and 3-A and can be configured in a summary static route to advertise them to an upstream neighbor?')
			wklej(i-fake+1, 'What address will summarize the LANs attached to routers 2-A and 3-A and can be configured in a summary static route to advertise them to an upstream neighbor?');
		}
		else if(is96)
		{
			fake--;
			console.log(i-fake+1+': Which command will enable auto-MDIX on a device?')
			wklej(i-fake+1, 'Which command will enable auto-MDIX on a device?');
		}
		//koniec wstydu
		
		else if(!isBad)
		{
			$(this).find('strong, b').each(function(j)
			{
				pytanie = $(this).text();
				if(!$(this).parent('span').length && !$(this).has('span').length && !pytanie.includes('not scored'))
				{
					if((j == 1 && !isImg && !isPT) || (j == 0 && isImg) || (j == 2 && isPT))
					{
						if(pytanie.indexOf(' ') == 0)
							pytanie = pytanie.slice(pytanie.indexOf(' ')+1); //jeżeli spacja jest pierwsza to ją usuwa
						if(pytanie.indexOf('.') < 4 && pytanie.indexOf('.') >-1)
						{
							pytanie = pytanie.slice(pytanie.indexOf('.')+2); //szuka kropki i zostawia tekst od kropki +2 pola, czyli od początku pytania
							if(pytanie != "")
							{
								fake--;
								console.log(i-fake+1+": "+pytanie);
								wklej(i-fake+1, pytanie)
							}
						}
						else
						{
							fake--;
							console.log(i-fake+1+": "+pytanie);
							wklej(i-fake+1, pytanie)
						}
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
		isImg = isPT = isBlank = isFlash = is5 = is19 = is42 = is56 = is57 = is86 = is96 = isBad = false;
	});*/
	$(".post-content>p").each(function(i) 
	{
		fakeA++;
		if($(this).has("span[style='color: #3366ff;']").length)
		{
			$(this).find("span").each(function(j) 
			{
				odpowiedz = $(this).text().replace(/\*/g, '');
				if(odpowiedz.indexOf('Last update Dic') >-1)
					isBadA = true;
			});
			if(!isBadA)
			{
				fakeA--;
				indexA = i-fakeA+1;
				//console.log(indexA+": ");
				if(indexA>1)
					$('#odpowiedzi').append(",<br>");
				$('#odpowiedzi').append("//question "+indexA+"<br>[<br>");
				
				$(this).find("span").each(function(j) 
				{
					//podwójne robi razem 
					odpowiedz = $(this).text().replace(/\*/g, '');
					if($(this).attr('style') == 'color: #3366ff;')
					{
						if(odpowiedz.indexOf('#') >-1)
							odpowiedz = odpowiedz.slice(odpowiedz.indexOf('#')+2);
						console.log(indexA+": "+j+": "+odpowiedz);
						if(j > 0)
							$('#odpowiedzi').append(",<br>");
						$('#odpowiedzi').append("\""+odpowiedz+"\"");
					}
				});
				$('#odpowiedzi').append("<br>]");
			}
		}
		isBadA = false;
	});
}
document.onkeydown = function(e)
{
	if(e.which == 69)//e
		skopiuj();
}