
const { sequelize, People } = require('../src/models');

// setup script
beforeAll(async () => {
  await sequelize.sync();
});

describe('People Model', () => {
  it('Should create a people row', async () => {
    const brock = await People.create({
      name: 'brock',
      age: 23,
      heightInches: 76,
      eyeColor: 'blue',
    });

    expect(brock.name).toEqual('brock');
    expect(brock.age).toEqual(23);
    expect(brock.heightInches).toEqual(76);
    expect(brock.eyeColor).toEqual('blue');
  });

  xit('Should read a pokemon from the table', async () => {});
});

