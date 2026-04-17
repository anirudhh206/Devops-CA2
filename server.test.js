const request = require('supertest');
const { app, server } = require('./server');

afterAll(() => {
  server.close();
});

describe('GET /health', () => {
  it('should return 200 with status OK', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('OK');
    expect(res.body.message).toBe('Server is running');
    expect(res.body.timestamp).toBeDefined();
  });
});
