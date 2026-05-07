import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.get('/health', (_, res) => {
  res.json({
    status: 'UP'
  });
});

app.get('/', (_, res) => {
  res.json({
    service: '{{ values.name }}',
    status: 'running'
  });
});

export default app;
