import { createElement } from '../domHelpers/createElement';

// из-за реализации createElement требуется два аргумента (props, ...children)
export default function(props, ...children) {
  return (
    <div className="header">{ children }</div>
  );
}

