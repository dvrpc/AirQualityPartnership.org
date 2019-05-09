<%@ Import Namespace="System.Web.Routing" %>
<script language="C#" runat="server">
protected void Application_BeginRequest(object sender, EventArgs e)
{
    string[] Routes = new string[] {
		"/about/",
		"/news/",
		"/resources/",
		"/greencommute/",
		"/greencommute/rules/"
	};

    if (Routes.Contains(Request.Url.AbsolutePath.ToLower()))
	{
		Context.RewritePath("/");
	}
}
</script>