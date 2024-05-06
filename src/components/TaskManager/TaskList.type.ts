
export namespace TaskList {
    export interface Item {
        _id?: string;
        userId: number;
        title: string;
        description:string;
        status: string;
        refUserId: string;
    }
}
