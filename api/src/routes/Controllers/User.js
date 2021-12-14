const { User, Routine, Exercise, Shift } = require("../../db");
const bcrypt = require("bcrypt");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const uploadImage = upload.single("photo");

const createUser = async (req, res) => {
  const { name, lastname, paymentday } = req.body;

  let { email, password } = req.body;
  password = await bcrypt.hash(password, 10);

  try {
    const duplicatedMail = await User.findOne({ where: { email: email } });
    if (duplicatedMail === null) {
      let newUser = await User.create({
        name,
        lastname,
        email,
        password,
        paymentday,
      });

      res.json(newUser);
    } else {
      res.send("User is already registered");
    }
  } catch (err) {
    res.send(err);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.findAll();
    let filterAdmin = allUsers.filter((user) => user.isadmin === false);
    filterAdmin.map((users) => {
      if (users.imageData) users.imageData = users.imageData.toString("base64");
    });
    res.json(filterAdmin);
  } catch (err) {
    res.send(err);
  }
};

const getSpeficicUser = async (req, res) => {
  const { id } = req.params;
  try {
    let specificUser = await User.findOne({ where: { id: id } });
    if (specificUser.imageData) {
      let userImg = specificUser.imageData.toString("base64");
      specificUser["imageData"] = userImg;
    }
    res.json(specificUser);
  } catch (err) {
    res.send(err);
  }
};
const modifyUser = async (req, res) => {
  if (req.file) {
    const { id } = req.params;
    const {
      name,
      lastname,
      email,
      age,
      height,
      weight,
      phoneNumber,
      customRoutine,
      benchpress,
      backsquat,
      pushpress,
      snatch,
      clean,
      running,
      pullups,
      password,
      paymentday,
      isadmin,
      isprofessor,
      isuser,
      newsletter,
      notifications
    } = req.body;
    const imageType = req.file.mimetype;
    const imageName = req.file.originalname;
    const imageData = req.file.buffer;

    try {
      await User.update(
        {
          name,
          lastname,
          email,
          age,
          height,
          weight,
          phoneNumber,
          customRoutine,
          backsquat,
          pushpress,
          snatch,
          clean,
          running,
          pullups,
          password,
          paymentday,
          isadmin,
          isprofessor,
          isuser,
          imageType,
          imageName,
          imageData,
          newsletter,
          notifications
        },
        { where: { id: id } }
      );
      const newUser = await User.findOne({ where: { id: id } });
      res.json(newUser);
    } catch (error) {
      res.send(error);
    }
  } else {
    const { id } = req.params;
    const {
      name,
      lastname,
      email,
      age,
      height,
      weight,
      phoneNumber,
      customRoutine,
      backsquat,
      pushpress,
      snatch,
      clean,
      running,
      pullups,
      password,
      paymentday,
      isadmin,
      isprofessor,
      isuser,
      notifications,
      newsletter
    } = req.body;

    try {
      await User.update(
        {
          name,
          lastname,
          email,
          age,
          height,
          weight,
          phoneNumber,
          customRoutine,
          backsquat,
          pushpress,
          snatch,
          clean,
          running,
          pullups,
          password,
          paymentday,
          isadmin,
          isprofessor,
          isuser,
          notifications,
          newsletter
        },
        { where: { id: id } }
      );
      const newUser = await User.findOne({ where: { id: id } });
      res.json(newUser);
    } catch (error) {
      res.send(error);
    }
  }
};

const createRoutine = async (req, res) => {
  const { id } = req.params;
  try {
    const createPersonalRoutine = await Routine.findOne({ where: { id: id } });
    res.json(createPersonalRoutine);
  } catch (err) {
    res.send(err);
  }
};

