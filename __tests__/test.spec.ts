export default describe('check', () => {
    it('test',  () => {
        expect('test').toContain('es');
    });
    afterAll(done => {
        done();
    })
});
