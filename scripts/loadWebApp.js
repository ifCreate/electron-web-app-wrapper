const fs = require('fs')
const path = require('path')
const app = require('electron').remote.app

let arrSite = []
let siteIndex = 0

// UI
const webView = document.querySelector('#wrapped-app')
const leftBtn = document.querySelector('.navigate-left')
const rightBtn = document.querySelector('.navigate-right')

const configPath = path.join(app.getAppPath(), 'sites.config')
alert('configPath: ' + configPath)
console.log(`Loading web app config from ${configPath}`)
fs.readFile(configPath, 'utf8', (err, data) => {
  if (err) {
    alert(`无法读取 ${configPath}，请检查格式及位置`)
    throw err
  }
  console.log('--- sites.config loaded: ---')
  console.log(data)
  console.log('--- sites.config end ---');
  
  // turn config file to array of site urls
  // split by new line; 
  arrSite = data.split(/[\r\n]+/)
  if (!arrSite.length) {
    alert(`无法读取 ${configPath}，请检查格式及位置`)
    return
  }
  webView.src = arrSite[0]
})

function goToNextApp() {
  siteIndex = (siteIndex + 1) % arrSite.length
  webView.src = arrSite[siteIndex]
}
function goToPrevApp() {
  siteIndex = (siteIndex - 1)
  if (siteIndex < 0) siteIndex += arrSite.length
  webView.src = arrSite[siteIndex]
}

rightBtn.addEventListener('click', goToNextApp)
leftBtn.addEventListener('click', goToPrevApp)