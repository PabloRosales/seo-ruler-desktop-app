import './index.css';
import { createRoot } from 'react-dom/client';
import { Wrapper } from './Wrapper';

document.title = 'SEO Ruler';
document.addEventListener('drop', (event) => event.preventDefault());
document.addEventListener('dragover', (event) => event.preventDefault());

const container = document.getElementById('app');
if (container) {
  const root = createRoot(container);
  root.render(<Wrapper />);
}
