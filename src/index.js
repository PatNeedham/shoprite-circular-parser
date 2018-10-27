const espree = require("espree");
const cheerio = require('cheerio')
const fs = require('fs')

const getItems = (html) => {
  const $ = cheerio.load(html);
  let circularPageScript = null;
  let nodes = $('script[type="text/javascript"]')
  nodes.map((i, elem) => {
    const {children} = elem
    if (children && children.length > 0 && children[0].data.includes("'circularPage'")) {
      circularPageScript = children[0];
    }
  })
  if (circularPageScript) {
    // console.log('circularPageScript:')
    // console.log(circularPageScript.data)
    // const ast = espree.parse(circularPageScript.data.body);
    // console.dir(ast);
    // console.log(Object.keys(ast))
    // console.log(ast.body)
    // console.dir(ast.body[0].expression)
    const ast = espree.parse(circularPageScript.data)
    const val = ast.body[0].expression.arguments[1].body.body[0].expression.arguments[0].body.body[0].expression.expressions[0].arguments[0].properties[0].value.properties[6].value
    let items = []
    console.log('Object.keys(val): ' + Object.keys(val))
    console.log('Object.keys(val.elements): ' + Object.keys(val.elements))
    val.elements.forEach((e, index) => {
      console.log(`for index ${index}, Object.keys(e): ${Object.keys(e)}`)
      let newItem = {}
      e.properties.map((prop, propIndex) => {
        console.log(`key: ${prop.key.value}\nval: ${prop.value.value}\n\n`)
        newItem[prop.key.value] = prop.value.value
      })
      items.push(newItem);
    })
    return items
  } else {
    console.log('circularPageScript was missing from the HTML file!')
    return []
  }
}

const data = fs.readFileSync('./example-files/Weekly Ad.html', 'utf8');
const items = getItems(data);
console.dir(items);