/** @jsx createElement */
/** @jsxFrag createFragment */

// используется вместо React.createElement
function createElement (tag, props, ...children) {
  if (typeof tag === 'function') return tag(props, ...children);
  const element = document.createElement(tag);

  Object.entries(props || {}).forEach(([name, value]) => {
    if (name.startsWith("on") && name.toLowerCase() in window) {
      element.addEventListener(name.toLowerCase().substr(2), value);
    } else if (name === "className") {
      element.setAttribute('class', value.toString());
    } else {
      element.setAttribute(name, value.toString());
    }
  });

  children.forEach((child) => {
    appendChild(element, child);
  });

  return element;
}

function appendChild (parent, child) {
  if (Array.isArray(child)) {
    child.forEach(nestedChild => appendChild(parent, nestedChild));
  } else {
    parent.appendChild(child.nodeType ? child : document.createTextNode(child));
  }
}

function createFragment (props, ...children) {
  return children;
}

export {
  createElement,
  createFragment,
  appendChild,
};

