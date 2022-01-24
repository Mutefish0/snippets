let body = {
  errcode: "BIS:10200",
  errmsg: null,
  data: {
    code: "0",
  },
};

$done({ body: JSON.stringify(body) });
