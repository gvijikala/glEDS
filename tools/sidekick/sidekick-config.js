export const config = {
  host: 'http://localhost:4502'  // 'https://author-<your-program-id>-<your-env-id>.adobeaemcloud.com', // Replace this with your AEM Author URL
  project: 'glEDS', // Optional

  buttons: [
    {
      action: 'edit',
      condition: () => true
    },
    {
      action: 'preview',
      condition: () => true
    },
    {
      action: 'publish',
      condition: () => true
    }, 
    {
      action: 'generate-variations',
      label: 'Generate Variations',
      condition: () => true
    }
  ]
};
