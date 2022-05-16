/**
 * The AwdadwController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/AwdadwService');
const createawdadw = async (request, response) => {
  await Controller.handleRequest(request, response, service.createawdadw);
};

const deleteawdadw = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteawdadw);
};

const getAllawdadw = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllawdadw);
};

const getawdadw = async (request, response) => {
  await Controller.handleRequest(request, response, service.getawdadw);
};

const updateawdadw = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateawdadw);
};


module.exports = {
  createawdadw,
  deleteawdadw,
  getAllawdadw,
  getawdadw,
  updateawdadw,
};
