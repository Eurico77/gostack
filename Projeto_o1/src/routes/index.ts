import { Router } from 'express';

const routes = Router();

routes.post('/test', (req, res) => {
  const { name, id } = req.body;
  console.log(name, id)
})

export default routes;


