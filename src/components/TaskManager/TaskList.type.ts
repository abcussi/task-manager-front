
export namespace TaskList {
    export interface Item {
        _id?: string | number;
        userId: string;
        title: string;
        description:string;
        status: string;
        refUserId: string;
        referedEmail?: string;
    }
}
