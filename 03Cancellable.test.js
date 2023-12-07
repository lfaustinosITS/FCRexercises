const cancellableFetch = require('./03Cancellable');

describe('cancellableFetch', () => {
  it('should fetch data successfully', async () => {
    const url = 'http://api.nobelprize.org/2.1/nobelPrize/che/2004';
    const result = cancellableFetch(url);

    const data = await result;

    expect(data).toEqual([{"awardYear": "2004", "category": {"en": "Chemistry", "no": "Kjemi", "se": "Kemi"}, "categoryFullName": {"en": "The Nobel Prize in Chemistry", "no": "Nobelprisen i kjemi", "se": "Nobelpriset i kemi"}, "dateAwarded": "2004-10-06", "laureates": [{"fullName": {"en": "Aaron Ciechanover"}, "id": "779", "knownName": {"en": "Aaron Ciechanover"}, "links": {"action": "Get", "href": "https://api.nobelprize.org/2/laureate/779", "rel": "laureate", "types": "application/json"}, "motivation": {"en": "for the discovery of ubiquitin-mediated protein degradation", "se": "för upptäckten av ubiquitinmedierad proteinnedbrytning"}, "portion": "1/3", "sortOrder": "1"}, {"fullName": {"en": "Avram Hershko"}, "id": "780", "knownName": {"en": "Avram Hershko"}, "links": {"action": "Get", "href": "https://api.nobelprize.org/2/laureate/780", "rel": "laureate", "types": "application/json"}, "motivation": {"en": "for the discovery of ubiquitin-mediated protein degradation", "se": "för upptäckten av ubiquitinmedierad proteinnedbrytning"}, "portion": "1/3", "sortOrder": "2"}, {"fullName": {"en": "Irwin Rose"}, "id": "781", "knownName": {"en": "Irwin Rose"}, "links": {"action": "Get", "href": "https://api.nobelprize.org/2/laureate/781", "rel": "laureate", "types": "application/json"}, "motivation": {"en": "for the discovery of ubiquitin-mediated protein degradation", "se": "för upptäckten av ubiquitinmedierad proteinnedbrytning"}, "portion": "1/3", "sortOrder": "3"}], "links": {"action": "Get", "href": "https://api.nobelprize.org/2/nobelPrize/che/2004", "rel": "nobelPrize", "types": "application/json"}, "meta": {"disclaimer": "https://www.nobelprize.org/about/terms-of-use-for-api-nobelprize-org-and-data-nobelprize-org/#disclaimer", "license": "https://www.nobelprize.org/about/terms-of-use-for-api-nobelprize-org-and-data-nobelprize-org/#licence", "terms": "https://www.nobelprize.org/about/terms-of-use-for-api-nobelprize-org-and-data-nobelprize-org/"}, "prizeAmount": 10000000, "prizeAmountAdjusted": 13324969}]);
  });

  it('should reject when fetch fails', async () => {
    const url = 'http://api.nobelprize.org/2.1/nobelrize/che/1800';
    const result = cancellableFetch(url);

    await expect(result).rejects.toThrow('Network response fail');
  });

  it('should cancel the request', async () => {
    const url = 'http://api.nobelprize.org/2.1/nobelPrize/che/2004';
    const result = cancellableFetch(url);

    result.cancel();

    await expect(result).rejects.toThrow('Request was cancelled');
  });
});
