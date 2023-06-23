export interface ITask {
    title: string | undefined;
    description: string | undefined;
    checkbox: boolean;
}

export interface IAction {
    type: string;
    title: string | undefined;
    description: string | undefined;
    checkbox: boolean;
}