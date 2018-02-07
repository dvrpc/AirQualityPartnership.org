<%@ Page Language="C#" Debug="true" %>
<%@ Import Namespace="Newtonsoft" %>
<%@ Import Namespace="Newtonsoft.Json" %>

<script language="C#" runat="server">
public void Page_Load()
{
	Response.ContentType = "application/json";
	Response.Cache.SetExpires(DateTime.Now.AddHours(12));

	XElement xml = XElement.Load("http://www.meteo.psu.edu/~wfr1/AQP.xml");
	
	var result = new List<object>();
	result.Add(new { date = DateTime.Today.AddDays(-1), index = getForecast(-1, xml), forecast = "" });
	result.Add(new { date = DateTime.Today, index = getForecast(0, xml), forecast = "" });
	result.Add(new { date = DateTime.Today.AddDays(1), index = getForecast(1, xml), forecast = "" });

	Response.Write(JsonConvert.SerializeObject(result));
}

public string getForecast(int date, XElement xml)
{
	try
	{
		var currentDay = (from day in xml.Elements("day")
					where day.Attribute("date").Value == DateTime.Now.AddDays(date).ToString("yyyy-MM-dd")
					select day).First();

		return getAQI(Math.Max(int.Parse(currentDay.Element("ozone").Value), int.Parse(currentDay.Element("pm25").Value)));
	}
	catch (Exception e)
	{
		return "unavailable";
	}
}

public string getAQI(int aqi)
{
	if (aqi <= 50)
	{
		return "good";
	}
	else if (aqi <= 100)
	{
		return "moderate";
	}
	else if (aqi <= 150)
	{
		return "sensitive";
	}
	else {
		return "unhealthy";
	}
}
</script>