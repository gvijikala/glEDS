// Sidekick config for EDS project

const config = {
  host: 'https://author-p115973-e1140754.adobeaemcloud.com',
  project: 'edge-delivery-service',

  buttons: [
    {
      action: 'edit',
      condition: () => true,
    },
    {
      action: 'preview',
      condition: () => true,
    },
    {
      action: 'publish',
      condition: () => true,
    },
    {
      action: 'generate-variations',
      label: 'Generate Variations',
      condition: () => true,
    },
  ],
};

export default config;
