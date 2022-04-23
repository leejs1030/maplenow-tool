const errorGenerator = (name: string, code: number, message: string) => {
  class NewError extends Error {
    code: number;

    constructor() {
      super();
      this.name = name;
      this.code = code;
      this.message = message;
    }
  }

  return NewError;
};

export default errorGenerator;
