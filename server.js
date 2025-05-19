const http = require('http');

const server = http.createServer((req,res) =>{
    const url =req.url;
    const method=req.method; // yo add garna birse raicha hai
    console.log(url);

    if ( url == "/about" && method=="GET") //yele yeta k garyou tani hmm??
    {
       
        res.end(` 
            <h1>this is about page</h1> 
            <p> gping good so far</p>`);
    }

    if( url == "/contact" && method=="GET")
    {
        res.end(`
            <p> contact number : 999999 </p>`)
    }
    res.end (" hello people from my server");
})

server.listen(3000,()=>{
console.log("heelooo we from my server ....server is running on port 3000")
})// developer mode ma matra yo garne ho lah