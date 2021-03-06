if (WSH.Arguments.length != 3)
{
	WSH.Echo("Usage: rle.js -e|d infile outfile");
	WSH.Quit();
}
else 
	switch (WSH.Arguments(0))
	{
		case "-e":
		EscapeEnCode(WSH.Arguments(1), WSH.Arguments(2));
		WSH.Quit();
		case "-d":
		EscapeDeCode(WSH.Arguments(1), WSH.Arguments(2));
		WSH.Quit();
	}

function infile(fname) 
{
	var fso = new ActiveXObject("Scripting.FileSystemObject");
	var file = fso.OpenTextFile(fname, 1, false, -1);
	arr = file.ReadAll().split("");
	file.Close();
	return arr;
}
function outfile(fname,strk) 
{
	var fso = new ActiveXObject("Scripting.FileSystemObject");
	var file =  fso.CreateTextFile(fname, true, true);
	file.Write(strk);
	file.Close();
}
function EscapeEnCode(inf,outf) 
{ 
	function EnCode() 
	{ 
		while (k > 258) 
		{ 
			a = a + esc + String.fromCharCode(255) + z;
			k -= 259;
		}
		if (z == esc)
		{
			a = a + esc + String.fromCharCode(k) + esc;
			if (k > 3)
				a = a + esc + String.fromCharCode(k - 3) + esc;
		}
		else if (k > 3)
			a = a + esc + String.fromCharCode(k - 3) + z;
		else
				while (k-- > 0)
					a = a + z; 
	}
s = infile(inf);
esc = "#";
var a = new String;
z = s[0];
k = 1;
for (i = 1; i < s.length; i++) 
	if (s[i] == s[i - 1])
		k++;
	else 
	{
		EnCode();
		z = s[i];
		k = 1;
	}
EnCode();
WSH.Echo(a);
outfile(outf,a);
}
function EscapeDeCode(inf,outf) 
{ 
	s = infile(inf);
	esc = "#"; 
	var a = new String;
	for (i = 0; i < s.length; i++)
		if (s[i] == esc) 
		{
			if (s[i + 2] != esc)
				k = s[i + 1].charCodeAt(0) + 3;
			else
				k = s[i + 1].charCodeAt(0);
			while (k-- > 0)
				a = a + s[i + 2];
				i += 2;
		}
		else
			a = a + s[i];
WSH.Echo(a);
outfile(outf,a);
}

function JumpDeCode(inf, outf)
{
	var a = new String();
	var s = infile(inf);
	for (var i = 0; i < s.length; i++)
	{
		var code = s[i].charCodeAt(0);
		if (code < 128)
		{
			for (var j = 0; j < code + 1; j++)
				a += s[i + j + 1];
			i += code + 1;
		}
		else
		{
			code -= 128;
			for (var j = 0; j < code + 2; j++)
				a += s[i + 1];
			i++;
		}
	}
	WSH.Echo(a);
	outfile(outf,a);
}

function JumpEnCode(inf, outf)
{
	var a = new String();
	s = infile(inf);
	if (s.length == 1)
		a = a + String.fromCharCode(0) + a[0];
	var i = 0;
	var count = 0;
	while (i < s.length)
	{
		if (s[i] == s[i + 1])
		{
			while(s[i + count] == s[i+1+count])
			{
				count++;
				if (count == 128)
					break;
			}
			a = a + String.fromCharCode(count - 1 + 128) + s[i];
			i += count + 1;
			count = 0;
		}
		else
		{
			while(s[i + count] != s[i + 1 + count])
			{
				count++;
				if (count == 128)
					break;
			}
				a = a + String.fromCharCode(count - 1);
				for (var j = i; j < i + count; j++)
					a = a + s[j];
				i += count;
				count = 0;
		}
	}
	WSH.Echo(a);
	outfile(outf, a);
}

	
	
	