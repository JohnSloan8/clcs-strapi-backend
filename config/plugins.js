module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: env("AWSAccessKeyId"),
        secretAccessKey: env("AWSSecretKey"),
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
