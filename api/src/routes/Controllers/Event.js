const { Event, Timetable, User, userEvent, UserEvent } = require("../../db");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const uploadImage = upload.single("photo");

const monthEventStructure = (eventArray) => {
  let nuevoArray = [];

  eventArray.forEach((event) => {
    let { name, day, users, description, hour } = event;

    let user = users[0].name;

    let eventRestructured = {
      name: name,
      day: day,
      responsable: user,
      description: description,
      hour: hour,
    };

    nuevoArray.push(eventRestructured);
  });
  nuevoArray = monthEventSort(nuevoArray);
  return nuevoArray;
};

const monthEventSort = (eventArray) => {
  eventArray = eventArray.sort((a, b) => {
    if (a.day > b.day) {
      return 1;
    }
    if (a.day < b.day) {
      return -1;
    }
    return 0;
  });
  return eventArray;
};

const createEvent = async (req, res) => {
  if (req.file) {
    let {
      kindOfEvent,
      name,
      description,
      profesor,
      hour,
      month,
      day,
      nameday,
      capacity,
    } = req.body;

    const imageType = req.file.mimetype;
    const imageName = req.file.originalname;
    const imageData = req.file.buffer;

    try {
      let newEvent = await Event.create({
        kindOfEvent,
        name,
        description,
        month,
        hour,
        day,
        nameday,
        capacity,
        imageType,
        imageName,
        imageData,
      });

      await newEvent.setUsers(profesor);

      res.json(newEvent);
    } catch (error) {
      res.send(error);
    }
  } else {
    let {
      kindOfEvent,
      name,
      description,
      profesor,
      hour,
      month,
      day,
      nameday,
      capacity,
    } = req.body;

    try {
      let newEvent = await Event.create({
        kindOfEvent,
        name,
        description,
        month,
        hour,
        day,
        nameday,
        capacity,
      });

      await newEvent.setUsers(profesor);

      res.json(newEvent);
    } catch (error) {
      res.send(error);
    }
  }
};

const getAllEvents = async (req, res) => {
  try {
    let events = await Event.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      ],
    });
    events.map((event) => {
      if (event.imageData) event.imageData = event.imageData.toString("base64");
    });

    res.json(events);
  } catch (error) {
    res.send(error);
  }
};

const getOneEvent = async (req, res) => {
  let { id } = req.params;
  try {
    let event = await Event.findOne({
      where: { id: id },
      include: [
        {
          model: User,
          attributes: ["name", "paymentday", "status"],
          through: {
            attributes: [],
          },
        },
      ],
    });
    if (event.imageData) {
      let eventImg = event.imageData.toString("base64");
      event["imageData"] = eventImg;
    }

    res.json(event);
  } catch (error) {
    res.send(error);
  }
};

const getEventsByMonth = async (req, res) => {
  let { month } = req.params;
  console.log(month);
  try {
    let monthEvents = await Event.findAll({
      where: { month: month },
      include: [
        {
          model: User,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      ],
    });

    monthEvents = monthEventStructure(monthEvents);

    res.json(monthEvents);
  } catch (error) {
    res.send(error);
  }
};

const updateEventProp = async (req, res, next) => {
  if (req.file) {
    const { id } = req.params;
    const { name, month, nameday, day, hour, description, profesor, capacity } =
      req.body;
    const imageType = req.file.mimetype;
    const imageName = req.file.originalname;
    const imageData = req.file.buffer;
    try {
      await Event.update(
        {
          name,
          month,
          nameday,
          day,
          hour,
          description,
          profesor,
          capacity,
          imageType,
          imageName,
          imageData,
        },
        { where: { id: id } }
      );

      const updatedEvent = await Event.findOne({ where: { id: id } });
      res.send(updatedEvent);
    } catch (error) {
      next(error);
    }
  } else {
    const { id } = req.params;
    const {
      name,
      month,
      nameday,
      day,
      hour,
      description,
      profesor,
      capacity,
      users,
    } = req.body;

    try {
      await Event.update(
        { name, month, nameday, day, hour, description, profesor, capacity },
        { where: { id: id } }
      );

      let usersId = users.map((user) => user.id);

      const updatedEvent = await Event.findOne({
        where: { id: id },
      });

      let usersForEvent = await User.findAll({
        where: { id: usersId },
      });

      updatedEvent.setUsers(usersForEvent);

      res.send(updatedEvent);
    } catch (error) {
      next(error);
    }
  }
};



const removeEvent = async (req, res) => {
  const { id } = req.params;

  try {
    await Event.destroy({ where: { id: id } });
    res.send({ message: "Entry successfully deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllEvents,
  getOneEvent,
  getEventsByMonth,
  createEvent,
  updateEventProp,
  removeEvent,
  uploadImage,

};
