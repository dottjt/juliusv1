var Y2007 = 0,
	Y2008 = 1,
	Y2009 = 2,
	Y2010 = 3,
	Y2011 = 4,
	Y2012 = 5,
	Y2013 = 6,
	Y2014 = 7,
	Y2015 = 8,
	Y2016 = 9,
	Y2017 = 10

var jan = 0.08334,
	feb = 0.16667,
	mar = 0.25000,
	apr	= 0.33334,
	may = 0.41667,
	jun	= 0.50000,
	jul = 0.58334,
	aug = 0.66667,
	oct = 0.75000,
	sep = 0.83334,
	nov = 0.91667,
	dec = 1.00000

/* find timeline length */

var currentdate = new Date();
var currentyear = currentdate.getFullYear();

var startdate = new Date(2007, 00);
var startyear = startdate.getFullYear();

var timelineLength = currentyear - startyear + 1;

/* create timeline */


var timelineContain = document.querySelector('.contain');


function createTimeline() {
	for (var i = 0; i < timelineLength; i++) {
		var timelineYear = document.createElement('div');
		timelineYear.classList.add('year');

		var calYear = startyear + i;

		timelineYear.innerHTML = calYear;

		var calWidth = 98 / (timelineLength);
		var calWidth_s = calWidth + "%";

		timelineYear.style.width = calWidth_s;

		timelineContain.appendChild(timelineYear);

	};
}

/*  sucks blogs    */

var adelaidesucks = {
	CL: 'sucks', 
	start: oct,	
	end: (jan + Y2008),	
	pos: 0,
	text: 'adelaidesucks'		// every 1.5em;
}

var melbournesucks = {
	CL: 'sucks', 
	start: (feb + Y2008),		
	end: (jun + Y2008),
	pos: 0,
	text: 'melbournesucks'		// every 1.5em;
			// every 1.5em;
}

var sydneysucks = {
	CL: 'sucks', 
	start: (jun + Y2008),		
	end: (jul + Y2008),
	pos: 0,
	text: 'sydneysucks'		// every 1.5em;
			// every 1.5em;
}

var hobartsucks = {
	CL: 'sucks', 
	start: (nov + Y2008),		
	end: (jan + Y2009),
	pos: 0,
	text: 'hobartsucks'		// every 1.5em;
			// every 1.5em;
}

var perthsucks = {
	CL: 'sucks', 
	start: (sep + Y2008),		
	end: (jan + Y2009),
	pos: 0,
	text: 'perthsucks'		// every 1.5em;
			// every 1.5em;
}

var sucks = [hobartsucks, perthsucks, sydneysucks, melbournesucks, adelaidesucks]

for(var i = 0; i < sucks.length; i++) {

	createTimelineElement(sucks[i]);
}


/* YouTube */ 

var DOTTJT = {
	CL: 'YouTube', 
	start: (mar + Y2011),		
	end: (aug + Y2011),
	pos: 0,
	text: 'dottjt YouTube Channel'		// every 1.5em;	
}

var TFR2011 = { 
	CL: 'YouTube', 
	start: (oct + Y2011),		
	end: (sep + Y2011),
	pos: 0,
	text: 'TFR2011'		// every 1.5em;
}

var TFR2012 = { 
	CL: 'YouTube', 
	start: (jul + Y2012),		
	end: (jul + Y2013),
	pos: 0,
	text: 'TFR2012'		// every 1.5em;
}

var TFR2016 = { 
	CL: 'YouTube', 
	start: (nov + Y2015),		
	end: (mar + Y2016),
	pos: 0,
	text: 'perthsucks'		// every 1.5em;
}


var JNAME = { 
	CL: 'YouTube', 
	start: (apr + Y2012),		
	end: (may + Y2012),
	pos: 0,
	text: 'perthsucks'		// every 1.5em;
}

var yt = [TFR2016, TFR2012, JNAME, TFR2011, DOTTJT]

for(var i = 0; i < yt.length; i++) {

	createTimelineElement(yt[i]);
}


/* Podcast */

var WETALK = {
	CL: 'Podcast', 
	start: (jan + Y2012),		
	end: (oct + Y2012),
	pos: 0,
	text: 'The Zero Hedge Daily Round Up'		// every 1.5em;
}

var TZHDRU = {
	CL: 'Podcast', 
	start: (jan + Y2012),		
	end: (oct + Y2012),
	pos: 0,
	text: 'The Zero Hedge Daily Round Up'		// every 1.5em;
}

var DRUDGE = {
	CL: 'Podcast', 
	start: (sep + Y2012),		
	end: (jul + Y2013),
	pos: 0,
	text: 'Drudge Report Report'		// every 1.5em;
}

var pod = [DRUDGE, TZHDRU]

for(var i = 0; i < pod.length; i++) {

	createTimelineElement(pod[i]);
}




/*
	
		TUMBLR

*/

var INK = {
	CL: 'Tumblr', 
	start: (jul + Y2013),		
	end: (oct + Y2013),
	pos: 0,
	text: 'inkquotes'		// every 1.5em;
}

var TK = {
	CL: 'Tumblr', 
	start: (oct + Y2013),		
	end: (feb + Y2014),
	pos: 0,
	text: 'tktxtktx'		// every 1.5em;
}

