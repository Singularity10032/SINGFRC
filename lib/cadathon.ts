// CADathon facts shared by the /cadathon page, the home page banner and the countdown.
// Game release: Saturday, November 14, 2026, 5:30 PM Central (CST, UTC-6; DST ends Nov 1).
// Moved from 10:00 AM on the day (Mohan, 2026-11-14).
export const CADATHON_START = "2026-11-14T17:30:00-06:00"

// The game stays hidden until the release instant. Call this on the server only
// (the game page), so the text never reaches a browser early.
export const gameIsLive = () => Date.now() >= new Date(CADATHON_START).getTime()
export const CADATHON_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd3RL3jfIAdqNWFbDINjCdI9lTLIMrufMAkCkS_cCzZd2almA/viewform"
