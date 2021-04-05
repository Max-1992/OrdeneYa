const success = (statusCode, body) => {
  return  {
      statusCode: statusCode,
      body: JSON.stringify({
        ok: true,
        data: body
      })
    }
}

const error = (statusCode, err) => {
  return  {
      statusCode: statusCode,
      body: JSON.stringify({
        ok: false,
        err: err,
      })
    }
}



module.exports = {
    success,
    error
}