<html>

<head>

<title>Clock in status bar</title>

<script language="JavaScript">

function clock_status()

         {

         window.setTimeout("clock_status()",100);

	 today=new Date();

	 self.status=today.toString();

	 }

</script>

</head>

<body background="ffffff" onLoad="clock_status()">

</body>

</html>
