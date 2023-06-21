# Redis-cache

Made with ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=plastic&logo=node.js&logoColor=white) and ![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?style=plastic&logo=redis&logoColor=white).

I recommend using docker to deploy Redis locally, since I find it easier. All you need to do is execute the docker command `run -d --name redis-stack-server -p 6379:6379 redis/redis-stack-server:latest` and it's done.

Also, I recommend using the [Redis Insight](https://redis.com/pt/redis-enterprise/redisinsight/), which is a tool that makes accompannying what is being stored in your Redis server a lot easier.

In the project you have three different types of server, where all of them simulate a slow products requisition.
 - The first server doesn't have  Redis, taking somewhere from 0 to 5 seconds to retrieve the products.
 - The second server uses Redis, making the requisition take 0 to 5 seconds only in the first try, after that the server will create a Redis key calles "Products", where it will temporarly store the response for 10 seconds, thus, the response will be incredibly fast while the key is stores.
 - The third server also uses Redis, but this time the api also has an endpoint `/saved`, which adds a new product to the products list and removes the "Products" key from redis, making the next server requisition get the newly updated products and save them in Redis.
