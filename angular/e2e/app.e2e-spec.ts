import { ExamenPokemonPage } from './app.po';

describe('examen-pokemon App', () => {
  let page: ExamenPokemonPage;

  beforeEach(() => {
    page = new ExamenPokemonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
