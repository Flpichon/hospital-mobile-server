import {Sequelize} from 'sequelize';

export const database = new Sequelize('mariadb://root:@localhost:3307/hopital', {});