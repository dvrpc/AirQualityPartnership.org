<%@ Import Namespace="System.Web.Routing" %>
<script language="C#" runat="server">
protected void Application_BeginRequest(object sender, EventArgs e)
{
    string[] Routes = new string[] {
		"/about/",
		"/news/",
		"/resources/",
		"/404/",
		"/cleandriving/"
	};

    if (Routes.Contains(Request.Url.AbsolutePath.ToLower()))
	{
		Context.RewritePath("/");
	}
}
</script>