const Htmlfile = require("../models/Html.js");
const fs = require("fs");
const AWS = require("aws-sdk");

const ID = "AKIAU3VWJSGRCFMCVK5E";
const SECRET = "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";

AWS.config.update({
  region: "us-east-2",
  accessKeyId: ID,
  secretAccessKey: SECRET
});

const s3 = new AWS.S3({ apiVersion: "2006-03-01" });

const controller = {
  gethtmldata: async (req, res) => {
    try {
      let data = await Htmlfile.find();
      res.send({ code: 1, data: "SuccessHtml" });
    } catch (e) {
      console.log(e);
      res.status(500).send({ code: 0, message: e });
    }
  },

  createhtmldata: async (req, res, next) => {
    console.log(req.body.data);
    try {
      //getting html string from req.body
      let htmlString = req.body.data;
      const params = {
        Bucket: "final2020", // pass your bucket name
        Key: "myfiles.html",
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
  },

  updatehtmldata: async (req, res) => {
    try {
      let result = await Htmlfile.findOneAndUpdate(
        {
          _id: req.params.id
        },
        {
          $set: {
            name: req.body.name,
            createdBy: req.body.createdBy,
            filelocation: req.body.filelocation,
            //addedToProduct: req.body.addedToProduct,
            createDate: req.body.createDate,
            updateDate: req.body.updateDate
          }
        }
      );

      {
        upsert: true;
      }
      res.send({ code: 1, message: "Updated Successfully!!! " });
    } catch (e) {
      console.log(e);
      res.status(500).send({ code: 0, message: e });
    }
  }
};

module.exports = controller;
