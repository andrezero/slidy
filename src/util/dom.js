export const createNode = (type, className, content) => {
  const element = document.createElement(type);
  if (className) {
    element.className = className;
  }
  if (Array.isArray(content)) {
    content.forEach((node) => appendNode(element, node));
  } else if (typeof content === 'string') {
    element.innerHTML = content;
  } else if (content) {
    appendNode(element, content);
  }
  return element;
};

export const appendNode = (parent, child) => {
  parent.appendChild(child);
};

export const getWidth = (container) => container.getBoundingClientRect().width;
