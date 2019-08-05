# Lambda React App

This is a boiler plate project that demonstrates hosting a react application on lambda and presented via a private API Gateway. The project is deployed to AWS via a serverless template.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project.

### Prerequisites

You need to have serverless, npm, and node installed on your client.

### Installing

First things first - clone the repo

Go into the client directory and create a build of the sample react application. react-scripts will complain about dependencies if you install the packages at the root first.

```
cd client
npm run build
```

Install dependencies at the root

```
npm i
```

Update the serverless.yml file with your aws account specific information.

## Deployment

deploy to AWS with serverless

```
sls deploy --force --region <region>
```

## Authors

- **Michael Rowlinson**
