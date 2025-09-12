const crypto = require("crypto");

/**
 * @typedef {Object} RedirectParams
 * @property {string|null} [request_id]
 * @property {string|null} [checkout_id]
 * @property {string|null} [order_id]
 * @property {string|null} [customer_id]
 * @property {string|null} [subscription_id]
 * @property {string|null} [product_id]
 */

/**
 * 生成签名
 * @param {RedirectParams} params 
 * @param {string} apiKey 
 * @returns {string}
 */
function generateSignature(params, apiKey) {
  const data = Object.entries(params)
    .map(([key, value]) => `${key}=${value ?? ""}`)
    .concat(`salt=${apiKey}`)
    .join("|");

  return crypto.createHash("sha256").update(data).digest("hex");
}

function link() {
  // 解析链接中的参数
  let query = 'request_id=1757669910221-e6530ed57c9a4bc19e9f5180be163513-101342724067275374422&checkout_id=ch_41MWWTMgJPEd5AV3xKQK1X&order_id=ord_70OpgEp7B94ryX0wv1SIEu&customer_id=cust_1L6Mi8UuYQjQdI73XAeDeo&product_id=prod_4X2LrluIcRf4g5VbZ8cTpt&signature=a4338ea7716351208f593795e449b64c1f179f6d9caafd114a9886499e8c3e93';

  const params = Object.fromEntries(
    query.split("&").map(kv => kv.split("="))
  );

  console.log(params);
  return params;
}

const parsed = link();

// 这里传入解析出来的参数 & apiKey
const apiKey = "creem_7isFvxXmIa6R2iyo162WmA";
const signature = generateSignature(parsed, apiKey);
console.log("生成的签名:", signature);
