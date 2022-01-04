import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './detail.scss';

function ProductView(){
    const [ product, setProducts ] = useState(null);
    const param = useParams();
    const { id } = param;
    useEffect(() => {
        axios.get(
            `https://fd6e5b0f-041b-4df8-b2a4-379f78748cf6.mock.pstmn.io/product/${id}`
        ).then(function(result){
            setProducts(result.data);
        })
        .catch(function(error){
            console.log(error);
        })
    }, []);
    if(product == null) {
        return <div>상품정보를 받고있습니다...</div>
    }
    return(
        <div className="innerCon" id="detail">
            <h1>{product.name}</h1>
            <div id="image-box">
                <img src={product.imageUrl} alt="제품" />
            </div>
            <div id="profile-box">
                <img src="/images/icons/avatar.png" alt="아이콘" />
                <span>{product.sellar}</span>
            </div>
            <div id="contents-box">
                <div>{product.name}</div>
                <div>{product.price}</div>
                <div>2022년 1월 4일</div>
                <div>설명글 어쩌고 저쩌고....</div>
            </div>
        </div>
    );
}
export default ProductView;