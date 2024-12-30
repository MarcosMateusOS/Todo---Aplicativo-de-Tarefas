provider "aws" {
  region = "us-east-1"
}

resource "aws_dynamodb_table" "demo-table" {
  name = "demo-table"
  billing_mode = "PAY_PER_REQUEST"
  hash_key = "pk"
  range_key = "sk"


  attribute {
    name = "pk"
    type = "S"
  }


  attribute {
    name = "sk"
    type = "S"
  }
}


resource "aws_dynamodb_table" "tasks" {
  name = "tasks"
  billing_mode = "PAY_PER_REQUEST"
  hash_key = "id"
  range_key = "user_id"


  attribute {
    name = "id"
    type = "S"
  }


  attribute {
    name = "user_id"
    type = "S"
  }


   global_secondary_index {
    name            = "TasksIndex"
    hash_key        = "id"
    projection_type = "ALL"
  }
}