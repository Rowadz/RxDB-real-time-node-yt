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
    password: {
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
    posts: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          title: {
            type: 'string',
          },
          body: {
            type: 'string',
          },
        },
      },
    },
  },
  required: ['name', 'sex', 'password'],
}

module.exports = {
  userSchema,
}
