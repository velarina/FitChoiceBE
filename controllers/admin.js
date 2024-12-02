const admin = require("./models/admin");

module.exports = {
  data: async (_req, res) => {
    try {
      const admins = await admin.findAll();
      return res.status(200).json({
        status: 200,
        message: "data succesfully sent",
        data: admins,
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
      const admins = await admin.findOne({
        where: {
          adminID: req.params.id,
        },
      });
      if (admin == null) {
        return res.status(404).json({
          status: 404,
          message: "data not found",
          data: null,
        });
      } else {
        return res.status(200).json({
          status: 200,
          message: "data succesfully sent",
          data: admins,
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
      const admins = await admin.create({
        adminName: req.body.adminName,
        adminEmail: req.body.adminEmail,
        password: req.body.password,
        permission: req.body.permission,
      });
      return res.status(201).json({
        status: 201,
        message: "data succesfully created",
        data: admins,
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
    console.log("type of:", req.body.adminID);
    const admins = await admin.update(
      {
        adminName: req.body.adminName,
        adminEmail: req.body.adminEmail,
        password: req.body.password,
        permission: req.body.permission,
      },
      {
        where: {
          adminID: req.params.id,
        },
      }
    );
    if (admins == null) {
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
    const admins = admin.destroy({
      where: {
        adminID: req.params.id,
      },
    });
    if (admins == null) {
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
