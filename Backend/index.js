require("dotenv").config();
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const PORT = process.env.PORT || 5001;
const passport = require("passport");
const mongoose = require("mongoose");

const app = express();


