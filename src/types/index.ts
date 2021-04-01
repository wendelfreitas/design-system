export enum ModalStateEnum {
  OPENED = 1,
  CLOSED = 0,
}

export type ModalProps = ModalStateEnum.OPENED | ModalStateEnum.CLOSED;
