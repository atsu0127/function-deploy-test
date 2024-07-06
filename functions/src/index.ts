import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

export const addMessage = functions.https.onRequest(
  async (req: any, res: any) => {
    const original = req.query.text;
    res.json({ result: `Message with ID: ${original} added.` });
  }
);