const assignShift = async (req, res) => {
  const { id } = req.params;
  try {
    const getOneShift = await Shift.findOne({ where: { id: id } });
    res.json(getOneShift);
  } catch (err) {
    res.send(err);
  }
};
const getShift = async (req, res) => {
  const { id } = req.params;
  try {
    const getShift = await User.findAll({ where: { id: id }, include: Shift });
    res.json(getShift);
  } catch (err) {
    res.send(err);
  }
};

const getRoutine = async (req, res) => {
  const { id } = req.params;
  try {
    const getRoutine = await Routine.findOne({
      where: { id: id },
      include: [
        {
          model: Exercise,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      ],
    });
    res.json(getRoutine);
  } catch (err) {
    res.send(err);
  }
};

const deleteRoutine = async (req, res) => {
  const { id } = req.params;
  try {
    await Routine.destroy({ where: { id: id } });
    res.json("Routine deleted");
  } catch (err) {
    res.send(err);
  }
};

const updateRoutine = async (req, res) => {
  const { id, prop } = req.params;
  const { update } = req.body;
  try {
    const oneRoutine = await Routine.findOne({ where: { id: id } });
    oneRoutine[prop] = update;
    await oneRoutine.save();
    res.send(oneRoutine);
  } catch (error) {
    res.send(error);
  }
};

const getUserPayStatus = async (req, res) => {
  let { date } = req.body;

  date = new Date(date);
  try {
    let clients = await User.findAll({
      where: { isuser: true },
    });

    let alDia = [];
    let fueraDeTermino = [];

    for (let i = 0; i < clients.length; i++) {
      if (clients[i].dataValues.paymentday > date) {
        alDia.push(clients[i]);
      } else {
        fueraDeTermino.push(clients[i]);
      }
    }

    alDia.map((users) => {
      if (users.imageData) users.imageData = users.imageData.toString("base64");
    });

    fueraDeTermino.map((users) => {
      if (users.imageData) users.imageData = users.imageData.toString("base64");
    });

    let payStatus = {
      upToDate: alDia,
      offToDate: fueraDeTermino,
    };

    res.send(payStatus);
  } catch (error) {
    res.send(error);
  }
};

const getOneUserPayStatus = async (req, res) => {
  let { date, id } = req.body;
  date = new Date(date);
  
  try {
    let client = await User.findOne({
      where: { id: id },
    });
    
    if (client.paymentday < date) {
      client.paystatus = "NO-PAGO";
    } else {
      client.paystatus = "PAGO";
    }

    await client.save();

    res.send({ message: "PayStatus changed" });
  } catch (error) {
    res.send(error);
  }
};

const switchStatus = async (req, res) => {
  let { id } = req.body;
  try {
    let client = await User.findOne({ where: { id: id } });

    if (client.status === "ACTIVO") {
      client.status = "INACTIVO";
    } else {
      client.status = "ACTIVO";
    }

    await client.save();

    res.send({ message: "Status changed" });
  } catch (error) {
    res.send(error);
  }
};
const sortAllUsers = async (req, res) => {
  let { prop, order } = req.query;
  try {
    let allUsers = await User.findAll();
    allUsers = allUsers.sort((a, b) => {
      if (a[prop] < b[prop]) {
        if (order === "z-a") {
          return 1;
        } else {
          return -1;
        }
      }
      if (a[prop] > b[prop]) {
        if (order === "z-a") {
          return -1;
        } else {
          return 1;
        }
      }
      return 0;
    });
    res.send(allUsers);
  } catch (error) {
    res.send(error);
  }
};

const getProfessors = async (req, res) => {
  try {
    let allProfessors = await User.findAll({ where: { isprofessor: true } });
    res.send(allProfessors);
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  createUser,
  getSpeficicUser,
  getAllUsers,
  createRoutine,
  getRoutine,
  deleteRoutine,
  updateRoutine,
  modifyUser,
  getUserPayStatus,
  assignShift,
  uploadImage,
  getShift,
  getOneUserPayStatus,
  switchStatus,
  sortAllUsers,
  getProfessors,
};
