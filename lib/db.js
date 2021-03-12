const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('mysql://root:@Ragnarok742@@localhost/stocks', {logging: false});
module.exports = {sequelize};