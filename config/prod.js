module.exports = {
    googleProjectID: process.env.GOOGLE_PROJECT_ID,
    dialogFlowSessionID: process.env.DIALOGFLOW_SESSION_ID,
    dialogFlowSessionLanguageCode: process.env.DIAGLOGFLOW_LANGUAGE_CODE,
    googlePrivateKey: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/gm,'\n'),
    googleClientEmail: process.env.GOOGLE_CLIENT_EMAIL
}