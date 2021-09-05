import { setupWorker, rest } from "msw";

const worker = setupWorker(
  rest.get("http://localhost:3030/scoops", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: "Chocolate",
          imagePath: "/images/chocolate.png",
        },
      ])
    );
  })
);

worker.start();
