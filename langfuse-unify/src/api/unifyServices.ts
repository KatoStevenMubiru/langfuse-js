import unifyClient from './unifyClient';

export const queryEndpoint = async (modelId: string, providerId: string, prompt: string) => {
  try {
    const response = await unifyClient.post('/query', {
      model_id: modelId,
      provider_id: providerId,
      prompt: prompt
    });
    return response.data;
  } catch (error) {
    console.error('Error querying Unify API:', error);
    throw error;
  }
};
