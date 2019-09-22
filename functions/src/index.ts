import * as functions from "firebase-functions";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.onImageUpload = functions.https.onRequest((req, res) => {
  if (req.method !== "POST") {
    return res.status(500).json({
      message: "Not allowed"
    });
  }
});
