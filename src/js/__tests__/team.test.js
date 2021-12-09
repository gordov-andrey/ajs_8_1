import Team from '../team';

test('Добавляем уникально юзера', () => {
  const team = new Team();
  team.add('konanVarvar');

  expect([...team.members]).toEqual(team.toArray());
});

test('Добавляем несколько', () => {
  const team = new Team();
  team.addAll(['konanVarvar', 'velikan']);

  expect(['konanVarvar', 'velikan']).toEqual(team.toArray());
});

test('Добавляем дважды', () => {
  const team = new Team();
  team.add('konanVarvar');

  expect(() => team.add('konanVarvar')).toThrowError(new Error('Персонаж уже существует!'));
});
