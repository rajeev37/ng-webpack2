const HTTP = new WeakMap();
class HomeComponent {

    constructor($http) {
        HTTP.set(this, $http);
    }

    getData(){
     return HTTP.get(this).get('/super-admin/dashboard').then(result => console.log('**', result.data) );
   }

}
export default HomeComponent;
