const mongoose = require('mongoose');

const codeEntrySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      default: 'Untitled',
      trim: true,
      maxlength: 120,
    },
    language: {
      type: String,
      default: 'javascript',
      trim: true,
      maxlength: 40,
    },
    code: {
      type: String,
      required: true,
      maxlength: 50000,
    },
    description: {
      type: String,
      trim: true,
      maxlength: 500,
    },
  },
  {
    timestamps: true, // Adds createdAt + updatedAt automatically
  }
);

module.exports = mongoose.model('CodeEntry', codeEntrySchema);
