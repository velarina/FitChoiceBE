const healthIssue = require("../models/healthIssue");

module.exports = {
  data: async (_req, res) => {
    try {
      const healthIssues = await healthIssue.findAll();
      return res.status(200).json({
        status: 200,
        message: "data succesfully sent",
        data: healthIssues,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: 500,
        message: error,
        data: null,
      });
    }
  },
  index: async (req, res) => {
    try {
      const healthIssues = await healthIssue.findOne({
        where: {
          healthIssueID: req.params.id,
        },
      });
      if (healthIssue == null) {
        return res.status(404).json({
          status: 404,
          message: "data not found",
          data: null,
        });
      } else {
        return res.status(200).json({
          status: 200,
          message: "data succesfully sent",
          data: healthIssues,
        });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: 500,
        message: error.body,
        data: null,
      });
    }
  },
  store: async (req, res) => {
    try {
      const healthIssues = await healthIssue.create({
        healthIssueName: req.body.healthIssueName,
        healthIssueDesc: req.body.healthIssueDesc,
        prohibition: req.body.prohibition,
      });
      return res.status(201).json({
        status: 201,
        message: "data succesfully created",
        data: healthIssues,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: 500,
        message: error.message,
        data: null,
      });
    }
  },
  update: async (req, res) => {
    console.log("type of:", req.body.healthIssueID);
    const healthIssues = await healthIssue.update(
      {
        healthIssueName: req.body.healthIssueName,
        healthIssueDesc: req.body.healthIssueDesc,
        prohibition: req.body.prohibition,
      },
      {
        where: {
          healthIssueID: req.params.id,
        },
      },
    );
    if (healthIssues == null) {
      return res.status(404).json({
        status: 404,
        message: "data not found",
        data: null,
      });
    } else {
      return res.status(200).json({
        status: 200,
        message: "data successfully updated",
      });
    }
  },
  delete: async (req, res) => {
    const healthIssues = healthIssue.destroy({
      where: {
        healthIssueID: req.params.id,
      },
    });
    if (healthIssues == null) {
      return res.status(404).json({
        status: 404,
        message: "data not found",
        data: null,
      });
    } else {
      return res.status(200).json({
        status: 200,
        message: "data successfully deleted",
      });
    }
  },
};
