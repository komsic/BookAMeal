class ResponseTransformer {
  static transform(statusCode, data = 'Oops!!! We just ran into an error') {
    if (data.includes('error')) {
      return {
        status: 'failure',
        error: data,
      };
    }

    return {
      status: 'success',
      data,
    };
  }
}

export default ResponseTransformer;
