import * as functions from "firebase-functions";
import {Storage} from "@google-cloud/storage";
import * as cors from "cors";

const corsHandler = cors({origin: true});

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const storage = new Storage();


exports.onImageUpload = functions.https.onRequest((req, res) => {
  corsHandler(req, res, () => {    
    if (req.method !== "POST") {
      return res.status(500).json({
        message: "Not allowed"
      });
    }
    console.log(req);
    return res.status(200).json({
      message: "Not allowed"
    });
  })
  
});


