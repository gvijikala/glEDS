export const config = {
  host: 'https://author-p115973-e1140754.adobeaemcloud.com', //'https://author-<your-program-id>-<your-env-id>.adobeaemcloud.com', // Replace this with your AEM Author URL
  project: 'edge-delivery-service', // Optional

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
