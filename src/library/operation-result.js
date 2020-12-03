import Enums from './enums';

export default class OperationResult {
  data: any;
  status: number;
  errors: {[id: string]: string[]};
  exception: Error;

  static success(data?: any) {
    const op = new OperationResult();
    op.status = Enums.OperationResultStatues.Success;
    op.data = data;
    return op;
  }

  static failed(err?: Error) {
    const op = new OperationResult();
    op.status = Enums.OperationResultStatues.Failed;
    op.exception = err;
    return op;
  }
}
