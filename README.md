# ReviewTrackers Coding Challenge

- Challenge description and details [here](https://gist.github.com/nvreynolds/1698e40b2ced65ea6c631259ba5538fd).

## Setup/Running the project

1. First run `npm install` from the root directory to install project dependencies.
2. Then run `npm start` to start the project.

## Design Choices

- Project bootstrapped with create-react-app typescript template.
- Typically when interfacting with an API for my data I would leverage a library like react-query to manage cached api state. I also tend to use the contextAPI for app wide data needs like logged user data details, app prefences (light/dark mode).
  - When setting up routing using react-routers newest version I discovered that they now provide a hook to pass context from a parent to child component and I wanted to try it out! The hook is [useOutletContext](https://reactrouter.com/en/main/hooks/use-outlet-context)

## Testing

- To run tests use the command `npm test`.

## Future Enhancements
