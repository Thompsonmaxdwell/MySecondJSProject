
// SEARCCH FILTER  HERE

let searchForm = document.querySelector('#search-form');
searchForm.addEventListener('keyup', function(e){
    let searchInput = searchForm.querySelector['input'];
    // GET VALUE    
        let searchValue =e.target.value.toLowerCase();
        let mybook = list.getElementsByTagName('li');
        Array.from(mybook).forEach(function(book){
         let mytitle = book.firstElementChild.textContent;
        if(mytitle.toLowerCase().indexOf(searchValue)!=-1){
            book.style.display = 'block';

        }else{
            book.style.display = 'none';
        }
            
 
        })
     
   
})




// UL DELETING CONTENT HERE
let list = document.querySelector('ul');
let btnli = document.querySelectorAll('ul li');


Array.from(btnli).forEach(function(book){
    list.addEventListener('click', function(e){
        e.preventDefault();
        if(e.target.className == 'delete'){
            const li = e.target.parentElement;
            list.removeChild(li);

            
        if(confirm(`I  sure You really Want to Delete.......! `)){
          
     }else{
        confirm('Click the Cancel Button to  go back.......!')
    }


        }
    })
})
                                            

// SEARCH ADD BUTTON FORM
        let addForm  = document.querySelector('#add-form');
         
      
        addForm.addEventListener('submit', function(e){
             e.preventDefault();
             let values = addForm.querySelector('input[type="text"]').value;
             const btn = document.querySelector('#btn')
             let checks = values.includes('@gmail.com');
             let message = document.querySelector('.message')

             addForm.onclick = function(){
                 if(values == checks){
                     values.textContent += checks;
                       return true
                   
                 }else if(values = ''){
                    values.textContent = '';
  
                      return false                     
                 }

             }
            
             if(!checks || values == "") return false; 
                    
             
             // create Element in Li tag
             let myLi = document.createElement('li');
             let mySpan1 = document.createElement('span');
             let mySpan2 = document.createElement('span');

                                                                                                                         
            //  APPPEND ELEMENT HERE
             myLi.appendChild(mySpan1)
             myLi.appendChild(mySpan2)
             list.appendChild(myLi)
             addForm.querySelector('input[type="text"]').value =null;



        
            // APPEND TEXT-CONTENT
            mySpan1.textContent = values;
            mySpan1.className = 'li-book';
            mySpan2.className = 'delete';
            mySpan2.textContent = 'delete'; 
           console.log(mySpan1)

       
        


             // STYLING TEXT-CONTENT
            mySpan1.style.color = 'coral'
            mySpan1.style.textDecoration = 'underline'



        

});
  



