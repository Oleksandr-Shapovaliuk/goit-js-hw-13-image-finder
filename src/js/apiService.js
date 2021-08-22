const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '22985561-6f56c709b0fde55bd248ea1e4';

export default class ApiService {
   constructor(params) {
      this.params = params;
      this.BASE_URL = BASE_URL;
      this.API_KEY = API_KEY;
   }

   getFetchUrl() {
      let fetchUrl = `${this.BASE_URL}?key=${this.API_KEY}`;
      const paramsKey = Object.keys(this.params);

      return fetchUrl = paramsKey.reduce((acc, param) => {
         return `${acc}&${param}=${this.params[param]}`; 
      }, fetchUrl);
   }

   fetchImages() {
      const fetchUrl = this.getFetchUrl();
  
      return fetch(fetchUrl).then(res => res.json()).then(({hits}) => hits);
   }

   incrementPage() {
      this.params.page += 1;
   }

   resetPage() {
      this.params.page = 1;
   }
} 