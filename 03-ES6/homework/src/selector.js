var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)) resultSet.push(startEl);

  for(let elem of startEl.children){
    resultSet = resultSet.concat(traverseDomAndCollectElements(matchFunc, elem));
  }

  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if(selector[0] === '#') return 'id';
  if(selector[0] === '.') return 'class';
  if(selector.split('.').length > 1) return 'tag.class';
  return 'tag'; 
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    matchFunction = element => '#' + element.id === selector;
  } else if (selectorType === "class") {
    matchFunction = element => element.classList.contains(selector.substring(1));
  } else if (selectorType === "tag.class") {
    matchFunction = element => {
      const [tag, className] = selector.split('.')
      return (
        element.tagName.toLowerCase() === tag.toLowerCase() &&
        element.classList.contains(className)
      );
    }
  } else if (selectorType === "tag") {
    matchFunction = element => element.tagName.toLowerCase() === selector.toLowerCase();
  }
  return matchFunction;
};

function $(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
}
