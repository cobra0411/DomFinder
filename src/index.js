const getPath = (root, child) => {
  const path = [];
  while (child !== root) {
    const parent = child.parentElement;
    const childrens = Array.from(parent.children);
    const childIndex = childrens.indexOf(child);
    path.push(childIndex);
    child = parent;
  }
  return path;
};
const findValue = (root, path) => {
  let node = root;
  for (let i = path.length - 1; i >= 0; i--) {
    node = node.children[path[i]];
  }
  console.log("node text", node.innerText);
  return node.innerText;
};

const findNodeValue = () => {
  const root1 = document.getElementById("root1");
  const childA = document.getElementById("NodeA");
  const root2 = document.getElementById("root2");
  let path = getPath(root1, childA);
  const result = findValue(root2, path);
  return result;
};

console.log(findNodeValue());
