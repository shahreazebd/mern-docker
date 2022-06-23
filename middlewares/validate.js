export default function validate(schema) {
  return async (req, res, next) => {
    try {
      await schema.validate({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (error) {
      console.log(error);
      return res.status(500).json({ type: error.name, message: error.message });
    }
  };
}
