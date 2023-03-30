import express, { Request, Response } from 'express';
import Movie from '../api';
import { MovieConfiguration, MovieIDObject } from '../types';
const app = express();

const movieConfig: MovieConfiguration = {
  clientSecret: 'abcd',
  clientKey: '1234'
};
const movie = new Movie(movieConfig);

app.get('/', async function (req: Request, res: Response) {
  try {
    const data = await movie.getAll();
    return res.status(200).json(data);
  } catch (error: any) {
    console.log(error);
    return res.status(400).json({ message: error?.message ?? 'Something went wrong' });
  }
});

app.get('/:id', async function (req: Request, res: Response) {
  try {
    const movieIDObj: MovieIDObject = {
      id: req.params.id
    };
    const data = await movie.getById(movieIDObj);
    return res.status(200).json(data);
  } catch (error: any) {
    console.log(error);
    return res.status(400).json({ message: error?.message ?? 'Something went wrong' });
  }
});

app.get('/:id/:quote', async function (req: Request, res: Response) {
  try {
    const movieIDObj: MovieIDObject = {
      id: req.params.id
    };
    const data = await movie.getByQuote(movieIDObj);
    return res.status(200).json(data);
  } catch (error: any) {
    console.log(error);
    return res.status(400).json({ message: error?.message ?? 'Something went wrong' });
  }
});

app.listen(5050, () => {
  console.log('listening on port 5050');
});
