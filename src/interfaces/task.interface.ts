export interface ITask {
    description: string | undefined;
    checkbox: boolean;
}

export interface IAction {
    type: string;
    description: string | undefined;
    checkbox: boolean;
}