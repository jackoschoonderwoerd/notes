import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StartEndLogstreamService {

  examples: object = {
    example_01: `
  {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Deny",
            "Action": "logs:CreateLogGroup",
            "Resource": "arn:aws:logs:eu-central-XXXXXXXX:*"
        },
        {
            "Effect": "Deny",
            "Action": [
                "logs:CreateLogStream",
                "logs:PutLogEvents"
            ],
            "Resource": [
                "arn:aws:logs:eu-central-XXXXXXXX:log-group:/aws/lambda/XXX FUNCTION NAME XXX:*"
            ]
        }
    ]
  }
  `,
    example_02: `
  {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "logs:CreateLogGroup",
            "Resource": "arn:aws:logs:eu-central-XXXXXXXX:*"
        },
        {
            "Effect": "Allow",
            "Action": [
                "logs:CreateLogStream",
                "logs:PutLogEvents"
            ],
            "Resource": [
                "arn:aws:logs:eu-central-XXXXXXXX:log-group:/aws/lambda/XXX FUNCTION NAME XXX:*"
            ]
        }
    ]
  }
  `,
    example_03: `
  {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Deny",
            "Action": [
                "logs:CreateLogGroup",
                "logs:CreateLogStream",
                "logs:PutLogEvents"
            ],
            "Resource": [
                "arn:aws:logs:*:*:*"
            ]
        }
    ]
}
  `
  }

  constructor() { }

  getExamples() {
    return this.examples;
  }

}

// AWSLambdaBasicExecutionRole-8a717278-2877-4d9b-a0df-666ae3b7716d

// AWSLambdaBasicExecutionRole-2c093618-e528-4c65-b3c7-f33a727be2b6