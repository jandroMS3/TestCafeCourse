import { Selector } from 'testcafe';

fixture`Selectors session`
    .page`https://www.pokemon.com/es`
    .skipJsErrors(true);

test('Search pokemon', async t => {
    // Starts at https://www.pokemon.com/es
    console.log('Selector Test Is Working')

    //Save variable by id
    const pokedexSelector = Selector('#explore');
    const AcceptCookies = Selector('#onetrust-accept-btn-handler');

    await t
    .click(AcceptCookies)
    .wait(3000)
    //Click on the Pokedex button
    .click(pokedexSelector)
    .wait(3000)
    
});