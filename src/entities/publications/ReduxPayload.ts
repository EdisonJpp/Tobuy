export class ReduxPayload<T> {
    data?: T | T[] = [];
    loading?: boolean = false;
    error?: Error | any;
  }
  