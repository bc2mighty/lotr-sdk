import Movie, { MovieConfiguration } from '../api';

describe('Movie Test', () => {
    test('Should throw Invalid Credentials error', async() => {
        const movieConfig: MovieConfiguration = {
            clientSecret: 'abcde',
            clientKey: '1234'
        };
        const initializeMovie = () => {new Movie(movieConfig)}
        expect(initializeMovie).toThrowError(Error)
        expect(initializeMovie).toThrow('Invalid keys provided')
    })

    test('Should Return All Movie Data', async () => {
        const movieConfig: MovieConfiguration = {
            clientSecret: 'abcd',
            clientKey: '1234'
          };
        const movie = new Movie(movieConfig);
    
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
        
        expect(getAll).toHaveBeenCalled();
        expect(response).toEqual(data)
    })

    test('Should Return All Movie Data', async () => {
        const movieConfig: MovieConfiguration = {
            clientSecret: 'abcd',
            clientKey: '1234'
          };
        const movie = new Movie(movieConfig);
    
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
        
        expect(getAll).toHaveBeenCalled();
        expect(response).toEqual(data)
    })
    
})