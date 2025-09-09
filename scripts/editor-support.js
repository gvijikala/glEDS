// add delayed functionality here
export default function init({ document }) {
    console.log('Universal Editor support script loaded');
  document.querySelectorAll('h1').forEach((el) => {
    el.setAttribute('data-editor-item-id', 'hero.title');
    el.setAttribute('data-editor-type', 'text');
    el.setAttribute('data-editor-label', 'Hero Title');
  });
}
