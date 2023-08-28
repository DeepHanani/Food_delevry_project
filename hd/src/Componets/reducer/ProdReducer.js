const initialState = {
    data : [
        {
          id: 1,
          title: "buttermilk pancakes",
          category: "breakfast",
          price: 15.99,
          img: "https://www.sagargairefastfoodcorner.com/images/mob-slider7.jpg",
          desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        },
        {
          id: 2,
          title: "diner double",
          category: "lunch",
          price: 13.99,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7qtvLHt3dkzF8M7URkt7XP_s2eLoJghkJ9w&usqp=CAU",
          desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
        },
        {
          id: 3,
          title: "godzilla milkshake",
          category: "shakes",
          price: 6.99,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvHxvSc4InG-dJWmC7NA_rgnUW_sm0ew7mVg&usqp=CAU",
          desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
        },
        {
          id: 4,
          title: "country delight",
          category: "breakfast",
          price: 20.99,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCkk_qCnaxRA2GaateMNorL1LVnEouTdECsQ&usqp=CAU",
          desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
        },
        {
          id: 5,
          title: "egg attack",
          category: "lunch",
          price: 22.99,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDH9thyz55ISpkGsHqVOLYCuWyZWMJJ6k9bQ&usqp=CAU",
          desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
        },
        {
          id: 6,
          title: "oreo dream",
          category: "shakes",
          price: 18.99,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmzA8wYomh5nHXTG2HBXjTcDtBjszo9BTyZg&usqp=CAU",
          desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
        },
        {
          id: 7,
          title: "bacon overflow",
          category: "breakfast",
          price: 8.99,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpwNVGAsgzaFvVKzgMqrhnzE5_SLwuf839fT0VtjerFcO6timzX2JAcMaDwoYH48syjNQ&usqp=CAU",
          desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
        },
        {
          id: 8,
          title: "american classic",
          category: "lunch",
          price: 12.99,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBbaxDacJ6UYg7xkXAztudaIkQIeoBG4XZxXkTOm1E4lJzgBt8OPUvVxDNkSsOxh4-wdk&usqp=CAU",
          desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
        },
        {
          id: 9,
          title: "quarantine buddy",
          category: "shakes",
          price: 16.99,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCsyRwyaKolXJ4NXhFH8qmgOz4yH4BvoisLH_dPI3ZH0-p3apbyEScfv7SwbOquB56mw&usqp=CAU",
          desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
        },
        {
          id: 10,
          title: "bison steak",
          category: "dinner",
          price: 22.99,
          img: "https://assets.gqindia.com/photos/61e16e982c3e19caea634ee9/16:9/pass/best%20and%20worst%20foods%20to%20eat%20for%20dinner.jpg",
          desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
        },
      ],

      cart : []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'GET_DATA':
    return { ...state, data : payload }

    case 'ADD_ITEM' :

       let add = [...state.cart];

       if(add.length == 0){
        add.push({item:payload, count : 1});
        }else{
          let index = add.findIndex((v)=> {

            return v.item.id == payload.id;
          });

          if(index>=0){
            add = add.map((v)=>{
              console.log(v , "kkkkkk");
    
              if(v.item.id == payload.id)
              {
                return { item: payload, count : v.count+1}
                
              }
              else
              {
                return v;
              }
    
            })
          }
    
          else
          {
    
            add.push({item:payload, count : 1});
    
          }
        }

        return   {...state, cart: add}


        case 'INC_ITEM' : 

        let plusItem = state.cart.map((product)=>{
                      console.log(product,"oooo")

                      if(product.item.id == payload){
                        console.log(payload,"uuuu")
                        return {...product , count : product.count+1 }
                      }
                      return product

        })

        return {...state , cart : plusItem}

        case 'DEC_ITEM' :

        let decrease  = state.cart.map((product)=>{
                     if(product.item.id == payload){
                         
                      return {...product , count : product.count-1 } 


                     }

                     return product
        })

        return {...state , cart : decrease};

        case 'REMOVE_ITEM' :

        let removeItem = state.cart.filter((product)=>{

         return product.item.id !== payload;

        })

        return {...state , cart : removeItem}

  default:
    return state
  }
}
