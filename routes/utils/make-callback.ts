import { HttpRequest } from "../../common/types";

export default (controller: any) => (req: any, res: any) => {
  const httpRequest: HttpRequest = {
    body: req.body,
    query: req.query,
    params: req.params,
    ip: req.ip,
    method: req.method,
    path: req.path,
    user: req.user,
    source: {
      ip: req.ip,
      browser: req.get('User-Agent')
    },
    headers: {
      'Content-Type': req.get('Content-Type'),
      Referer: req.get('referer'),
      'User-Agent': req.get('User-Agent')
    }
  };

  controller(httpRequest)
    .then((httpResponse: any) => {
      res.set('Content-Type', 'application/json');
      res.type('json');
      const body = {
        success: true,
        code: 200,
        data: httpResponse
      };
      res.status(200).send(body);
    })
    .catch((e: any) => {
      console.log(e)
      res.status(400).send({
        success: false,
        code: 400,
        error: {
          description: e.message
        }
      });
    });
};