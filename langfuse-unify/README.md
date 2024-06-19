# UnifyAI and Langfuse Integration

Overview

This project integrates UnifyAI with Langfuse to enhance API interaction observability through advanced logging and tracing.

### Project Structure

```
1/langfuse-unify
2│
3├── /src
4│   ├── /config
5│   │   └── env.js          # Loads environment variables
6│   ├── /clients
7│   │   ├── langfuseClient.js       # Initializes Langfuse client
8│   │   └── unifyLangfuseClient.js  # Integrates UnifyAI with Langfuse
9│   ├── /utils
10│   │   └── logging.js      # Optional logging utilities
11│   ├── app.js              # Main application logic
12│   └── index.js            # Application entry point
13├── .env                    # Stores sensitive configuration details
14├── .gitignore              # Specifies files to ignore in version control
15├── package.json            # Project metadata and dependencies
16└── README.md               # Project documentation
```

### Key Components

Environment Variables (.env):
Securely stores API keys and URLs.

Langfuse Client (src/clients/langfuseClient.js):
Configures and initializes the Langfuse client.

UnifyLangfuse Client (src/clients/unifyLangfuseClient.js):
Manages API calls to UnifyAI and logs interactions using Langfuse.

### Usage

Set up your environment variables in .env

```env
LANGFUSE_SECRET_KEY=<your langfuse secret key>
LANGFUSE_PUBLIC_KEY=<your langfuse public key>
LANGFUSE_BASEURL=<your langfuse base url>
UNIFY_API_KEY=<your unify api key>

```

The langfuse api keys can be foung [here](https://langfuse.com) the unify api key can be got from [here](https://unify.ai)

Then run the application using:

```bash
npm install
npm start
```

This setup provides a solid foundation for robust API interaction logging and tracing with UnifyAI and Langfuse. Adjust configurations as needed for your specific environment.
