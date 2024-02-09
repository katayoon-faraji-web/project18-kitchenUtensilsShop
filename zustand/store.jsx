import { create } from "zustand";


const useStore = create((set,get) => ({
    shopItems: [],
    cartItems: [],
    wholeItems: [],
    cart:'closed',
    menu:'closed',
    searchbox:'closed',
    dropdown:'closed',
    page:1,
    page_num:'5',
    category:'',
    user:'Account',
    wholePrice:'0',
    wholeNumber:'0',
    set_wholePrice:(p)=>{
        set(state=>({
            wholePrice:state.wholePrice=p
        })) 
    },
    set_wholeNumber:(n)=>{
        set(state=>({
            wholeNumber:state.wholeNumber=n
        })) 
    },
    log_in_to_user:(name)=>{
        set(state=>({
            user:state.user=name
        }))
    },
    log_out_from_user:()=>{
        set(state=>({
            user:state.user='Account'
        }))
    },
    open_cart:()=>{
        set(state=>({
            cart:state.cart='opened'
        }))
    },
    close_cart:()=>{
        set(state=>({
            cart:state.cart='closed'
        }))
    },
    open_dropdown:()=>{
        set(state=>({
            dropdown:state.dropdown='opened'
        }))
    },
    close_dropdown:()=>{
        set(state=>({
            dropdown:state.dropdown='closed'
        }))
    },
    add_to_cart:(d)=>{
   
        set(state=>({
            cartItems:[...state.cartItems,d]
        }))
        console.log(get().cartItems);
    },
    delete_cart:()=>{
        set({cartItems:[]})
    },
    update_cart:(db)=>{
        set({cartItems:db})
    },
    open_searchbox:()=>{
        set(state=>({
            searchbox:state.searchbox='opened'
        }))
      },
      close_searchbox:()=>{
        set(state=>({
            searchbox:state.searchbox='closed'
        }))
      },
    open_menu:()=>{
      set(state=>({
          menu:state.menu='opened'
      }))
    },
    close_menu:()=>{
      set(state=>({
          menu:state.menu='closed'
      }))
    },
    set_page:(num)=>{
        set({page:num});
    },
    set_categ:(x)=>{
        set({category:x});
        if(get().category!=''){
            set({page_num:'2'});
        }else if(get().category==''){
            set({page_num:'5'});
        }
        
    },

    fetch:async () =>{
   
        const url = new URL('https://65b1e88a9bfb12f6eafc5897.mockapi.io/platesShop');

        // let x = console.log(get().category)
        url.searchParams.append('category',get().category); 
        url.searchParams.append('page', get().page);
        url.searchParams.append('limit', 9);
        
        fetch(url, {
        method: 'GET',
        headers: {'content-type':'application/json'},
        }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
        }).then(tasks => {
        // mockapi returns first 10 tasks that are not completed
            set((state) => ({ shopItems: tasks }));
            
        }).catch(error => {
        // handle error
        })
    } ,
    fetchWhole:async () =>{
   
        const url = new URL('https://65b1e88a9bfb12f6eafc5897.mockapi.io/platesShop');

        fetch(url, {
        method: 'GET',
        headers: {'content-type':'application/json'},
        }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
        }).then(tasks => {
        // mockapi returns first 10 tasks that are not completed
            set((state) => ({ wholeItems: tasks }));
            
        }).catch(error => {
        // handle error
        })
    } 
}))
export default useStore;

