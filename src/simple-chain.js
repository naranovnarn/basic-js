const chainMaker = {
  chain : [],
  getLength() {
    
 
  },
  addLink(value) {
    this.chain.push(`( ${value} )`)
  },
  removeLink(position) {
    this.chain.forEach( function(item, index){
      if (index == position) {
        this.chain.splice(index, 1)
      }
    })
  },
  reverseChain() {
    this.chain.reverse()
  },
  finishChain() {
    let result = ''
    this.chain.forEach(item => result +=`~~${item}`)
    return result.slice(2, result.length)
  }
};

module.exports = chainMaker;
