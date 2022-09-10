import React,{useState,createContext,useContext} from "react";
const AppContext = createContext()
const AppProvider = ({children}) =>{
  const[index,setIndex]= useState(0)
  const [indexSlide, setIndexSlide] = useState(0)
 const [products, setProducts] = useState([
   {
     id: '1',
     name: 'costume africaine cotton,filafil,',
     price: 30000,
     images: [
       'https://dl.airtable.com/.attachmentThumbnails/437e814bc38ad243934c3b3d1bd6c904/b499704d',
       'https://dl.airtable.com/.attachmentThumbnails/c8df37be92977d2946dbae7296be9b8c/7c0475ea',
     ],
     description:
       'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
     content:
       'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
     colors: ['red', 'black', 'teal'],
     sizes: ['XL', 'L', 'M', 'XM', 'LX'],
   },
   {
     id: '2',
     name: 'costume africaine cotton,filafil',
     price: 30000,
     images: [
       'https://dl.airtable.com/.attachmentThumbnails/9d53f195ca33a52dd9bd0a4980194177/5e7be93a',
       'https://dl.airtable.com/.attachmentThumbnails/14f1d274c5931ad4e71645eaad604cbc/75851b82',
     ],
     description:
       'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
     content:
       'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
     colors: ['red', 'black', 'green'],
     sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     
   },
   {
     id: '3',
     name: 'costume africaine cotton,filafil',
     price: 30000,
     images: [
       'https://dl.airtable.com/.attachmentThumbnails/b0993bd38d94fcaa7d0c573519330415/10a514ab',
       'https://dl.airtable.com/.attachmentThumbnails/7dd7df427531b4a7bbc37e64dc9f6809/6bd7aa77',
     ],
     description:
       'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
     content:
       'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
     colors: ['yellow', 'red', 'teal'],
     sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     
   },
   {
     id: '4',
     name: 'costume africaine cotton,filafil',
     price: 30000,
     images: [
       'https://dl.airtable.com/.attachmentThumbnails/d66dd36f5e8cfb694baf4b9933bbe6c5/ac44bd10',
       'https://dl.airtable.com/.attachmentThumbnails/b70d000816288e309f2c20e60d299a32/42e9201e',
     ],
     description:
       'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
     content:
       'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
     colors: ['red', 'black', 'green'],
     sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     
   },
   {
     id: '5',
     name: 'costume africaine cotton,filafil',
     price: 30000,
     images: [
       'https://dl.airtable.com/.attachmentThumbnails/af3e0e742b2409bd34ba54e69d770da1/698ecb53',
       'https://dl.airtable.com/.attachmentThumbnails/a81f17b05efcacd38ca25e0454c768bf/068cb970',
     ],
     description:
       'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
     content:
       'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
     colors: ['red', 'black', 'teal'],
     sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     
   },
   {
     id: '6',
     name: 'costume africaine cotton,filafil',
     price: 30000,
     images: [
       'https://dl.airtable.com/.attachmentThumbnails/2e495042600689782c2bf6666de3fd84/b6b95cdd',
       'https://dl.airtable.com/.attachmentThumbnails/2e495042600689782c2bf6666de3fd84/b6b95cdd',
     ],
     description:
       'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
     content:
       'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
     colors: ['green', 'yellow', 'teal'],
     sizes: ['XL', 'L', 'M', 'XM', 'LX'],
    
   },
   {
     id: '7',
     name: 'robe bazin,homme',
     price: 40000,
     images: [
       'https://dl.airtable.com/.attachmentThumbnails/74374b26c757a9c55f8dbc81719f705a/31c4fe0d',
       'https://dl.airtable.com/.attachmentThumbnails/74374b26c757a9c55f8dbc81719f705a/31c4fe0d',
     ],
     description:
       'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
     content:
       'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
     colors: ['red', 'black', 'teal'],
     sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     
   },
   {
     id: '8',
     name: 'robe bazin,homme',
     price: 40000,
     images: [
       'https://dl.airtable.com/.attachmentThumbnails/ce91e8c4c772153b23191140c3606b61/b76e08f3',
       'https://dl.airtable.com/.attachmentThumbnails/ce91e8c4c772153b23191140c3606b61/b76e08f3',
     ],
     description:
       'How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.',
     content:
       'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
     colors: ['red', 'black', 'teal'],
     sizes: ['XL', 'L', 'M', 'XM', 'LX'],
    
   },
   {
     id: '9',
     name: 'robe wax femme',
     price: 15000,
     images: [
       'https://dl.airtable.com/.attachmentThumbnails/6d277a46dabff9d8badb0149ad1e1663/01326665',
       'https://dl.airtable.com/.attachmentThumbnails/6d277a46dabff9d8badb0149ad1e1663/01326665',
     ],
     description:
       'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
     content:
       'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
     colors: ['red', 'black', 'teal'],
     sizes: ['XL', 'L', 'M', 'XM', 'LX'],
    
   },
   {
     id: '10',
     name: 'robe bazin,homme',
     price: 40000,
     images: [
       'https://dl.airtable.com/.attachmentThumbnails/61890acd3c380a259ea7deba4e921490/92974eed',
       'https://dl.airtable.com/.attachmentThumbnails/61890acd3c380a259ea7deba4e921490/92974eed',
     ],
     description:
       'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
     content:
       'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
     colors: ['red', 'black', 'teal'],
     sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     
   },
   {
     id: '11',
     name: 'robe femme',
     price: 15000,
     images: [
       'https://dl.airtable.com/.attachmentThumbnails/9b372f1a1718b17c24b6170521d0751a/a5772603',
       'https://dl.airtable.com/.attachmentThumbnails/9b372f1a1718b17c24b6170521d0751a/a5772603',
     ],
     description:
       'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
     content:
       'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
     colors: ['red', 'black', 'teal'],
     sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     
   },
   {
     id: '12',
     name: 'robe femme',
     price: 15000,
     images: [
       'https://dl.airtable.com/.attachmentThumbnails/ba8fa5039acab0faee05e20960e64bf3/2a13ce42',
       'https://dl.airtable.com/.attachmentThumbnails/ba8fa5039acab0faee05e20960e64bf3/2a13ce42',
     ],
     description:
       'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
     content:
       'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
     colors: ['red', 'black', 'teal'],
     sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     
   },
   {
     id: '13',
     name: 'costume africaine cotton,filafil',
     price:30000,
     images: [
       'https://dl.airtable.com/.attachmentThumbnails/4c1801908e906d7a269063070ca7533f/e3ecccc2',
       'https://dl.airtable.com/.attachmentThumbnails/4c1801908e906d7a269063070ca7533f/e3ecccc2',
     ],
     description:
       'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
     content:
       'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
     colors: ['red', 'black', 'teal'],
     sizes: ['XL', 'L', 'M', 'XM', 'LX'],
    
   },
   {
     id: '14',
     name: 'robe femme',
     price:15000,
     images: [
       'https://dl.airtable.com/.attachmentThumbnails/7fb03c0626ecdf552ca8463b426c5fa2/8b7be3af',
       'https://dl.airtable.com/.attachmentThumbnails/7fb03c0626ecdf552ca8463b426c5fa2/8b7be3af',
     ],
     description:
       'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
     content:
       'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
     colors: ['red', 'black', 'teal'],
     sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     
   },
   {
     id: '15',
     name: 'boubou tradionnel',
     price:30000,
     images: [
       'https://dl.airtable.com/.attachmentThumbnails/611547d368380c1625951acb8afc19b1/7df4c449',
       'https://dl.airtable.com/.attachmentThumbnails/611547d368380c1625951acb8afc19b1/7df4c449',
     ],
     description:
       'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
     content:
       'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
     colors: ['red', 'black', 'teal'],
     sizes: ['XL', 'L', 'M', 'XM', 'LX'],
    
   },
 ])
 const [productSecond, setProductSecond] = useState([
   {
     id: '1',
     name: 'iniforme scolaire',
     image: [
       'https://dl.airtable.com/.attachmentThumbnails/e7c98d49a0aa2a0d439ff1f10795e74d/a26b1418',

       'https://dl.airtable.com/.attachmentThumbnails/ef5f2cdb40f33cd11c0053b292592a7d/5efca18b',
       'https://dl.airtable.com/.attachmentThumbnails/57be02bd51090651b8f3e02c041b4fb3/66d536e2',
       'https://dl.airtable.com/.attachmentThumbnails/4df532f7c00a34481091ae180522740f/b28d4729',
     ],
     description:
       'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
     content:
       'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
     colors: ['red', 'black', 'orange'],
     sizes: ['XL', 'L', 'M', 'XM', 'LX'],
   },
   {
     id: '2',
     name: 'iniforme scolaire',
     image: [
       'https://dl.airtable.com/.attachmentThumbnails/7b215d28b8715ffa149a452f3308cf3b/ee86b87c',
       'https://dl.airtable.com/.attachmentThumbnails/a4ec558ea64446cc0e597a887e4bf702/73cdc5c8',
       'https://dl.airtable.com/.attachmentThumbnails/2a2293fc9a67172fc850a9f6e2bb1656/e391dab3',
       'https://dl.airtable.com/.attachmentThumbnails/bffb6f104b438abf8d9a3b8309ed6847/3aa4e96e',
     ],
     description:
       'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
     content:
       'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
     colors: ['yellow', 'black', 'teal'],
     sizes: ['XL', 'L', 'M', 'XM', 'LX'],
   },
   {
     id: '3',
     name: 'iniforme scolaire',
     image: [
       'https://dl.airtable.com/.attachmentThumbnails/c0e8852bf0323c51f6c319ab884d5828/c231b6a5',
       'https://dl.airtable.com/.attachmentThumbnails/b6a7c7a5cf5dff37395185beb250e18c/5c8d496d',
       'https://dl.airtable.com/.attachmentThumbnails/c6b1e85982eb446a7caf19470b083b76/8d9437fa',
       'https://dl.airtable.com/.attachmentThumbnails/1f5442ab566b5b553c2154a006379fa9/ec7fd201',
     ],
     description:
       'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
     content:
       'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
     colors: ['lime', 'red', 'blue'],
     sizes: ['LX', 'L', 'M', 'XM', 'XL'],
   },
   {
     id: '4',
     name: 'iniforme scolaire',
     image: [
       'https://v5.airtableusercontent.com/v1/7/7/1663804800000/Vjzn5QfU1OBBFYD6BCJBCA/7SvWhLdZ-S9fs7N_D3WJ-r6oP_419vy3h2oYyT0G41RKYcaHaZrppTfUa4MyyhsZ8iHq7WtIxIPwqvWX5mT7zQ/vzYWdvQL8AcQXx8rcu894Vc4DSoG8I1WpgF6ZCoEXX0',
       'https://v5.airtableusercontent.com/v1/7/7/1663804800000/WBMLlE-96ey2idI_2HvtJg/VvoGCU952HAFQPWKE5UdFP_Me_APaQSjSCnew0UlzL7Z6lSOVk9gdEvSEyHW4aFi4F_1tzUg2ZqAmHErpx9wKw/6Ddd_5eBGxcGHiTCYrL2ZBCTx_4B6hezQd59oLg5110',
       'https://v5.airtableusercontent.com/v1/7/7/1663804800000/84jmUuj7HBe43-b8i_V09w/kSHfvLZppHAWAGeo_Z7ICYCJ7Ab16URGm186fgcLLBQ9N29JPsDuKjwFDQHMgpT-cyqZqvSUbTzVZSW6452giQ/HuDJ4L5m0o_7DQ8rJJOrv-7xlWIc3PC0KkE-8wrpf7w',
       'https://v5.airtableusercontent.com/v1/7/7/1663804800000/edyKYVDHfd6EPUNYSmQQSw/96AQ3JoHcIDYngfGkNJyjFugxg29VNBZudcc1r6bKwWrNIykj5jM2pWnargqQa_va7-02Cq8wQAx6CZKmwWAOw/nTNFXXkZHhImdCg_P3Z9EkjDlEgWt-Re439IeHX-E7o',
     ],
     description:
       'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
     content:
       'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
     colors: ['yellow', 'black', 'blue'],
     sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     price: 501,
   },
   {
     id: '5',
     name: 'iniforme scolaire',
     image: [
       'https://v5.airtableusercontent.com/v1/7/7/1663804800000/dIlU-bNhLM0LdUe6aqUPow/XIisRaeNpaAFzSQVcrwcgakZm4Re-xCGFU1gDhOJJCYeQUV8x4eUh7s6OhvOlcidARkOcnSvpRB2RhsOEqVMiA/pA6QROtjyPsq8YzTEgUYWOMYsw_kSsqi3QvNXApLtnc',
       'https://v5.airtableusercontent.com/v1/7/7/1663804800000/3prFS59XvtPcIrbO9G5Usw/ltVsYXxMxRN4MHRX-XN8wmNY_AGWywJ4rFrM_OMyAYBjwjo2jaOkUfI3HsehhdJiVIfijHfmHgfWWcecdNGjsw/QoczoMRA7O0trAPU92md-xvBV2sRhktQN4yEAx_ACxA',
       'https://v5.airtableusercontent.com/v1/7/7/1663804800000/VgNE6cF1aAF2CIO-r7n7bA/qhyOeTrcIN3RIACxU7CiVbcbp1sW9uTff_vM0ldigV5uuENtll9PBCbDAOsWyUAATtZnP3dxV3-DmD1oHuFx8g/Nn2D6Jd839wemp1_ETeZGqBUCgURrQ0Rzgm2XYEl2hY',
       'https://v5.airtableusercontent.com/v1/7/7/1663804800000/mR9G2-xdMf0RY8ib1twzQA/s-nGEY-uN0Xr2lsF5FinC0_ykU3SsP_050tBeRtjR_JKVAmf212UBI2P1qSdODJS0gnMoJpEnfG2qeNRwvMsmw/sQwkLbmqucrAlOW4zA9Kyngpa1piE7E_qkIkDzlZlrg',
     ],
     description:
       'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
     content:
       'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
     colors: ['yellow', 'black', 'blue'],
     sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     price: 501,
   },
   {
     id: '6',
     name: 'iniforme scolaire',
     image: [
       'https://v5.airtableusercontent.com/v1/7/7/1663804800000/3qyHY9Ijm-HnsJgZg4X6cg/kYdlZAJOprkpO9YT15-SFUOans56-tAkiszrhv2EZEe29DFRgoSQx-uO4YlbpHwTmbm_5WWPpv_p8EaDUcbuDw/9KasC0jeH9l8AVLXjlYzR1oVzUC5gKlIqhVsfwgnrwA',
       'https://v5.airtableusercontent.com/v1/7/7/1663804800000/Re8Jgwb1IjzEnlmiMfn7Zw/-ub_uh4f6FkKbVSziSbzkmKYkyzCxZ3bbvF9uUVGXsV45WaFB61O_wAtdg0v6I961gPQkMk2VDC5O7KFrz4aDQ/M6lb1crsxd7S-oWKDYhHmJ3MjirBgt7URS9jbnA-R0c',
       'https://v5.airtableusercontent.com/v1/7/7/1663804800000/lCx9h-U0rpgnFTl7aTB3Kw/t_7na7zcCETmepvJkQoLYek3repMHUR59oCCJZxpJIvy0hzK8GM1j_6Effh6KTB6xKToH6s1ouKzcGwwRafbqw/izDYFbdyw3DbJFM8Jm1ylYOcxJ9mooy3ix-FkI1TaQQ',
       'https://v5.airtableusercontent.com/v1/7/7/1663804800000/8w4_LxV71pbJRjsP0zZfWw/HxvOncDMbB-yUGCmROBT_EzKRiFvR1ONPUljxOcXaqLa0l6uO3zl8iWc-Q-ZTaz3KyOVrr_uxr_orZFWIoiDhQ/ksTywDK7gysV4iWypGde1Y9WVKPR3x4DS2zgaE-5pHQ',
     ],
     description:
       'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
     content:
       'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
     colors: ['yellow', 'black', 'blue'],
     sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     price: 501,
   },
   {
     id: '7',
     name: 'iniforme scolaire',
     image: [
       'https://v5.airtableusercontent.com/v1/7/7/1663804800000/Q3JcT4cPG9Tr2vef6udY9w/5LrkXpmmb0mOU5HHZtzhJK1BJ0dsi4_iYnfkZEnM2SUThYYp1XfNxzHpIVmAW1YgKp6mpFWVvVRmCP-dmB8N9w/4aDM4smDzffvRA4mPP1Da7HbJ6TEmIbLQFKAA-NnGZw',
       'https://v5.airtableusercontent.com/v1/7/7/1663804800000/zW8bqgC9IQZvqeZU6DV9Sg/rT8zWE9erHfJeF5FJAlva9-t62l9Kk8Nd1Crf0ZnluhJN7DXTBrFFr3JsMNFej-f4E94Z1fZEgdORh6wy0LGsg/-NUzfJmRIHH7RgarWyomsCXSfdxsAe4mAUgXSnqX4Lo',
       'https://v5.airtableusercontent.com/v1/7/7/1663804800000/vFaS0FCxeVLtBgNq6xpXyg/5YVxTixabUCpJmzbX9brsjP7JoQsqhB_PkwfT6FOAsMQerHGJEgKn7xf7gBnnNuMu5LcWLF6WDAEqWnwgTlySw/AcBTKG_t96iplXwf1r-wq_vmBiF5TbupodT4n_VbPJ0',
       'https://v5.airtableusercontent.com/v1/7/7/1663804800000/SjlbZ6lr7-Tdnu1-Eur8kw/7hfxpO1-8ErPfduBlgZTT1pO_-UMqSl7jqMr6n16W3wl05vhJARUdfkifJaf25zFocWXUOtXRNPUq96VNyIsaQ/HL88R1QrO-P1DLeO-IlaW_VeGSSzzyE10LGR2m0Y158',
     ],
     description:
       'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
     content:
       'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
     colors: ['yellow', 'black', 'blue'],
     sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     price: 501,
   },
   {
     id: '8',
     name: 'tenue de travail',
     image: [
       'https://dl.airtable.com/.attachmentThumbnails/a65a5da1a4c3b104c0a58a9c29bc22b2/0cf5462b',
       'https://dl.airtable.com/.attachmentThumbnails/10f6a0b53c5e1fe591259615bead611c/bb1823d7',
       'https://dl.airtable.com/.attachmentThumbnails/bc510b333d562abbdecd2343f3615d14/ccd7187e',
     ],
     description:
       'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
     content:
       'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
     colors: ['yellow', 'black', 'blue'],
     sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     price: 501,
   },
   {
     id: '9',
     name: 'tenue de travail',
     image: [
       'https://dl.airtable.com/.attachmentThumbnails/18073e046cee9d3e94f1f681c724e6e2/e67dd57b',
       'https://dl.airtable.com/.attachmentThumbnails/c37e954f8485097bec205e9e7f30969f/da3dfc0c',
       'https://dl.airtable.com/.attachmentThumbnails/5eec64b745082728477c3b157ddf1af3/a60f7ed7',
       'https://dl.airtable.com/.attachmentThumbnails/e76f0f4093318652b28c1e60bcd49ee6/5a00deb5',
     ],
     description:
       'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
     content:
       'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
     colors: ['black', 'blue', 'green'],
     sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     price: 201,
   },
   {
     id: '10',
     name: 'tenue de travail',
     image: [
       'https://dl.airtable.com/.attachmentThumbnails/8889ab9152fcab4fc0bed30f3dea8d25/755ca47c',
       'https://dl.airtable.com/.attachmentThumbnails/0d43df60577b73297d5c7ee2bb3658dd/540b45b9',
       'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTCIBei1FTaqoywQoEvE1oCwkECcENTkM8d5TOBay13BqTxZ8NKhwGxYQx4lVftb2r8trWvDkLTaJnw&usqp=CAc',
     ],
     description:
       'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
     content:
       'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
     colors: ['orange', 'black', 'teal'],
     sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     price: 201,
   },
   {
     id: '11',
     name: 'uniform scolaire',
     image: [
       'https://dl.airtable.com/.attachmentThumbnails/9a486f167981394d6618c8d28a6803e0/2e3d3ae2',
       'https://dl.airtable.com/.attachmentThumbnails/d81327366bac2a06f68eec0e2f24ab79/80951300',
       'https://dl.airtable.com/.attachmentThumbnails/0c835a3f1867593f68b9253d3f7999da/a600a93d',
       'https://dl.airtable.com/.attachmentThumbnails/dcf7951dc4f4e1f9b8fb92e8d43181b8/e217422c',
     ],
     description:
       'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
     content:
       'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
     colors: ['blue', 'black', 'red'],
     sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     price: 201,
   },
   {
     id: '12',
     name: 'blouse de travail  medicale',
     image: [
       'https://dl.airtable.com/.attachmentThumbnails/23fdbb12fcc92369c627c2426b515812/fdad0741',
       'https://dl.airtable.com/.attachmentThumbnails/d1929f9c70cff641af9b69b678d27a03/43aa4a76',
       'https://dl.airtable.com/.attachmentThumbnails/e973b9f727790a8ff70e77c7b7d150bc/0426f6c0',
       'https://dl.airtable.com/.attachmentThumbnails/696b8b4f25c0f3edd693ca774c65139b/c2781f48',
     ],
     description:
       'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
     content:
       'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
     colors: ['green', 'black', 'yellow'],
     sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     price: 201,
   },
   {
     id: '13',
     name: 'blouse de travail  femme de menage',
     image: [
       'https://dl.airtable.com/.attachmentThumbnails/3206cc5dea4e48a666162d268fc42744/783e4e1c',
       'https://dl.airtable.com/.attachmentThumbnails/7b90f1900bcaa5c866b67d136f94373b/0d855259',
     ],
     description:
       'Plébiscité par le monde du stylisme, Dieuf Dieul Couture a su séduire une clientèle internationale par le choix des matières, le glamour, la douceur et l’esprit du détail.',
     content:
       'Notre service client vous contactera juste après votre commande pour collecter les mensurations de votre tenue sur-mesure.',
     colors: ['red', 'black', 'teal'],
     sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     price: 201,
   },
 ])
 const [slide, setSlide] = useState([
   {
     id: 1,
     image:
       'https://dl.airtable.com/.attachmentThumbnails/6d277a46dabff9d8badb0149ad1e1663/01326665',
     name: 'boubou africain,femme',
     title:
       "le boubou est une chemise africaine composèe d'un grand rectangle de tissu avec une ouverte au centre pour le cou.",
   },
   {
     id: 2,
     image:
       'https://dl.airtable.com/.attachmentThumbnails/efec7322cd741d010f6eaf7a65ae6860/46493d23',
     name: 'uniforme scolaire,homme',
     title:
       "le boubou est une chemise africaine composèe d'un grand rectangle de tissu avec une ouverte au centre pour le cou.",
   },
   {
     id: 3,
     image:
       'https://dl.airtable.com/.attachmentThumbnails/f49a0a00e0d9780e30c6f9c7aa3c6991/a59fa742',
     name: 'uniforme scolaire,fille',
     title:
       "le boubou est une chemise africaine composèe d'un grand rectangle de tissu avec une ouverte au centre pour le cou.",
   },
   {
     id: 4,
     image:
       'https://dl.airtable.com/.attachmentThumbnails/74374b26c757a9c55f8dbc81719f705a/31c4fe0d',
     name: 'boubou  africain,homme',
     title:
       "le boubou est une chemise africaine composèe d'un grand rectangle de tissu avec une ouverte au centre pour le cou.",
   },
   {
     id: 5,
     image:
       'https://dl.airtable.com/.attachmentThumbnails/ce91e8c4c772153b23191140c3606b61/b76e08f3',
     name: 'boubou africain,homme',
     title:
       "le boubou est une chemise africaine composèe d'un grand rectangle de tissu avec une ouverte au centre pour le cou.",
   },
   {
     id: 6,
     image:
       'https://dl.airtable.com/.attachmentThumbnails/d5f6f37e1152a62d916b72af04763b27/4c04b343',
     name: 'tenue de travail',
     title:
       "le boubou est une chemise africaine composèe d'un grand rectangle de tissu avec une ouverte au centre pour le cou.",
   },
   {
     id: 7,
     image:
       'https://dl.airtable.com/.attachmentThumbnails/65a6e34680d307772b0bd51ace763e63/00fc551c',
     name: 'tenue de travail',
     title:
       "le boubou est une chemise africaine composèe d'un grand rectangle de tissu avec une ouverte au centre pour le cou.",
   },
   {
     id: 8,
     image:
       'https://dl.airtable.com/.attachmentThumbnails/d71119bcbbf55c95b39dc1c35178fbcf/0d1d6cc9',
     name: 'boubou africain,homme et femme',
     title:
       "le boubou est une chemise africaine composèe d'un grand rectangle de tissu avec une ouverte au centre pour le cou.",
   },
 ])
 
 return(
  <AppContext.Provider value={{
   products,
   setProducts,
   productSecond,
   setProductSecond,
   index,
   setIndex,
indexSlide,
setIndexSlide,
slide,
setSlide
  }}>
{children}
  </AppContext.Provider>
 )

}
export const useGlobalContext = () => {
  return useContext(AppContext)
}
export { AppContext, AppProvider }