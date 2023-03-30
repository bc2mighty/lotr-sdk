import axios, { AxiosResponse } from 'axios';
import { MovieConfiguration, MovieFullResponse, MovieIDObject, MovieQuoteData, MovieQuoteFullResponse, MovieResponseData } from './types';
import { getAxiosErrorMessage } from './utils/axios';

/**
 * @class Movie
 */
export class MovieSDK {
  private readonly clientSecret = 'abcd';
  private readonly clientKey = '1234';
  private readonly movieAccessKey = 'bLP4jIKaknNFbz7C4UXS';

  /**
     * Constructor accepts clientSecret and clientKey
     * It compares the clientSecret and clientKet with our Movie class credentials
     *
     * @param movieConfig
     */
  constructor (movieConfig: MovieConfiguration) {
    if (movieConfig.clientKey !== this.clientKey || movieConfig.clientSecret !== this.clientSecret) { throw new Error('Invalid keys provided'); }
  }

  /**
     * Gets all the lord of the ring movies
    */
  public async getAll (): Promise<MovieResponseData[] | null> {
    try {
      const response: AxiosResponse<MovieFullResponse> = await axios.get('https://the-one-api.dev/v2/movie', {
        headers: {
          Authorization: `Bearer ${this.movieAccessKey}`,
          'Content-Type': 'json'
        }
      });

      const docs: MovieResponseData[] = response?.data?.docs;
      return docs;
    } catch (error: any) {
      console.log(error);
      
      if (!error?.isAxiosError) return null;
      return await getAxiosErrorMessage(error);
    }
  }

  /**
     * Gets one movie
     * Uses movieId parameter to fetch a particular lords of the ring movie
     *
     * @param movieId
     * @returns
     */
  public async getById (movieId: MovieIDObject): Promise<MovieResponseData[] | null> {
    try {
      const response: AxiosResponse<MovieFullResponse> = await axios.get(`https://the-one-api.dev/v2/movie/${movieId.id}`, {
        headers: {
          Authorization: `Bearer ${this.movieAccessKey}`,
          'Content-Type': 'json'
        }
      });

      const docs: MovieResponseData[] = response.data.docs;
      return docs;
    } catch (error: any) {
      if (!error?.isAxiosError) return null;
      return await getAxiosErrorMessage(error);
    }
  }

  /**
     * Gets all quotes of a movie using movie id as parameter
     *
     * @param movieQuote
     */
  public async getQuotes (movieQuote: MovieIDObject): Promise<MovieQuoteData[] | null> {
    try {
      const response: AxiosResponse<MovieQuoteFullResponse> = await axios.get(`https://the-one-api.dev/v2/movie/${movieQuote.id}/quote`, {
        headers: {
          Authorization: `Bearer ${this.movieAccessKey}`,
          'Content-Type': 'json'
        }
      });

      const docs: MovieQuoteData[] = response.data.docs;
      return docs;
    } catch (error: any) {
      if (!error?.isAxiosError) return null;
      return await getAxiosErrorMessage(error);
    }
  }
}