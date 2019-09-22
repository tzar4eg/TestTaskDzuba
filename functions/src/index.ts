import * as functions from "firebase-functions";
import * as cors from "cors";
import * as admin from "firebase-admin";
import * as os from "os";
import * as path from "path";
import * as fs from "fs";
import serviceAccount from "./testtaskdzyuba-firebase-adminsdk-z306v-ea5dfdd08d";
import * as Busboy from "busboy";
import { Storage } from "@google-cloud/storage";
const corsHandler = cors({ origin: "*" });

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount.toString()),
  databaseURL: "https://testtaskdzyuba.firebaseio.com"
});
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const gcs = new Storage();

exports.onImageUpload = functions.https.onRequest((req, res) => {
  
  corsHandler(req, res, () => {
    
    if (req.method !== "POST") {
      return res.status(500).json({
        message: "Not allowed"
      });
    }

    const busboy = new Busboy({ headers: req.headers });
    let uploadData: any = null;

    busboy.on(
      "file",
      (
        fieldname: any,
        file: any,
        filename: any,
        encoding: any,
        mimetype: any
      ) => {
        const filepath = path.join(os.tmpdir(), filename);
        uploadData = { file: filepath, type: mimetype };
        file.pipe(fs.createWriteStream(filepath));
      }
    );

    busboy.on("finish", () => {
      const bucket = gcs.bucket("testtaskdzyuba.appspot.com");
      bucket
        .upload(uploadData.file, {
          metadata: {
            metadata: {
              contentType: uploadData.type
            }
          }
        })
        .then(el => {
          res.status(200).json({ message: `${el}` });
        })
        .catch(err => {
          res.status(500).json({
            error: err,
          })
        })
    });
    
    busboy.end(req.rawBody);   
    return 
  });
});
