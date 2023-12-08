const enhancedQuerySelectorAll = require('./11EnhancedQuery');

describe('enhancedQuerySelectorAll', () => {
  document.body.innerHTML = `
    <section>
      <div id="1" class="note"><input type="checkbox" class="is-complete" checked></div>
      <div id="2" class="note"></div>
      <div id="3" class="note"><input type="checkbox" class="is-complete" checked></div>
      <div id="4" class="note"></div>
      <div id="5" class="note"><input type="checkbox" class="is-complete" checked></div>
    </section>
  `;
  it('should select the correct divs', () => {
    const result = enhancedQuerySelectorAll("div.note < input.is-complete[checked]");

    expect(result.length).toBe(3);
    expect(result.map(el => el.id)).toEqual(['1', '3', '5']);
  });
});
