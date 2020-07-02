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
            "Effect": "Allow",
            "Action": "logs:CreateLogGroup",
            "Resource": "arn:aws:logs:eu-central-XXXXXXXX:*"
        },
        {
            "Effect": "Allow",
            "Action": [
                
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
  `
  }

  constructor() { }

  getExamples() {
    return this.examples;
  }

}
