import supertest, { SuperTest, Test } from 'supertest'
import server from '../../index'

const request:SuperTest<Test> = supertest(server)

describe('POST /api/calculate/highestOccurrence', () => {
  afterAll(() => {
    server.close();
  });
  it('should return he array item with the highest frequency', (done) => {
    const input: Array<string | number>  = [2, 3, 2, 3, 2, 3, 4];
    const res: Test =  request.post('/api/calculate/highestOccurrence')
    .set('Content-type', 'application/json')
    .send({ operators: input })
    .end(function(err, res) {
      if (err) return done(err);
      expect([2, 3]).toStrictEqual(res.body)
      done();
    });
  });
});

describe('POST /api/calculate/maxSubarraySum', () => {
  afterAll(() => {
    server.close();
  });
  it('should return is the max number of the subarrays', (done) => {
    const input: Array<number>  = [1,2,5,2,8,1,5];
    const res: Test =  request.post('/api/calculate/maxSubarraySum')
    .set('Content-type', 'application/json')
    .send({ operators: input, length_subarray: 4 })
    .end(function(err, res) {
      if (err) return done(err);
      expect(17).toStrictEqual(res.body)
      done();
    });
  });
});

describe('POST /api/calculate/averagePair', () => {
  afterAll(() => {
    server.close();
  });
  it('should return if the average of the pair equals the target average.', (done) => {
    const input: Array<number>  = [1,2,3];
    const res: Test =  request.post('/api/calculate/averagePair')
    .set('Content-type', 'application/json')
    .send({ operators: input, number_average: 2.5 })
    .end(function(err, res) {
      if (err) return done(err);
      expect(true).toStrictEqual(res.body)
      done();
    });
  });
});