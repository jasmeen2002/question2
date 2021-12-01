/*
 * Project:
 * File Name: main.js
 * Description:
 *
 * Created Date:
 * Author:
 *
 */

const { unzip } = require("unzipper");
 fs = require("fs")
PNG = require("pngjs").PNG,
path = require("path")


const IOhandler = require("./IOhandler"),
  zipFilePath = `${__dirname}/myfile.zip`,
  pathUnzipped = `${__dirname}/unzipped`,
  pathProcessed = `${__dirname}/grayscaled`;

  IOhandler.unzip(zipFilePath ,pathUnzipped)
  .then(() => IOhandler.readDir(pathUnzipped))
  .then((files) =>files.forEach(file=> {
      if(!(file === '__MACOSX')){
      let pathIn = path.join(pathUnzipped, '/', file)
      console.log(pathIn)
      let pathout = path.join(pathProcessed, '/', file)
      console.log(pathout)
      IOhandler.grayScale (pathIn, pathout)
      .then(() => console.log('done'))
      .catch(err => console.log(err))
      }
  
      
  })
      
      
  )
  .catch((err) => console.log(err))
  
    
    
    