import { useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';
import { CategoriesPreview } from '../categories-preview/categories-preview.component';
import { Category } from '../category/category.component';
import './shop.styles.css';
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { useDispatch } from "react-redux";
import {setCategories} from '../../store/categories/categories.actions'

export const Shop = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        const getCategoriesMap = async() => {
            const categoriesArray = await getCategoriesAndDocuments();
            dispatch(setCategories(categoriesArray))
        }
        getCategoriesMap();
        
    },[])
    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />

            <Route path=':category' element={<Category />} />
        </Routes>
    )
}