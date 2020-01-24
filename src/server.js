import sirv from "sirv";
import polka from "polka";
import compression from "compression";
import * as sapper from "@sapper/server";
import parser from "body-parser";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

polka() // You can also use Express
	.use(
		parser.urlencoded({ extended: true }),
		compression({ threshold: 0 }),
		sirv("static", { dev }),
		sapper.middleware({
			session: req => ({
				form: req.session
			})
		})
	)
	.listen(PORT, err => {
		if (err) console.log("error", err);
	});
