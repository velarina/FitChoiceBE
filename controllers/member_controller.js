const member = require("../models/member");
const bcrypt = require('bcrypt');

module.exports = {
  data: async (_req, res) => {
    try {
      const members = await member.findAll();
      return res.status(200).json({
        status: 200,
        message: "Members succesfully sent.",
        members: members,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: 500,
        message: "Server error.",
      });
    }
  },
  index: async (req, res) => {
    try {
      const _member = await member.findOne({
        where: {
          memberID: req.params.id,
        },
      });
      if (!_member) {
        return res.status(404).json({
          status: 404,
          message: "Member not found.",
          data: null,
        });
      } else {
        return res.status(200).json({
          status: 200,
          message: "Member succesfully sent.",
          member: _member,
        });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: 500,
        message: "Server error.",
      });
    }
  },
  store: async (req, res) => {
    try {
      const _member = await member.create({
        memberName: req.body.memberName,
        membeEmail: req.body.membeEmail,
        password: await bcrypt.hash(req.body.password, 10),
        age: req.body.age,
        gender: req.body.gender,
      });
      return res.status(201).json({
        status: 201,
        message: "Member succesfully created.",
        member: _member,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: 500,
        message: "Server error.",
      });
    }
  },
  update: async (req, res) => {
    const _member = await member.update(
      {
        memberName: req.body.memberName,
        membeEmail: req.body.membeEmail,
        password: await bcrypt.hash(req.body.password, 10),
        age: req.body.age,
        gender: req.body.gender,
      },
      {
        where: {
          memberID: req.params.id,
        },
      },
    );
    if (!_member) {
      return res.status(404).json({
        status: 404,
        message: "Member not found.",
      });
    } else {
      return res.status(200).json({
        status: 200,
        message: "Member successfully updated.",
        member: _member,
      });
    }
  },
  delete: async (req, res) => {
    const _member = member.destroy({
      where: {
        memberID: req.params.id,
      },
    });
    if (!_member) {
      return res.status(404).json({
        status: 404,
        message: "Member not found",
      });
    } else {
      return res.status(200).json({
        status: 200,
        message: "Member successfully deleted",
      });
    }
  },
};
