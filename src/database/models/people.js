/* eslint-disable */
const isCPFValid = require("../../utils/validateCPFHelper.js");

"use strict";
const {
    Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class People extends Model {
        
        static associate(models) {
            People.hasMany(models.Course, {
                foreignKey:'teacher_id'
            });
            People.hasMany(models.Registration, {
                foreignKey:'student_id',
                scope: {
                    status: 'matriculado'
                },
                as: 'courseRegistrations'
            });
            People.hasMany(models.Registration, {
                foreignKey:'student_id',
                as: "allCourseRegistrations"
            });
        }
    }
    People.init({
        name: {
            type: DataTypes.STRING,
            validate: {
                len: {
                    args: [3, 30],
                    msg: "The name must has betweem 3 and 30 letters!"
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: {
                    args: true,
                    msg: "Email format invalid!"
                }
            }
        },
        cpf: {
            type: DataTypes.STRING,
            validate: {
                cpfIsValid: (cpf) => {
                    if(!isCPFValid(cpf)) throw new Error("CPF number invalid")
                }
            }
        },
        active: DataTypes.BOOLEAN,
        role: DataTypes.STRING
    }, {
        sequelize,
        modelName: "People",
        tableName: "people",
        paranoid: true,
        defaultScope: { // defines a default filter
            where: { active: true } 
        },
        scopes: {
            allRegisters: {
                where: {}
            }
        }
    });
    return People;
};