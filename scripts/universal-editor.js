(function initUniversalEditor() {
  document.addEventListener('DOMContentLoaded', () => {
    const corsScript = document.createElement('script');
    corsScript.src = 'https://universal-editor-service.adobe.io/cors.js';
    corsScript.async = true;
    document.head.appendChild(corsScript);

    function ensureMeta(name, content) {
      let m = document.querySelector(`meta[name="${name}"]`);
      if (!m) {
        m = document.createElement('meta');
        m.setAttribute('name', name);
        m.setAttribute('content', content);
        document.head.appendChild(m);
      }
    }

    ensureMeta('urn:adobe:aue:system:aemconnection', 'aem:https://local--gleds--gvijikala.aem.page');
    ensureMeta('urn:adobe:aue:config:service', 'https://localhost:3000');

    document.querySelectorAll('h1').forEach((el) => {
      el.setAttribute('data-aue-resource', 'urn:aemconnection:/path/to/page/jcr:content');
      el.setAttribute('data-aue-type', 'text');
      el.setAttribute('data-aue-prop', 'jcr:title');
      el.setAttribute('data-aue-label', 'Title');
    });
  });
})();
