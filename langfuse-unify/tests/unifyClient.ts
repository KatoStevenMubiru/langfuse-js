import unifyClient from '../src/api/unifyClient';
import axios from 'axios';

jest.mock('axios');

describe('Unify API Client', () => {
  it('should make API calls with authorization header', async () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.create.mockReturnThis();
    mockedAxios.post.mockResolvedValue({ data: 'response' });

    const result = await unifyClient.post('/test', { data: 'test' });

    expect(result.data).toEqual('response');
    expect(mockedAxios.post).toHaveBeenCalledWith('/test', { data: 'test' });
    expect(mockedAxios.create).toHaveBeenCalledWith({
      baseURL: 'https://api.unify.ai/v0',
      headers: {
        'Authorization': `Bearer undefined`
      }
    });
  });
});
