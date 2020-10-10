import { createElement } from '../domHelpers/createElement';

export default function(props, ...children) {
  return (
    <div className="header">{ children }</div>
  );
}

