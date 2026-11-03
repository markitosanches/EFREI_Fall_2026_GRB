import http from '../http-common'

class ProductDataServide {
    getAll(){
        return http.get('/product')
    }
    create (data){
        return http.post('/product', data)
    }
    get (id) {
        return http.get(`/product/${id}`)
    }
    update(id, data) {
        return http.put(`/product/${id}`, data )
    }
    delete(id){
        return http.delete(`/product/${id}`)
    }

    

}
export default new ProductDataServide()