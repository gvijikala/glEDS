// universal-editor.js

(function () {
  // Wait until DOM content is loaded
  document.addEventListener('DOMContentLoaded', () => {
    // 1. Load the Universal Editor CORS library
    const corsScript = document.createElement('script');
    corsScript.src = 'https://universal-editor-service.adobe.io/cors.js';
    corsScript.async = true;
    document.head.appendChild(corsScript);

    // 2. Insert meta tags about your AEM connection and Universal Editor service
    // If not already in your HTML
    function ensureMeta(name, content) {
      let m = document.querySelector(`meta[name="${name}"]`);
      if (!m) {
        m = document.createElement('meta');
        m.setAttribute('name', name);
        m.setAttribute('content', content);
        document.head.appendChild(m);
      }
    }

    // AEM author connection
    ensureMeta('urn:adobe:aue:system:aemconnection', 'aem:https://local--gleds--gvijikala.aem.page');
    // Universal Editor service
    ensureMeta('urn:adobe:aue:config:service', 'https://localhost:8000');

    // 3. Instrument editable elements
    // Example: make all <h1> editable
    document.querySelectorAll('h1').forEach((el) => {
      el.setAttribute('data-aue-resource', 'urn:aemconnection:/path/to/page/jcr:content');
      el.setAttribute('data-aue-type', 'text');
      el.setAttribute('data-aue-prop', 'jcr:title');
      el.setAttribute('data-aue-label', 'Title');
    });

    // Add more instrumentation as needed...
  });
})();
