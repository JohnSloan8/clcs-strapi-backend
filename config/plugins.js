module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: "AKIAXYCK2IKWJ7437PHK",
        secretAccessKey: "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",
        region: "eu-west-1",
        params: {
          Bucket: "clcsawsbucket",
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // ...
});
