import { PutItemCommand } from "@aws-sdk/client-dynamodb";
import { ICreateTaskRepository } from "./interfaces/create-task.repository";
import { client } from "@/infra/db/dynamo.client";

export class TaskRepository {
    async create(props: ICreateTaskRepository): Promise<void> {

        const { title, description, createdAt, finishAt, type, done } = props
        const input = {
            "Item": {
                "Title": {
                    "S": title
                },
                "Description": {
                    "S": description
                },
                "Type": {
                    "S": type
                },
                "Done": {
                    "BOOL": done
                },
                "CreatedAt": {
                    "S": createdAt.toISOString()
                },
                "FinishAt": {
                    "S": finishAt.toISOString()
                }
            },
            "TableName": "tasks"
        };

        const command = new PutItemCommand(input)

        const response = await client.send(command)

        console.log(response)
    }
}