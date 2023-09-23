const fs = require('fs');
const http = require('http');
const url = require('url');

/////////////////////////////////////////////////////////
// FILE


// Blocking Syncronous way
// const textIn = fs.readFileSync('./txt/input.txt','utf-8');
// console.log(textIn);
// const textOut = `This is what we know about avocado: ${textIn}. \nCreated on : ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt',textOut);
// console.log('FIle Written!');


// Non-blocking asyncronous way
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//     if (err) return console.log('Error 🛴');
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2);
//         fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
//             console.log(data3);

//             fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//                 console.log("Your file has been written 😊!");
//             });
//         });
//     });
// });

// console.log("Will read file!");


/////////////////////////////////////////////////////////
// SERVER

const server = http.createServer((req, res) => {
     const pathName = req.url;
     if(pathName === "/" || pathName === "/overview"){
        res.end('This is the Overview.');
     }else if(pathName === "/product"){
        res.end('This is the Product.');
     }else if(pathName === "/api"){

      fs.readFile('./dev-data/data.json', 'utf-8', (err, data) => { 
         // console.log(typeof data,"data");
         const productData =  JSON.parse(data);
         console.log(productData, typeof productData);
         const newData = JSON.stringify(productData);
         console.log(newData, typeof newData);
      });
        
        res.end('API');
     }else{
      res.writeHead(404);
      res.end("<h1>Page not found!<h1>");
     }
    
});

server.listen(8081, '127.0.0.1', () => {
    console.log('Listening to request on port 8081');
});



