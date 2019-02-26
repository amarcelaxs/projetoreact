//aula parada 2:30  pagina anterior/paxima 

import React, {Component} from 'react';
import api from "../../services/api";
import "./styles.css";



export default class Main extends Component{
    //state e sempre um objeto
    //sempre quando existir um estado o metodo render vai ficar escutando qualquer alteração do state para redirecionar
    state = {
        products: [], 
        productInfo:{},
        page:1,
    }



    componentDidMount(){
        this.loadProducts();
    }

//deve ser feito desta maneira para poder ser interpretado
//se por this.loadProduct ele não vai conseguir identificar sua função
    loadProducts = async (page = 1) => {
        //const response = await api.get("/products");
        const response = await api.get('/products?page=${page}');
        
        const {docs, ...productInfo} = response //criando variaveis  docs tem os produtos e a outra tem o restante das informações
        


        this.setState({products: docs,productInfo});
    };


prevPage = () => {}

nextPage = () => {//armazenar informações 
    const {page,productInfo} =this.state;

    if (page === productInfo.pages) return;

    const pageNumber = page + 1 ; //se não tiver pafinas

    this.loadProducts(pageNumber);

}



    render(){//escutando o state
        //return <h1>contagem de produtos:{this.state.products.length}</h1>//traz a quantidade de produtos 
       
       
       const{ products} = this.state;
        return(//exibe o nome dos 10 produtos / map =  foreach 
            <div className="product-list">
                {products.map(product =>(//ao usar o map sempre sera solicitado  uma key oara identificar a lista
                    //<h2 key={product._id}>{product.title}</h2>//titulo do produto
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>
                        <a href="">Acessar</a>
                    </article>
                ))}
                <div className="actions">
                    <button onClick={this.prevPage}>Anterios</button> 
                    <button onClick={this.nextPage}>Proximo</button> 
                </div>
            </div>
        )
    }

}