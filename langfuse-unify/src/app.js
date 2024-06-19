import generateWithTrace from './clients/unifyLangfuseClient.js';

const run = async () => {
  try {
    const model = 'mistral-7b-instruct-v0.2@fireworks-ai';
    const messages = [{ role: 'user', content: 'Explain who Newton was and his entire theory of gravitation.' }];
    const response = await generateWithTrace(model, messages, true);
    console.log('Generated text:', response);
  } catch (error) {
    console.error('Error during API call:', error);
  }
};

run();
