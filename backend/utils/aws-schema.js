const AWS = require("aws-sdk");

const ID = "AKIAU3VWJSGRCFMCVK5E";
const SECRET = "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";

AWS.config.update({
  region: "us-east-2",
  accessKeyId: ID,
  secretAccessKey: SECRET
});

const s3 = new AWS.S3({ apiVersion: "2006-03-01" });

async (req, res, next) => {
  try {
    //getting html string from req.body
    let htmlString = req.body.data;
    const params = {
      Bucket: "", // pass your bucket name
      Key: "myfiles.html", // pass your file name that you want to update!!!!!
      Body: htmlString
    };
    s3.upload(params, (s3Err, data) => {
      if (s3Err) throw s3Err;
      res.send(htmlString);
      console.log(`File uploaded successfully at ${data.Location}`);
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({ code: 0, message: "Error Occured Plz try again" });
  }
};
