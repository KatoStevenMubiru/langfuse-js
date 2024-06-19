import axios from 'axios';
import langfuse from './langfuseClient.js';

const unifyClient = axios.create({
  baseURL: 'https://api.unify.ai/v0/',
  headers: {
    Authorization: `Bearer ${process.env.UNIFY_API_KEY}`,
    'Content-Type': 'application/json'
  }
});

const generateWithTrace = async (model, messages, stream = false) => {
  const trace = langfuse.trace({
    name: "UnifyAI Request",
    tags: ["UnifyAI", "API Request"],
    metadata: { model }
  });

  try {
    const response = await unifyClient.post('/chat/completions', {
      model,
      messages,
      stream
    });

    trace.event({
      name: "API Response",
      metadata: { statusCode: response.status, data: response.data }
    });

    trace.score({
      name: "API Success",
      value: 1,
      comment: "Successful API call"
    });

    return response.data;
  } catch (error) {
    trace.event({
      name: "API Error",
      metadata: { error: error.message },
      level: "ERROR"
    });

    trace.score({
      name: "API Failure",
      value: 0,
      comment: "Failed API call"
    });

    throw error;
  } finally {
    // Ensure this method exists and is correctly used
    if (typeof trace.shutdown === 'function') {
      await trace.shutdown();
    } else {
      console.warn('trace.shutdown is not a function');
    }
  }
};

export default generateWithTrace;
