/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Awdadw } = require('../models/Awdadw');

/**
* Creates the data
*
* awdadw Awdadw data to be created
* returns awdadw
* */
const createawdadw = ({ awdadw }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Awdadw(awdadw).save();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete the element
*
* awdadwId String the Id parameter
* no response value expected for this operation
* */
const deleteawdadw = ({ awdadwId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Awdadw.findOneAndDelete({ _id:awdadwId }).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data
*
* returns Object
* */
const getAllawdadw = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Awdadw.find().exec();
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get the element
*
* awdadwId String the Id parameter
* returns awdadw
* */
const getawdadw = ({ awdadwId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Awdadw.findById(awdadwId)
      .exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates the element
*
* awdadwId String the Id parameter
* awdadw Awdadw data to be updated (optional)
* returns awdadw
* */
const updateawdadw = ({ awdadwId, awdadw }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Awdadw.findOneAndUpdate({ _id:awdadwId },awdadw).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createawdadw,
  deleteawdadw,
  getAllawdadw,
  getawdadw,
  updateawdadw,
};
