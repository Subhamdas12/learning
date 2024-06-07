const express = require("express");
const { getProduct, getProductById } = require("./product");
const server = express();

const { getCatchData, redis, rateLimit } = require("./middleware/redis");

server.get("/", rateLimit(10, 60), async (req, res) => {
  res.json({ message: "This is your response" });
});

server.get("/product", getCatchData("product"), async (req, res) => {
  let product = await getProduct();
  redis.setex("product", 20, JSON.stringify(product));
  return res.json(product);
});

server.get("/product/:id", async (req, res) => {
  const { id } = req.params;
  let product = await redis.get(`product:${id}`);
  if (product) {
    return res.json(JSON.parse(product));
  }
  product = await getProductById(id);
  redis.set(`product:${id}`, JSON.stringify(product));
  return res.json(product);
});

server.get("/order", async (req, res) => {
  redis.del("product");
  res.json({ message: "Product removed" });
});

server.listen(3000, () => {
  console.log("server is running");
});
