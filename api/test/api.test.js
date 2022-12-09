import chai  from 'chai';
import chaiHttp from 'chai-http';
import server from '../index.js';

chai.use(chaiHttp);
chai.should();

describe('test integration API /file', () => {
  describe('/GET files', () => {
    it('it should GET all files', (done) => {
      chai.request(server)
          .get('/api/files')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
            done();
          });
    });
  });
  
  describe('/GET list', () => {
    it('it should GET list files - Extra', (done) => {
      chai.request(server)
          .get('/api/files/list')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
            done();
          });
    });
  });
  
  describe('/GET /data?fileName=nameFile', () => {
    it('it should GET detail file by nameFile - Extra', (done) => {
      chai.request(server)
          .get('/api/files/data?fileName=test2.csv')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
            done();
          });
    });
  });

  describe('/GET /data?fileName=nameFile', () => {
    it('it should GET detail file by nameFile not exist - Extra', (done) => {
      chai.request(server)
          .get('/api/files/data?fileName=test22.csv')
          .end((err, res) => {
                res.should.have.status(404);
            done();
          });
    });
  });

  describe('/GET /', () => {
    it('it should GET route not found - Extra', (done) => {
      chai.request(server)
          .get('/api/demo')
          .end((err, res) => {
                res.should.have.status(404);
            done();
          });
    });
  });
})