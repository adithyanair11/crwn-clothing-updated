import {CategoryContainer,CategoryTitle,CategoryProducts} from'./category.styles';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { ProductCard } from '../../components/product-card/product-card.component';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/categories.selector';

export const Category = () => {
    const {category} = useParams();

    const categoriesMap = useSelector(selectCategoriesMap);

    const [products,setProducts] = useState(categoriesMap[category]);
    
    useEffect(() => {
        setProducts(categoriesMap[category])
    },[category,categoriesMap]);

    return(
        <CategoryProducts>
        <CategoryTitle>
            {category}
        </CategoryTitle>
            <CategoryContainer>
            {
            products && products.map((product) => 
                 <ProductCard key={product.id} product={product}/>
            )
            }
            </CategoryContainer>
        </CategoryProducts>
    )
}

