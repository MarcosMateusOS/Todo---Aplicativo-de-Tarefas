import env from "@/env";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

export const client = new DynamoDBClient({ region: env.AWS_REGION })