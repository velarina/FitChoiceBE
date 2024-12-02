const member = require("./models/member");

module.exports = {
  data: async (_req, res) => {
    try {
      const members = await member.findAll();
      return res.status(200).json({
        status: 200,
        message: "data succesfully sent",
        data: members,
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
      const members = await member.findOne({
        where: {
          memberID: req.params.id,
        },
      });
      if (member == null) {
        return res.status(404).json({
          status: 404,
          message: "data not found",
          data: null,
        });
      } else {
        return res.status(200).json({
          status: 200,
          message: "data succesfully sent",
          data: members,
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
      const members = await member.create({
        memberName: req.body.memberName,
        membeEmail: req.body.membeEmail,
        password: req.body.password,
        age: req.body.age,
        gender: req.body.gender,
      });
      return res.status(201).json({
        status: 201,
        message: "data succesfully created",
        data: members,
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
    console.log("type of:", req.body.memberID);
    const members = await member.update(
      {
        memberName: req.body.memberName,
        membeEmail: req.body.membeEmail,
        password: req.body.password,
        age: req.body.age,
        gender: req.body.gender,
      },
      {
        where: {
          memberID: req.params.id,
        },
      }
    );
    if (members == null) {
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
    const members = member.destroy({
      where: {
        memberID: req.params.id,
      },
    });
    if (members == null) {
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
