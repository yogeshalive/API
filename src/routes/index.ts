import express from 'express';
import { Deserialize } from 'cerialize';

import {Tree} from '../models/sample'


export const indexRouter = express.Router();


/* GET home page. */
indexRouter.get('/', function(req, res, next) {
  res.send({ title: 'Express' });
});

indexRouter.get('/api', function(req, res, next) {
  res.send({ title: 'Express' });
});


const json = {
  species: 'Oak',
  barkType: { roughness: 1 },
  leafs: [ {color: 'red', blooming: false, bloomedAt: 'Mon Dec 07 2015 11:48:20 GMT-0500 (EST)' } ],
}
const tree = Deserialize(json, Tree);

console.log(tree);

