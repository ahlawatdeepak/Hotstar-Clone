 // const apikey="&apikey=1904d25f&";
    // const url="http://www.omdbapi.com/?s=";

    let id;
      let store;
async function searchMovie(e){
        // <<<<<<<<for catch the error trycatch>>>>>>>>>>>>>
        try {
            let url=`https://www.omdbapi.com/?s=${e}&apikey=1904d25f&`;
            let res= await fetch(url)
            let data=await res.json()
        //    console.log(data)
         store = data.Search;
           return data.Search
        } catch (error) {
            console.log("error :",error)
        }     
    }
    // <<<<<<append data>>>>>>>>>>>>
        var output=document.getElementById("output")
        function appendMovies(res){
            //console.log("res :",res)
            output.innerHTML=null;
            if(res===undefined){
                return false;
            }
               
                res.forEach(function(el,index){
                let p1=document.createElement("p")
                p1.setAttribute("name",index)
                p1.setAttribute("onclick","getmoviedata()")
                p1.setAttribute("id","getdata")
                p1.textContent=el.Title

                output.append(p1)
                
             })
            
        }

        
       

        function getmoviedata(){
             document.getElementById("lowerbox").innerHTML=null
        
             var test=event.target.getAttribute("name");
            let storedata=store[test]
            // console.log(storedata)
            
           let box=document.createElement("div")
           box.setAttribute("id","outputbox")


            let box2=document.createElement("div")
            box2.setAttribute("id","imgbox")
            let poster=document.createElement("img")
            poster.src=storedata.Poster
            box2.append(poster)

            let title=document.createElement("h3")
            title.textContent=storedata.Title

           let type=document.createElement("h4")
           type.textContent=storedata.Type

           let year=document.createElement("h5")
           year.textContent=storedata.Year
          
            box.append(box2,title,type,year)
          document.getElementById("lowerbox").append(box)
         
          
        }



   async function main(){
        let entreMovieName=document.getElementById("entremovie").value
        // console.log(entreMovieName)
    // <<<<<<<<passing entreMovieName value in searchMovie>>>>>>>>>>
        let res=await searchMovie(entreMovieName);
        // console.log("res :", res)

        appendMovies(res)
        
    }

    
    function debounceFunction(fun,delay){
        if(id){
            clearTimeout(id)
        }
     id=setTimeout(function(){
            fun();
        },delay);
    }