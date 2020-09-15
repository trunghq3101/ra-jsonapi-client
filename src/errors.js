export class NotImplementedError extends Error {
  constructor(message) {
    super(message);

    this.message = message;
    this.name = "NotImplementedError";
  }
}

export class HttpError extends Error {
  constructor(message, status) {
    super(message);

    this.message = message;
    this.status = status;
    this.name = "HttpError";
  }
}

export class MultipleError extends Error {
  constructor(data, status) {
    const message = data.errors[0].detail;
    super(message);

    this.message = message;
    this.status = status;
    this.name = "HttpError";
    this.errors = data.errors;
  }
}
