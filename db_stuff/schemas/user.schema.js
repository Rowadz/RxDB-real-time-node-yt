const userSchema = {
  title: 'user schema',
  version: 0,
  description: 'what a typical user should look like',
  type: 'object',
  properties: {
    name: {
      type: 'string',
      primary: true,
    },
    sex: {
      type: 'string',
      enum: ['male', 'female', 'other'],
    },
    passowrd: {
      type: 'string',
    },
    date_of_birth: {
      type: 'string',
      format: 'date',
    },
    addresses: {
      type: 'array',
      maxItems: 5,
      uniqueItems: true,
      items: {
        type: 'object',
        properties: {
          country: {
            type: 'string',
          },
          city: {
            type: 'string',
          },
          extra_info: {
            type: 'string',
          },
        },
      },
    },
  },
  required: ['color'],
  encrypted: ['passowrd'],
}

module.exports = {
  userSchema,
}