var SWEET = {
	CL: 'Tumblr', 
	start: (jan + Y2014),		
	end: (mar + Y2014),
	pos: 0,
	text: 'sweetcherry erotica'		// every 1.5em;
}

var BLACK = {
	CL: 'Tumblr', 
	start: (mar + Y2014),		
	end: (jun + Y2014),
	pos: 0,
	text: 'blackwhiteinkcurves'		// every 1.5em;
}

var BROKEN = {
	CL: 'Tumblr', 
	start: (sep + Y2014),		
	end: (apr + Y2015),
	pos: 0,
	text: 'brokenheartsandfracturedsmiles'		// every 1.5em;
}

var ELEG = {
	CL: 'Tumblr', 
	start: (apr + Y2015),		
	end: (may + Y2015),
	pos: 0,
	text: 'elegantlyattached'		// every 1.5em;
}

var tumbl = [ELEG, BROKEN, BLACK, SWEET, TK, INK]

for(var i = 0; i < tumbl.length; i++) {

	createTimelineElement(tumbl[i]);
}



/* 

		RADIO 

*/



var VISION = {
	CL: 'Radio', 
	start: (apr + Y2015),		
	end: (may + Y2015),
	pos: 0,
	text: 'elegantlyattached'		// every 1.5em;


}

var JATA = {
	CL: 'Radio', 
	start: (sep + Y2009),		
	end: (mar + Y2010),
	pos: 0,
	text: 'Just Another Topical Afternoon'		// every 1.5em;
}

var MONASH = {
	CL: 'Radio', 
	start: (mar + Y2011),		
	end: (oct + Y2011),
	pos: 0,
	text: 'The Faptacular One Hour Special'		// every 1.5em;
}

var SSR = {
	CL: 'Radio', 
	start: (mar + Y2011),		
	end: (oct + Y2011),
	pos: 0,
	text: 'Crack'		// every 1.5em;
}

var HC = {
	CL: 'Radio', 
	start: (jan + Y2011),		
	end: (apr + Y2011),
	pos: 0,
	text: 'Hidden Controversy'		// every 1.5em;
}

var HW = {
	CL: 'Radio', 
	start: (apr + Y2015),		
	end: (sep + Y2015),
	pos: 0,
	text: 'The Hourly Wage'		// every 1.5em;
}

var VISION = {
	CL: 'Radio', 
	start: (feb + Y2011),		
	end: (may + Y2015),
	pos: 0,
	text: 'Vision Australia Radio'		// every 1.5em;
}

var rad = [HC, HW, SSR, MONASH, VISION, JATA]

for(var i = 0; i < rad.length; i++) {

	createTimelineElement(rad[i]);
}



/*  

		WRITE  

*/

var PT = {
	CL: 'WRIT', 
	start: (jan + Y2015),		
	end: (aug + Y2015),
	pos: 0,
	text: 'elegantlyattached'		// every 1.5em;
}


var writ = [PT]

for(var i = 0; i < writ.length; i++) {

	createTimelineElement(writ[i]);
}


/* 

		PROF 

*/ 

var MC = {
	CL: 'Prof', 
	start: (aug + Y2012),		
	end: (mar + Y2013),
	pos: 0,
	text: 'elegantlyattached'		// every 1.5em;

}

var MASTERS = {
	CL: 'Prof', 
	start: (jan + Y2013),		
	end: (feb + Y2015),
	pos: 0,
	text: 'elegantlyattached'		// every 1.5em;

}

var PROLEARN = {
	CL: 'Prof', 
	start: (feb + Y2015),		
	end: (apr + Y2015),
	pos: 0,
	text: 'elegantlyattached'		// every 1.5em;

}

var MCLEOD = {
	CL: 'Prof', 
	start: (jun + Y2015),		
	end: (jul + Y2015),
	pos: 0,
	text: 'elegantlyattached'		// every 1.5em;

}

var OZWASH = {
	CL: 'Prof', 
	start: (jun + Y2015),		
	end: (jul + Y2015),
	pos: 0,
	text: 'elegantlyattached'		// every 1.5em;

}

var EXPO = {
	CL: 'Prof', 
	start: (aug + Y2015),		
	end: (jun + Y2016),
	pos: 0,
	text: 'elegantlyattached'		// every 1.5em;

}


var prof = [EXPO, OZWASH, MCLEOD, PROLEARN, MASTERS, MC]

for(var i = 0; i < prof.length; i++) {

	createTimelineElement(prof[i]);
}




function createTimelineElement(dates) {
	var timelineDate = document.createElement('div');
	timelineDate.classList.add('item');
	timelineContain.appendChild(timelineDate);

	var begin = dates.start * timelineLength;
	var begin_s = begin + "%";

	timelineDate.style.innerHTML = dates.text; // activity description

	timelineDate.style.left = begin_s;	// starting point of activity.

	var length = ((dates.end - dates.start) / timelineLength) * 100;
	var length_s = length + "%";

	timelineDate.style.width = length_s; // length of activity.

	var pos_s = dates.pos + "em";
	timelineDate.style.top = pos_s; // position row of activity.

	timelineDate.classList.add(dates.CL)
}



createTimeline();





