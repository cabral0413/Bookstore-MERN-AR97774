const express = require("express");
const mongoose = require("mongoose");
const bookRoutes = require("./routes/book-routes");
const staffRoutes = require('./routes/staff-routes');
const cors = require("cors");
const app = express();