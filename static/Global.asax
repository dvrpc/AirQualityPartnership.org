<%@ Import Namespace="System.Web.Routing" %>
<script language="C#" runat="server">
protected void Application_BeginRequest(object sender, EventArgs e)
{
    //RegisterRoutes(RouteTable.Routes);

    Regex r = new Regex(@"^.*\..+$", RegexOptions.IgnoreCase);
	Match m = r.Match(Request.RawUrl);
	if (Request.Url.Query.Length == 0 && Request.RawUrl.Length > 1 && !m.Success)
	{
		Response.Redirect("https://www.airqualitypartnership.org/#" + Request.RawUrl);
	}
	else
	{
		Response.Cache.SetCacheability(HttpCacheability.NoCache);
	}
}

public static void RegisterRoutes(RouteCollection routes)
{
    routes.Ignore("{*allaspx}", new {allaspx=@"^((?!aspx).)*$"});
    routes.MapPageRoute("","","~/Default.aspx");
}
</script>