const Koa = require("koa");
const _route = require("koa-route");
const app = new Koa();

app.use(
	_route.get("/", (ctx) => {
		ctx.response.type = "html";
		ctx.body = "<h1>Index sayfasına hosgeldiniz</h1>";
	})
);
app.use(
	_route.get("/hakkimda", (ctx) => {
		ctx.response.type = "html";
		ctx.body = "<h1>Hakkimda sayfasina hosgeldiniz</h1>";
	})
);

app.use(
	_route.get("/iletisim", (ctx) => {
		ctx.response.type = "html";
		ctx.body = "<h1>Iletisim sayfasına hosgeldiniz</h1>";
	})
);
app.use(
	_route.get("*", (ctx) => {
		ctx.body = "404 not found";
	})
);

const port = 3000;
app.listen(port, () => {
	console.log(`server ${port} nolu portta çalışmaya başladı...`);
});
