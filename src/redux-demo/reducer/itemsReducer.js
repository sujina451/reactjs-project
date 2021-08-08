const initialData={
    items:[
        {
            itemName:'Redmi Note 8 Pro',
            itemPrice:'27000',
            itemImage:'https://i01.appmifile.com/webfile/globalimg/in/cms/58F356D1-538B-E4C7-0D9E-5266A9306F8E.jpg'
        },
        {
            itemName:'Redmi Note 9 Pro',
            itemPrice:'29000',
            itemImage:'https://i02.appmifile.com/430_operator_in/30/01/2021/e95cb65d71fa8a1a5e7ee201e1a63d12.png'
        },
        {
            itemName: 'Redmi 8A',
            itemImage: 'https://www.giztop.com/media/catalog/product/cache/dc206057cdd42d7e34b9d36e347785ca/r/e/redmi_8a_1.jpg',
            itemPrice: '15,000'
        },
        {
            itemName: 'Realme 7 Pro',
            itemImage: 'https://static.digit.in/default/26af91b06c0e70e2de1d0ea6dd5aca991b81bb28.jpeg?tr=n-product_detail_leader_thumb',
            itemPrice: '25,000'
        },
        {
            itemName: 'Samsung Galaxy S20',
            itemImage: 'https://cdn.alzashop.com/ImgW.ashx?fd=f16&cd=SAMO0187b1',
            itemPrice: '60,000'
    
        },
        {
            itemName: 'Samsung Galaxy S20 Ultra',
            itemImage: 'https://www.dealayo.com/media/catalog/product/cache/1/image/1000x1231/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-s20ultra-2-nepal_1_1.jpg',
            itemPrice: '1,60,000'
    
        }
    ]
}

function itemsReducer(state=initialData,action){
    return state

}


export default itemsReducer
