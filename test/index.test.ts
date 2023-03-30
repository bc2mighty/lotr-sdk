import MovieSDK from "../api";
import { MovieConfiguration, MovieIDObject } from '../types';

const correctMovieSDKConfig: MovieConfiguration = {
    clientSecret: 'abcd',
    clientKey: '1234'
};
const incorrectMovieSDKConfig: MovieConfiguration = {
    clientSecret: 'abcde',
    clientKey: '1234'
};

describe('Movie SDK Test', () => {
    test('Should throw `Invalid Credentials` error when wrong clientSecret and clientKey are provided', async() => {
        const initializeMovie = () => {new MovieSDK(incorrectMovieSDKConfig)}
        expect(initializeMovie).toThrowError(Error)
        expect(initializeMovie).toThrow('Invalid keys provided')
    })

    test('Should return all movie data', async () => {
        const movie = new MovieSDK(correctMovieSDKConfig);
    
        const data = [
            {
                "_id": "5cd95395de30eff6ebccde56",
                "name": "The Lord of the Rings Series",
                "runtimeInMinutes": 558,
                "budgetInMillions": 281,
                "boxOfficeRevenueInMillions": 2917,
                "academyAwardNominations": 30,
                "academyAwardWins": 17,
                "rottenTomatoesScore": 94
            },
            {
                "_id": "5cd95395de30eff6ebccde57",
                "name": "The Hobbit Series",
                "runtimeInMinutes": 462,
                "budgetInMillions": 675,
                "boxOfficeRevenueInMillions": 2932,
                "academyAwardNominations": 7,
                "academyAwardWins": 1,
                "rottenTomatoesScore": 66.33333333
            }
        ]
        const getAll = jest.fn().mockImplementation(movie.getAll).mockResolvedValue(data)
    
        const response = await getAll();
        
        expect(getAll).toHaveBeenCalledTimes(1);
        expect(response).toEqual(data)
    })

    test('Should return a single movie using the provided movieID object', async () => {
        const movie = new MovieSDK(correctMovieSDKConfig);
    
        const data = [
            {
                "_id": "5cd95395de30eff6ebccde56",
                "name": "The Lord of the Rings Series",
                "runtimeInMinutes": 558,
                "budgetInMillions": 281,
                "boxOfficeRevenueInMillions": 2917,
                "academyAwardNominations": 30,
                "academyAwardWins": 17,
                "rottenTomatoesScore": 94
            },
        ]
        const getById = jest.fn().mockImplementation(movie.getById).mockResolvedValue(data)
    
        const movieIDObj: MovieIDObject = {
            id: '5cd95395de30eff6ebccde56'
          };
        const response = await getById(movieIDObj);
        
        expect(getById).toHaveBeenCalledTimes(1);
        expect(response).toEqual(data)
    })

    test('Should return Movie quotes', async () => {
        const movie = new MovieSDK(correctMovieSDKConfig);
    
        const data = [
            {
                "_id": "5cd96e05de30eff6ebcce7e9",
                "dialog": "Deagol!",
                "movie": "5cd95395de30eff6ebccde5d",
                "character": "5cd99d4bde30eff6ebccfe9e",
                "id": "5cd96e05de30eff6ebcce7e9"
            },
            {
                "_id": "5cd96e05de30eff6ebcce7ea",
                "dialog": "Deagol!",
                "movie": "5cd95395de30eff6ebccde5d",
                "character": "5cd99d4bde30eff6ebccfe9e",
                "id": "5cd96e05de30eff6ebcce7ea"
            },
        ]
        const getQuotes = jest.fn().mockImplementation(movie.getQuotes).mockResolvedValue(data)
    
        const movieIDObj: MovieIDObject = {
            id: '5cd95395de30eff6ebccde56'
          };
        const response = await getQuotes(movieIDObj);
        
        expect(getQuotes).toHaveBeenCalledTimes(1);
        expect(response).toEqual(data)
    })
})